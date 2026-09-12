// Guarded PWA service-worker registration.
// Only registers in production and outside Lovable preview / iframe contexts.

let registrationPromise: Promise<ServiceWorkerRegistration | undefined> | undefined;

export function registerServiceWorker(): Promise<ServiceWorkerRegistration | undefined> {
  if (registrationPromise) return registrationPromise;

  registrationPromise = (async () => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return undefined;

    const url = new URL(window.location.href);
    const hostname = url.hostname;

    const isPreview =
      hostname.startsWith("id-preview--") ||
      hostname.endsWith(".lovableproject.com") ||
      hostname === "lovableproject.com" ||
      hostname.endsWith(".lovableproject-dev.com") ||
      hostname === "lovableproject-dev.com" ||
      hostname.endsWith(".beta.lovable.dev") ||
      hostname === "beta.lovable.dev";

    const isIframe = window.top !== window.self;
    const isDev = import.meta.env.DEV;
    const disabledByQuery = url.searchParams.get("sw") === "off";

    const shouldRegister = !isDev && !isPreview && !isIframe && !disabledByQuery;

    if (!shouldRegister) {
      // Clean up any matching app-shell registrations in unsafe contexts.
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(
          regs
            .filter((reg) => reg.scope && reg.scope.endsWith("/") && reg.scope.includes(hostname))
            .map((reg) => reg.unregister()),
        );
      } catch {
        // ignore cleanup errors
      }
      return undefined;
    }

    try {
      const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      return reg;
    } catch (err) {
      console.error("Service worker registration failed", err);
      return undefined;
    }
  })();

  return registrationPromise;
}

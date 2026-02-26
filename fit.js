(() => {
  const DESIGN_WIDTH = 1920;
  const DESIGN_HEIGHT = 1080;

  function applyFit() {
    const viewport = document.querySelector(".viewport");
    const page = document.querySelector(".page");
    if (!viewport || !page) return;

    document.documentElement.classList.add("fit-enabled");

    const isAuthPage = document.body && document.body.classList.contains("auth_page");

    const scaleByWidth = window.innerWidth / DESIGN_WIDTH;
    const scale = Math.min(1, scaleByWidth);
    document.documentElement.style.setProperty("--fit-scale", scale.toFixed(4));

    if (isAuthPage) {
      const authHeight = Math.min(DESIGN_HEIGHT, Math.floor(window.innerHeight / scale));
      document.documentElement.style.setProperty("--auth-height", `${authHeight}px`);
    } else {
      document.documentElement.style.removeProperty("--auth-height");
    }

    // Transforms don't affect layout size; keep scroll height correct.
    viewport.style.height = `${page.offsetHeight * scale}px`;
  }

  window.addEventListener("load", applyFit);
  window.addEventListener("resize", () => requestAnimationFrame(applyFit));
  applyFit();
})();


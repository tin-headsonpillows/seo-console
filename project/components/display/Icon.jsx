import React from "react";

/* Icon substitution: SEO Console's own icon set was not in the source material.
   Lucide (via CDN) is used as the closest geometric-stroke match. See readme ICONOGRAPHY. */
function lucideReady() {
  if (!window.__lucideReadyPromise) {
    window.__lucideReadyPromise = new Promise((resolve) => {
      const check = () => { if (window.lucide) resolve(); else setTimeout(check, 100); };
      document.querySelectorAll('script[src*="lucide"]').forEach((s) => s.addEventListener("load", check));
      check();
    });
  }
  return window.__lucideReadyPromise;
}

export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.75, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    lucideReady().then(() => {
      if (!cancelled && ref.current) window.lucide.createIcons({ nameAttr: "data-lucide" });
    });
    return () => { cancelled = true; };
  }, [name]);
  return (
    <i
      {...rest}
      ref={ref}
      data-lucide={name}
      style={{ width: size, height: size, color, display: "inline-flex", flex: "0 0 auto", strokeWidth, ...style }}
    ></i>
  );
}

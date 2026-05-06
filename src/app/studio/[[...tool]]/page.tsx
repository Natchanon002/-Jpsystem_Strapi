"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(
  () =>
    import("next-sanity/studio").then((mod) => {
      const { NextStudio } = mod;
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const config = require("../../../../sanity.config").default;
      return function StudioInner() {
        return <NextStudio config={config} basePath="/studio" />;
      };
    }),
  { ssr: false, loading: () => <div style={{ height: "100vh", display: "grid", placeItems: "center", background: "#101112", color: "#fff", fontFamily: "sans-serif" }}>Loading Studio...</div> }
);

export default function StudioPage() {
  return <Studio />;
}

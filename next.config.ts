import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Evita avisos si ejecutas `npm run dev` desde la carpeta padre con `--prefix`.
    root: path.join(__dirname),
  },
};

export default nextConfig;

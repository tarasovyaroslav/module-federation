import NextFederationPlugin from "@module-federation/nextjs-mf";
import packageJson from "../package.json";

const deps = packageJson.dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        filename: "static/runtime/remoteEntry.js",
        remotes: {},
        exposes: {},
        shared: {
          ...deps,
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
        },
      })
    );

    return config;
  },
};

export default nextConfig;

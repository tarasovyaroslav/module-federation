import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;

    if (isServer) {
      config.optimization.usedExports = false;
    }

    config.plugins.push(
      new NextFederationPlugin({
        name: "app2",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./App": "./src/pages",
        },
        extraOptions: {
          exposePages: true,
          debug: true,
        },
        shared: {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
        },
      })
    );

    return config;
  },
};

export default nextConfig;

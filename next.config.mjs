/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify webpack configuration to handle serialization differently
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((loader) => {
          if (
            loader.sideEffects &&
            loader.issuer &&
            loader.issuer.include &&
            loader.issuer.include.includes("next/dist/compiled/webpack")
          ) {
            loader.sideEffects = true;
          }
        });
      }
    });

    // Return modified configuration
    return config;
  },
};

export default nextConfig;

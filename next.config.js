/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // TODO: When the GitHub repository name is known, add `basePath` and
  // `assetPrefix` here if this site is deployed at /<repository-name>/.
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'shopks';

const nextConfig = {
  transpilePackages: ['@hopify/ui'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : ''
};

export default nextConfig;

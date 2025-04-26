import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://picsum.photos/seed/**'),
      new URL('https://cloudflare-ipfs.com/**'),
      new URL('https://avatars.githubusercontent.com/**')],
  },
}

export default nextConfig;

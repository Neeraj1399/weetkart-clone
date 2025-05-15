// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.dummyjson.com', 'cdn.dummyjson.com', 'weetkart.com'], // ← add 'weetkart.com' here
  },
};

export default nextConfig;

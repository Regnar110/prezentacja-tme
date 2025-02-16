/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0, // client router cache - domyślny czas cachowania to 0
      static: 180, // client router cache - domyślny czas cachowania to 300
    },
  },
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
};

module.exports = nextConfig;
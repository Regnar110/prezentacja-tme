/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60",
          },
        ],
      },
    ]
  },
  // experimental: {
  //   staleTimes: {
  //     dynamic: 0, // client router cache - domyślny czas cachowania to 0
  //     static: 180, // client router cache - domyślny czas cachowania to 300
  //   },
  // },
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
};

module.exports = nextConfig;
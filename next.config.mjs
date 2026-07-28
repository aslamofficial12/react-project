const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.31.180:8081/:path*",
      },
    ];
  },
};

export default nextConfig;
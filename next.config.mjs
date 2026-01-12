/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	devIndicators: false,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	allowedDevOrigins: ["*.theopenbuilder.com"],
};

export default nextConfig;

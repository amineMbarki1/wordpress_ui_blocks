const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Extract the existing PostCSS loader
const postCSSLoader = defaultConfig.module.rules
	.find((rule) => rule.test && rule.test.toString().includes("css"))
	.use.find((use) => use.loader && use.loader.includes("postcss-loader"));

// Add Tailwind to the PostCSS plugins
postCSSLoader.options.postcssOptions.plugins = [
	require("autoprefixer")({ grid: true }),
	require("@tailwindcss/postcss"),
	...(postCSSLoader.options.postcssOptions.plugins || []).filter(
		(plugin) => plugin !== "autoprefixer", // Avoid duplicate autoprefixer
	),
];

module.exports = defaultConfig;

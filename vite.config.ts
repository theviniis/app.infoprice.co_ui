import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/styles/index.scss";',
				quietDeps: true,
			},
		},
	},
	resolve: {
		alias: {
			"@": resolve(root),
		},
	},
});

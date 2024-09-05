/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
		"^.+\\.svg$": "jest-transformer-svg",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
	coverageDirectory: "<rootDir>/.jest/coverage",
	snapshotResolver: "<rootDir>/.jest/snapshotResolver.cjs",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

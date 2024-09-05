const path = require("path");

const rootDir = path.resolve(__dirname, "..");

module.exports = {
	testPathForConsistencyCheck: "some/__tests__/example.test.js",
	/** resolves from test to snapshot path */
	resolveSnapshotPath: (testPath, snapshotExtension) => {
		return testPath.replace("src/", ".jest/snapshots/") + snapshotExtension;
	},

	/** resolves from snapshot to test path */
	resolveTestPath: (snapshotFilePath, snapshotExtension) => {
		return snapshotFilePath.replace(".jest/snapshots/", "src/").slice(0, -snapshotExtension.length);
	},
};

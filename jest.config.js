module.exports = {
	clearMocks: true,
	collectCoverage: true,

	// An array of glob patterns indicating a set of files for which coverage information
	// should be collected
	collectCoverageFrom: ['src/**/*.{ts,js}'],
	// The directory where Jest should output its coverage files
	// coverageDirectory: "coverage",
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};

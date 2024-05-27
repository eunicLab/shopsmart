module.exports = {
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!axios)/"
    ],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$": "<rootDir>/_mocks_/fileMock.js"
    },
    // Uncomment or remove if not needed
     setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testEnvironment: 'jsdom'
  };
 
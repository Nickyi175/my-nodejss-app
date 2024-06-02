module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testMatch: [
        "**/test/**/*.js"
    ],
    globals: {
        'babel-jest': {
            configFile: './babel.config.json'
        }
    }
};

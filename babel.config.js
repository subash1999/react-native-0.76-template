module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          "module:react-native-dotenv",
          {
            envName: "APP_ENV",
            moduleName: "@env",
            path: `./env/.env.${process.env.APP_ENV || "local"}`, // Load the environment file dynamically
            blocklist: null,
            allowlist: null,
            blacklist: null, // DEPRECATED
            whitelist: null, // DEPRECATED
            safe: false,
            allowUndefined: true,
            verbose: false,
          },
        ],
      ],
    };
  };
  
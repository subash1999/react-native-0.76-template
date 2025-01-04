module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      // this is commented out because of conflict with expo
      // refer to this thread on github, will use this after issue is fixed
      // https://github.com/goatandsheep/react-native-dotenv/issues/501
      // alternative solution proposed here
      // https://github.com/cchoi94/react-native-dotenv
      // plugins: [
      //   [
      //     "module:react-native-dotenv",
      //     {
      //       envName: "APP_ENV",
      //       moduleName: "@env",
      //       path: `./.env.${process.env.APP_ENV || "local"}`, // Load the environment file dynamically
      //       blocklist: null,
      //       allowlist: null,
      //       blacklist: null, // DEPRECATED
      //       whitelist: null, // DEPRECATED
      //       safe: false,
      //       allowUndefined: true,
      //       verbose: false,
      //     },
      //   ],
      // ],
    };
  };
  
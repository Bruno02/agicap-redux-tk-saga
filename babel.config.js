module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            app: './app',
            components: './app/components',
            reducers: './app/reducers',
            services: './app/services',
            views: './app/views',
            routes: './app/routes',
          },
        },
      ],
    ],
  };
};

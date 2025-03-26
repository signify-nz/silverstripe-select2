const webpack = require('webpack');
const mix = require('laravel-mix');

// Set up project folders
const themeFolder = './client';
const srcFolder = `${themeFolder}/src`;
const distFolder = `${themeFolder}/dist`;

if (process.env.NODE_ENV === 'development') {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
      })
    ],
    devtool: 'inline-source-map',
  });

  mix.sourceMaps();
} else {
  mix.webpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
      })
    ],
  });
}

// Disable auto-generated <type>.LICENSE file
mix.options({
  terser: {
    extractComments: false,
  },
  processCssUrls: false,
});

// This will automatically minify in production mode.
mix.js(`${srcFolder}/js/main.js`, `${distFolder}/js/main.js`)
  .sass(`${srcFolder}/scss/main.scss`, `${distFolder}/css`)

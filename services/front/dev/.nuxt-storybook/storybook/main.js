module.exports = {
  webpackFinal(config, options) {
    return options.nuxtStorybookConfig.webpackFinal(config, options)
  },
  stories: ['../../components/**/*.stories.@(ts|js)'],
  addons: ["@storybook\u002Faddon-controls","@storybook\u002Faddon-docs"],
}

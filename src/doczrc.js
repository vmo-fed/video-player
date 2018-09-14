export default {
  base: '/video-player/doc/',
  hashRouter: true,
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.css')
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    })

    return config
  }
}

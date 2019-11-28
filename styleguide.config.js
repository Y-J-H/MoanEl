const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const path = require('path')
const vueLoader = require('vue-loader')

const docSiteUrl =
  process.env.DEPLOY_PRIME_URL || 'https://vue-styleguidist.github.io'

module.exports = {
  jsxInExamples: true,
  simpleEditor: true,
  copyCodeButton: true,
  title: 'Vue Styleguidist jsx example',
  components: 'src/components/**/[A-z]*.jsx',
  defaultExample: false,
  ribbon: {
    text: 'Back to examples',
    url: `${docSiteUrl}/Examples.html`
  },
  version: '1.1.1',
  require: [path.join(__dirname, 'config/global.requires.js')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules|packages/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['transform-vue-jsx']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader'
        }
      ]
    },

    plugins: [new vueLoader.VueLoaderPlugin()].concat(
      process.argv.includes('--analyze') ? [new BundleAnalyzerPlugin()] : []
    )
  },
  usageMode: 'expand',
  exampleMode: 'expand', // 默认展开
  styleguideDir: 'dist',
  logger: {
    // 打印错误信息
    // One of: info, debug, warn
    // Suppress messages
    info: info => console.info(`NOOOOOO: ${info}`),
    // Override display function
    warn: message => console.warn(`NOOOOOO: ${message}`),
    debug: debug => console.debug(`NOOOOOO: ${debug}`)
  },
  pagePerSection: true // 是否控制每一个组件展示为一个页面
}

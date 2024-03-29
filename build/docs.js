import baseConfig from '.';
import merge from 'webpack-merge';
import { configs, inputs, outputs, loaders, plugins } from 'webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.docs(),
  output: outputs.docs(),
  plugins: [plugins.clean(), plugins.html()]
});

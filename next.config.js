const path = require("path");
const withSass = require('@zeit/next-sass')


module.exports = withSass({
  webpack(config, options) {

    config.resolve.alias["@components"] = path.join(__dirname, 'components');
    config.resolve.alias["@types"] = path.join(__dirname, 'types');
    config.resolve.alias["@stores"] = path.join(__dirname, 'stores');
    config.resolve.alias["@store"] = path.join(__dirname, 'stores', 'index');
    config.resolve.alias["@styles"] = path.join(__dirname, 'styles');
    config.resolve.alias["@utils"] = path.join(__dirname, 'utils');
    return config
  }
})

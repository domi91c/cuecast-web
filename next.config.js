const path = require("path");
const withSass = require('@zeit/next-sass')


module.exports = withSass({
  webpack(config, options) {
    config.resolve.alias["@components"] = path.join(__dirname, 'components');
    config.resolve.alias["@types"] = path.join(__dirname, 'types');
    config.resolve.alias["@styles"] = path.join(__dirname, 'styles');
    config.resolve.alias["@utils"] = path.join(__dirname, 'utils');
    config.resolve.alias["@actions"] = path.join(__dirname, '_actions');
    config.resolve.alias["@reducers"] = path.join(__dirname, '_reducers');
    config.resolve.alias["@constants"] = path.join(__dirname, '_store', 'constants');
    return config
  }
})

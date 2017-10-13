const path = require('path');

module.exports = function (source) {
    let protocolPath;
    try {
        protocolPath = this.loaders[this.loaderIndex].options.protocolPath
    }
    catch (e) { }
    if (!protocolPath) {
        throw new Error('Must set options.protocolPath in loader')
    }

    let filename = path.relative(protocolPath, this.resourcePath).replace(/\\/g, '/').replace(/^.\//, '');
    if (filename.startsWith('../')) {
        throw new Error('File is not in the protocolPath: ' + this.resourcePath)
    }
    filename = JSON.stringify('/' + filename);

    let output = source.replace(/\_\_filename/g, filename)
    return output;
}
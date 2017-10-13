const path = require('path');

module.exports = function (source) {
    if (!this.options || !this.options.protocolPath) {
        throw new Error('Must set protocolPath in loader options')
    }

    let filename = path.relative(this.options.protocolPath, this.resourcePath).replace(/\\/g, '/').replace(/^.\//, '');
    if (filename.startsWith('../')) {
        throw new Error('File is not in the protocolPath: '+this.resourcePath)
    }
    filename = JSON.stringify('/' + filename);

    let output = source.replace(/\_\_filename/g, filename)
    return output;
}
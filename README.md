Webpack loader for tsrpc-browser protocols
=== 

See [TSRPC](https://github.com/tsrpc) and [TSRPC Browser Client](https://github.com/tsrpc-browser)

### Usage
webpack.config.js
```js
const path = require('path');

//protocol path
const protocolPath = path.resolve(__dirname, 'protocol');

module.exports = {
    //...
    module: {
        rules: [
            {
                test: v => v.startsWith(protocolPath),
                loader: 'tsrpc-protocol-loader',
                options: {
                    protocolPath:  protocolPath
                }
            }
        ]
    },
    //...
}
```
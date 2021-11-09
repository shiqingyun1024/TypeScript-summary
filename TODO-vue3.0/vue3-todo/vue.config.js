const {resolve} = require('path');
module.exports = {
    devServer:{
        open:true
    },
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve(__dirname,'src'))
    }      
}
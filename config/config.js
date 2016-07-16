'use strict';

var initGlobalConfig = function(){
    var config = {
            server: {},
            client: {}
        };

    var defaultConfig = require('./env/default');
    config = defaultConfig;
    return config;
};

module.exports = initGlobalConfig();
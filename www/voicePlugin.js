var exec = require('cordova/exec');

exports.transform = function (arg0, success, error) {
    exec(success, error, 'voicePlugin', 'transform', [arg0]);
};

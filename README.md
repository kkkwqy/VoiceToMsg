# VoiceToMsg
科大讯飞语音识别cordova插件
安装识别语音的模块方法为：
cordova plugin add https://github.com/weid2014/VoiceToMsg.git

卸载rfid模块的
cordova plugin rm voicePlugin

查看已安装插件
cordova plugin ls

识别rfid的插件的调用方法为：
cordova.plugins.voicePlugin.transform("mandarin",function (msg) {
                alert("识别结果-->>"+msg);
            },function (err) {
                alert("err"+err);
            });

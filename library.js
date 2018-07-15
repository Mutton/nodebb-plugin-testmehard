(function (Plugin) {
    'use strict';

    Plugin.filterPost = function (data, callback) {
      console.log(postData);
      callback(null, postData);
    };

    Plugin.afterAppLoad = function () {
      console.log("GOTCHA Function!");
    };

})(module.exports);

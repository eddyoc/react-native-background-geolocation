const fs = require('fs');
const config = require('./config');

const appDir = config.appDir + '/LowYat';
const settingsGradlePath = appDir + '/android/settings.gradle';

// console.log('settingsGradlePath=' + settingsGradlePath);

function forAndroid() {
  const installPattern = new RegExp(`(include)\\s\\\':${config.commonModuleName}\\\'`);
  const settingsGradle = fs.readFileSync(settingsGradlePath);
  return installPattern.test(settingsGradle);
}

function forIos() {
  // currently we only change Info.plist and changes are only applied when necessary
  // no need to do check, so returning false here
  return false;
}

module.exports = { forAndroid, forIos };

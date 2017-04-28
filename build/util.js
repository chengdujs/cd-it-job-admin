const path = require('path');

module.exports = {
  root(...params) {
    return path.join(__dirname, '../', ...params);
  }
};

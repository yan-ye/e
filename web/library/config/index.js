require('./base');
$CONFIG.env = 1;
require('../../env_config');
require('../../env_config/' + $CONFIG.env_config);
require('../models');
global.$$ = require('../util/global');

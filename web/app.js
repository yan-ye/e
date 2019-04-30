require('./library/config');
const localeService = require('./library/services/locale');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const os = require('os');
console.error('-- NODE_ENV --', process.env.NODE_ENV);
if(argv.hasOwnProperty('start')){
    var port = argv.port || 8080;
    $CONFIG.web_port = port;
    $CONFIG.os_hostname = os.hostname();
    console.log($CONFIG.os_hostname,$CONFIG.web_port);
    switch (argv.start){
        case 'www':
            localeService.loadLang();
            $CONFIG.web_type = 'www';
            require('./www').start(port);
            break;
    }
}

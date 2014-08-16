var fis = module.exports = require('fis');
var name = 'ppfe';
fis.require.prefixes = [ name, 'scrat', 'fis' ];
fis.cli.name = name;
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.version = require('./version.js');
fis.cli.help.commands = [ 'release', 'install', 'server', 'init'];

var defaultConfig = require('./configs/default.js');
fis.config.merge(defaultConfig);

fis.olpm = function(info){
    if(typeof info === 'string') {
        info = {
            code : info,
            pack : arguments[1]
        };
    }
    info.pack = info.pack || fis.olpm.PACK_TYPE_EXTERNAL;
    fis.config.set('olpm', info);
    var domain = 'http://image.uc.cn';
    if(info.hasOwnProperty('domain') && info.domain){
        domain = info.domain.replace(/\/$/, '');
    }
    fis.config.set('roadmap.domain', domain);
    fis.config.set('roadmap.path', require('./configs/olpm.js'));
    fis.config.set('modules.prepackager', require('./plugins/postpackager/olpm-pack.js'));
};

fis.olpm.PACK_TYPE_INLINE   = 1;
fis.olpm.PACK_TYPE_EXTERNAL = 2;
//fis.olpm.PACK_TYPE_COMBO    = 3;

//alias
Object.defineProperty(global, name, {
    enumerable : true,
    writable : false,
    value : fis
});

// 快捷入口功能
fis.run = function(argv){
    var shortcut = fis.cli.info['fisShortcut'] || {};
    var env = argv[2];

    // 默认走dev
    if (argv.length < 3) {
        env = 'dev';
    }

    if (shortcut[env]) {
        var newArgv = argv.slice(0,2);
        newArgv = newArgv.concat(shortcut[env]);
        argv = newArgv;
        fis.env = env;
    }

    fis.cli.run(argv);
};

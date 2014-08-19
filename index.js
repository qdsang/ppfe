var fs = require('fs'),
    path = require('path');

var fis = module.exports = require('fis');
var name = 'ppfe';
fis.require.prefixes = [ name, 'scrat', 'fis' ];
fis.cli.name = name;
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.version = require('./version.js');
fis.cli.help.commands = [ 'release', 'install', 'server', 'init'];

var defaultConfig = require('./configs/default.js');
fis.config.merge(defaultConfig);

var defaultSetting = require('./configs/setting.js');
fis.config.merge(defaultSetting);

// fis.olpm = function(info){
//     if(typeof info === 'string') {
//         info = {
//             code : info,
//             pack : arguments[1]
//         };
//     }
//     info.pack = info.pack || fis.olpm.PACK_TYPE_EXTERNAL;
//     fis.config.set('olpm', info);
//     fis.config.set('roadmap.path', require('./configs/olpm.js'));
//     fis.config.set('modules.prepackager', require('./plugins/postpackager/olpm-pack.js'));
// };

// fis.olpm.PACK_TYPE_INLINE   = 1;
// fis.olpm.PACK_TYPE_EXTERNAL = 2;
//fis.olpm.PACK_TYPE_COMBO    = 3;

//alias
Object.defineProperty(global, name, {
    enumerable : true,
    writable : false,
    value : fis
});

function rootPath(){
    var root = path.resolve('.'), i = 0, num = 3;
    for (; i < num; i++) {
        if (fs.existsSync(root + '/package.json')) {
            break;
        }else {
            root = path.dirname(root);
        }
    }

    if (i == num) {
        root = '.';
    }

    return root;
}

// 入口功能
fis.run = function(argv){
    // 根据 package.json 文件位置定位root目录
    var root = rootPath();
    var info = fis.util.readJSON(root + '/package.json');

    var mode = argv[2];
    // 默认走dev
    if (argv.length < 3) {
        mode = 'dev';
    }
    
    var shortcut = info['fisShortcut'] || {};
    if (shortcut[mode]) {
        var newArgv = argv.slice(0,2);
        newArgv = newArgv.concat(shortcut[mode]);
        argv = newArgv;
        fis.mode = mode;
        if (root != '.') {
            argv.push('--root');
            argv.push(root);
        }
        console.log('\n开启 ' + mode + ' 模式：' + ' ' + argv.join(' '))
    }


    var rootResolve = path.resolve(root).split(path.sep),
        nowResolve = path.resolve('.').split(path.sep);
    if (rootResolve.length < nowResolve.length) {
        var includes = [];
        includes.push(nowResolve[rootResolve.length]);

        var includeConf = info['fisInclude'];
        if (includeConf) {
            includes = includes.concat(includeConf.split('|'));
        }
        
        fis.config.set('project.include', new RegExp('^\/('+includes.join('|')+')\/', 'i'));
    }

    fis.cli.run(argv);
};

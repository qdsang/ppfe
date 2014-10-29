var plugins = {
    define : require('../plugins/postprocessor/define.js'),
    roadmapPath : require('./roadmap.path.js'),
    autoload : require('../plugins/postpackager/autoload.js'),
    simple : require('../plugins/postpackager/simple.js')
};

module.exports = {
    urlPrefix : '',
    releasePrefix : '',
    project : {
        fileType : {
            text : 'handlebars, jade, ejs, jsx, styl, jtpl, po',
            image: 'psd'
        }
    },
    modules : {
        parser : {
            handlebars : 'handlebars',
            styl       : 'stylus',
            md         : 'marked',
            tmpl : 'utc',

            coffee : 'coffee-script',
            less : 'less',
            scss : 'compass',
            sass : 'compass',

            //.jade后缀的文件使用fis-parser-jade插件编译
            // https://github.com/visionmedia/jade/blob/master/Readme_zh-cn.md
            jade : 'jade',
            jtpl : 'jade-inline',

            psd : 'psd',

            tpl    : 'bdtmpl-chassis',

            po : 'po'
        },
        lint : {
            js: 'jshint'
        },
        postprocessor : {
            js : ['region', plugins.define, 'jswrapper', 'require-async'],
            html: ['region', 'require-async'],
            css: 'region',
        },
        optimizer : {
            html : 'html-minifier'
        },
        prepackager : [
            // plugins.frameworkConf
        ],
        postpackager : [plugins.autoload, plugins.simple], // ['autoload', 'simple'],//
        deploy : ['default', 'git']
    },
    roadmap : {
        ext : {
            jsx : 'js',
            styl : 'css',
            tpl : 'js',
            less : 'css',
            scss : 'css',
            sass : 'css',
            coffee : 'js',
            jade : 'html',
            md: 'html',
            psd: 'png',
            po : 'json'
        },
        path : plugins.roadmapPath
    }
};



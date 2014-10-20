
module.exports = [
    {
        reg : /\/(.*)\/\_(.*)$/,
        release : false
    },
    {
        reg : /\.inline\.\w+$/i,
        release : false
    },
    {
        reg : '**.sh',
        release : false
    },
    {
        //前端模板
        reg : '**.tmpl',
        //当做类js文件处理，可以识别__inline, __uri等资源定位标识
        isJsonLike : true,
        isHtmlLike : true,
        //只是内嵌，不用发布
        release : false
    },
    
    // {
    //     reg : /^\/(.*)\/page\/(.*)\.(js)$/i,
    //     //是组件化的，会被jswrapper包装
    //     isMod : true,
    //     //id为文件夹名
    //     id : '$1/$2',
    //     release : '/$&'
    // },
    
    {
        //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
        //直接引用为var $ = require('jquery');
        reg : /^\/modules\/([^\/]+)\/\1\.(js)$/i,
        //是组件化的，会被jswrapper包装
        isMod : true,
        //id为文件夹名
        id : '$1',
        release : '/$&'
    },
    {
        //modules目录下的其他脚本文件
        reg : /^\/modules\/(.*)\.(js)$/i,
        //是组件化的，会被jswrapper包装
        isMod : true,
        //id是去掉modules和.js后缀中间的部分
        id : '$1',
        release : '/$&'
    },
    
    {
        reg : /^\/(.*\.(?:tpl|jade|html))$/i,
        isHtmlLike : true,
        release : '/$1'
    },
    {
        reg : /^\/(.*)\.(styl|css|less|sass|scss)$/i,
        id : '$1.css',
        useSprite : true,
        release : '/$1.$2'
    },
    {
        reg : /^\/(.*\.js)$/i,
        id : '$1',
        release : '/$1'
    },
    
    // {
    //     reg : /^\/(.*)\/(.*)$/,
    //     useSprite : true,
    //     isViews : true,
    //     release : '/$1/$2'
    // },
    {
        reg : /^\/pkg\/(.*)$/,
        release : '/pkg/$1'
    },
    {
        reg : 'component.json',
        useHash : false,
        useCompile : false
    },
    {
        reg : 'map.json',
        release : false
    },
    {
        reg : '**.po'
    },
    {
        reg : '**',
        useHash : false,
        useCompile : false/*,
        release: false*/
    }
];

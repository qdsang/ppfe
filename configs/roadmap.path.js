
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
        reg : '**.handlebars',
        release : false,
        isJsLike : true
    },

    /* components start */
    {
        reg : /^\/component_modules\/(.*\.(?:tpl|jade|html))$/i,
        isHtmlLike : true,
        release : '${releasePrefix}/c/$1'
    },
    {
        reg : /^\/component_modules\/(.*)\.(styl|css|less|sass|scss)$/i,
        id : '$1.css',
        isMod : true,
        useSprite : true,
        useHash : false,
        //url : '${urlPrefix}/c/$1.$2',
        release : '${releasePrefix}/c/$1.$2'
    },
    {
        reg : /^\/component_modules\/(.*\.js)$/i,
        id : '$1',
        isMod : true,
        useHash : false,
        //url : '${urlPrefix}/c/$1',
        release : '${releasePrefix}/c/$1'
    },
    {
        reg : /^\/component_modules\/(.*)$/i,
        //url : '${urlPrefix}/c/$1',
        release : '${releasePrefix}/c/$1'
    },

    {
        reg : /^\/components\/(.*scrat\.js)$/i,
        id : '$1',
        //url : '${urlPrefix}/c/$1',
        release : '${releasePrefix}/c/$1'
    },
    {
        reg : /^\/components\/(.*\.(?:tpl|jade|html))$/i,
        isHtmlLike : true,
        release : '${releasePrefix}/c/$1'
    },
    {
        reg : /^\/components\/(.*)\.(styl|css|less|sass|scss)$/i,
        id : 'components/$1.css',
        isMod : true,
        useSprite : true,
        useHash : false,
        //url : '${urlPrefix}/c/components/$1.$2',
        release : '${releasePrefix}/c/components/$1.$2'
    },
    {
        reg : /^\/components\/(.*\.js)$/i,
        id : 'components/$1',
        isMod : true,
        isComponent : true,
        useHash : false,
        //url : '${urlPrefix}/c/components/$1',
        release : '${releasePrefix}/c/components/$1'
    },
    {
        reg : /^\/components\/(.*)$/i,
        //url : '${urlPrefix}/c/$1',
        release : '${releasePrefix}/c/$1'
    },
    /* components end */

    {
        reg : /^\/(.*)\/(.*\.(?:tpl|jade|html))$/,
        useCache : false,
        isViews : true,
        isHtmlLike : true,
        //release : '/$1/$2'
        release : '/$1/$2'
    },
    {
        reg : /^\/(.*)\/(.*\.(?:html|js|jade))$/,
        useCache : false,
        isViews : true,
        //url : '${urlPrefix}/$1/$2',
        release : '${releasePrefix}/$1/$2'
    },
    {
        reg : /^\/(.*)\/(.*)$/,
        useSprite : true,
        isViews : true,
        //url : '${urlPrefix}/$1/$2',
        release : '${releasePrefix}/$1/$2'
    },
    {
        reg : /^\/pkg\/(.*)$/,
        release : '${releasePrefix}/pkg/$1'
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
        reg : '**',
        useHash : false,
        useCompile : false,
        release: false
    }
];

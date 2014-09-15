
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


    /* common start */
    {
        reg : /^\/common\/(.*\.(?:tpl|jade|html))$/i,
        isHtmlLike : true,
        release : '/common/$1'
    },
    {
        reg : /^\/common\/(.*)\.(styl|css|less|sass|scss)$/i,
        id : '$1.css',
        useSprite : true,
        release : '/common/$1.$2'
    },
    {
        reg : /^\/common\/(.*\.js)$/i,
        id : '$1',
        isMod : true,
        release : '/common/$1'
    },
    /* common end */
    
    {
        reg : /^\/(.*)\/(.*)$/,
        useSprite : true,
        isViews : true,
        release : '/$1/$2'
    },
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
        reg : '**',
        useHash : false,
        useCompile : false/*,
        release: false*/
    }
];

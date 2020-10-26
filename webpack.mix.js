const mix = require('laravel-mix'),
webpack = require('webpack'),
purgecss = require('@fullhuman/postcss-purgecss');

require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('assets/js/site.js', 'public/js')
     // .sass('resources/sass/fa-fonts.scss', 'public/css')
    .sass('assets/scss/site.scss', 'public/css')
 
    .combine
    ([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'node_modules/fullpage.js/dist/fullpage.min.js',
        'node_modules/spotlight.js/dist/js/spotlight.min.js'
    ], 'public/js/vendor.js')

    .copy('node_modules/fullpage.js/dist/fullpage.css', 'public/css')
    .copy('node_modules/spotlight.js/dist/css/spotlight.css', 'public/css')
    .copy('node_modules/spotlight.js/dist/img', 'public/img')

    .purgeCss({
        extend: {
            content: [
                path.join(__dirname,  "*.php"),
                path.join(__dirname,  "parts/*.php"),
                path.join(__dirname,  "assets/js/vue/*.vue"),
        ],
            whitelistPatterns: [/hljs/],
        },
    })

    .webpackConfig({
    resolve: {
        modules: [
            'node_modules'
        ],
    },
     plugins: [
         new webpack.LoaderOptionsPlugin({
             test: /\.s[ac]ss$/,
             options: {
                 includePaths: ['resources/assets/sass', 'node_modules/foundation-site/scss']
             }
        })
    ]
});

// if(mix.inProduction()){
//     mix.webpackConfig({
//         plugins:[
//             new purgecss({
//                 content: [
//                      "*.php", 
//                      "parts/*.php",
//                      "assets/js/vue/*.vue"
//                 ], 
//                    // This is the function used to extract class names from your templates
//                 defaultExtractor: content => {
//                     // Capture as liberally as possible, including things like `h-(screen-1.5)`
//                     const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

//                     // Capture classes within other delimiters like .block(class="w-1/2") in Pug
//                     const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

//                     return broadMatches.concat(innerMatches)
//                 }
//             })
//         ]
        
//     })
// }

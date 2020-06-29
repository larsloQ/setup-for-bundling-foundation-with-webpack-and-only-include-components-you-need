# Webpack based setup (quicker) to bundle zurb foundation script and styles

A wordpress plugin providing a gutenberg block which uses a native redux store.

## Description
the original bundling process from foundation-for-sites was a bit slow on my old machine.
So I switched to a webpack based building which also allowed me to write ES6-JS. 

This demonstrates also how to only use a minimal subset of *Foundation* JS and SCSS.
And watch the rather small footprint (for a CSS-Framework) of style.css and script.js


With this setup I was (and still) be able to do:

- Writing modular JS in ES6 
- Using Webpack modes ( development / production )
- Using babel preset "@babel/preset-env" to do it.
- Taking the @babel/polyfill to add the neccessary polyfills and .browserlistrc (old browsers (IE11) included)
- Using postcss for cssnano, autoprefixer
- Using browsersync and gulp for reloading (see gulpfile.js)

# Config files in use
- package.json 
- webpack.config.js (dev only)
- .babelrc (done in webpack.config)
- postcss.config.js (cssnano, autoprefixer)
- gulpfile.js ( runing watch)


## Getting Started

configure path in ***webpack.config.build.js***

run:

```
npm install
npm run build
npm run server 
```

## Authors

* **larslo**  (https://larslo.de)


## License

This project is licensed under the MIT License




let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist')
mix.js('src/js/swiperjs/swiper.js', 'dist')

mix.setPublicPath('dist');

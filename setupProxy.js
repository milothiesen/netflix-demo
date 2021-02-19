const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(
    //     '/trending/all//trending/all/week',
    //     createProxyMiddleware({
    //         target: 'https://api.themoviedb.org/3',
    //         changeOrigin: true,
    //         secure: true,
    //     })
    // );

    // app.use(
    //     // '/discover/tv?api_key=2ae70dcc23d7c08201b97421272a0d99&with_networks-213',
    //     createProxyMiddleware({
    //         target: 'https://api.themoviedb.org/3',
    //         changeOrigin: true,
    //         secure: true,
    //     })
    // );

    app.use(
        createProxyMiddleware({
            target: 'https://moviemadness.org/api/media/comingsoon/',
            changeOrigin: true,
            secure: false,
        })
    );
};

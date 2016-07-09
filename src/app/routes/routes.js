(function () {
    'use strict'

    angular
        .module('personal')
        .config(routes)

        function routes($routeProvider) {
            $routeProvider
                .when('/',{
                    template:'<h1>Inicio</h1>'
                })
                .when('/bio',{
                    template:'<bio-tag></bio-tag>'
                })
                .when('/skills',{
                    template:'<h1>Habilidades</h1>'
                })
                .when('/portfolio',{
                    template:'<h1>Portafolio</h1>'
                })
                .otherwise({
                    redirectTo:'<h1>404</h1>'
                });
        }
})();
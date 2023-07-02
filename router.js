const app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home/home.html',
        })
        .when("/todo", {
            templateUrl: 'views/home/home.todo.html',

        })
        .when('/redenciones', {
            templateUrl: 'views/redenciones/redenciones.html',

        })
        .when('/redimidos', {
            templateUrl: 'views/redenciones/redimidos.html',

        })
        .otherwise('/')

})

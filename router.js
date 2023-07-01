const app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home/home.html',
            StyleSheet: 'views/home/style.css',

        })
        .when("/todo", {
            templateUrl: 'views/home/home.todo.html',
            StyleSheet: 'views/home/style.css',

        })
        .when('/redenciones', {
            templateUrl: 'views/redenciones/redenciones.html',
            StyleSheet: 'views/redenciones/style.css',

        })
        .when('/redimidos', {
            templateUrl: 'views/redenciones/redimidos.html',
            StyleSheet: 'views/redenciones/style.css',

        })
        .otherwise('/')

})

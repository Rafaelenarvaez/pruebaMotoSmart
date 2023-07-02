const app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home/home.html',
            StyleSheet: '/style.css',

        })
        .when("/todo", {
            templateUrl: 'views/home/home.todo.html',
            StyleSheet: '/style.css',

        })
        .when('/redenciones', {
            templateUrl: 'views/redenciones/redenciones.html',
            StyleSheet: '/style.css',

        })
        .when('/redimidos', {
            templateUrl: 'views/redenciones/redimidos.html',
            StyleSheet: '/style.css',

        })
        .otherwise('/')

})

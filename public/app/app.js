var app = angular.module('app',['ngResource','ngRoute']);
app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    templateUrl: "partials/index.jade",
                    controller: "mainCtrl" })
                .when("/contacts/new", {
                    templateUrl: "partials/edit.jade",
                    controller: "ContactsEditCtrl" })
                .when("/contacts/:id", {
                    templateUrl: "partials/show.jade",
                    controller: "ContactsShowCtrl" })
                .when("/contacts/:id/edit", {
                    templateUrl: "partials/edit.jade",
                    controller: "ContactsEditCtrl" })
                .otherwise({ redirectTo: "/contacts" });
        }
    ]
);
app.controller('mainCtrl',function($scope)
{
$scope.message="Hello World";
});
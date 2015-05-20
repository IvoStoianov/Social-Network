/* exported socialNetwork */

var socialNetwork = angular.module('SocialNetwork', ['ngRoute']);

// future: move the constants to another file
socialNetwork.constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');

socialNetwork.config(function ($routeProvider) {

    // fixme: implement route security
    $routeProvider
        .when('/', {
            templateUrl: 'partials/wellcome.html'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'authenticationController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'authenticationController'
        })
        .when('/user/editProfile', {
            templateUrl: 'partials/edit-profile.html',
            controller: 'authenticationController',
        })
        .when('/user/changePassword', {
            templateUrl: 'partials/change-password.html',
            controller: 'authenticationController',
        })
        .otherwise({
            redirectTo: '/'
        });
});

var app;
(function (app) {
    'use strict';
    angular
        .module('contactManagement', ['ngRoute',
        'common.services',
        'contactResourceMock'
    ])
        .config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/contactList', {
            templateUrl: './app/contacts/contact-list-view.html',
            controller: 'ContactListCtrl as vm'
        })
            .when('/contactDetail/:id', {
            templateUrl: './app/contacts/contact-detail-view.html',
            controller: 'ContactDetailCtrl as vm'
        })
            .otherwise('/contactList');
    }
})(app || (app = {}));

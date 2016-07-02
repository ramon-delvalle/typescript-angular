module app {
    'use strict';
    angular
        .module('contactManagement', ['ngRoute',
                                    'common.services',
                                    'contactResourceMock'
                                        ])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider: ng.route.IRouteProvider):void {
        $routeProvider
            .when('/contactList',
                {
                    templateUrl: './app/contacts/contact-list-view.html',
                    controller: 'ContactListCtrl as vm'    
                })
            .otherwise('/contactList');
    }
}

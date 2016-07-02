var app;
(function (app) {
    'use strict';
    angular.module('contactManagement', [
        'common.services',
        'contactResourceMock'
    ]);
})(app || (app = {}));

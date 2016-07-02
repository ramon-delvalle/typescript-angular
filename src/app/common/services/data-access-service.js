var app;
(function (app) {
    var common;
    (function (common) {
        'use strict';
        /**
         * DataAccessService implements IDataAccessService
         */
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getContactResource = function () {
                return this.$resource('/api/contacts/:id');
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module('common.services')
            .service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));

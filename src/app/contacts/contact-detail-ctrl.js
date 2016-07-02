var app;
(function (app) {
    var contactDetail;
    (function (contactDetail) {
        /**
         * ContactDetailCtrl implements IContactDetailModel
         */
        var ContactDetailCtrl = (function () {
            function ContactDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = 'Contact Detail';
                var id = $routeParams.id;
                var contactResource = dataAccessService.getContactResource();
                contactResource.get({ id: id }, function (data) {
                    _this.contact = data;
                });
            }
            ContactDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
            return ContactDetailCtrl;
        }());
        angular
            .module('contactManagement')
            .controller('ContactDetailCtrl', ContactDetailCtrl);
    })(contactDetail = app.contactDetail || (app.contactDetail = {}));
})(app || (app = {}));

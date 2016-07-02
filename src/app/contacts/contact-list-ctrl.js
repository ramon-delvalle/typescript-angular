var app;
(function (app) {
    var contactList;
    (function (contactList) {
        'use strict';
        /**
         * ContactListCtrl implements IContactListModel
         */
        var ContactListCtrl = (function () {
            function ContactListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Contact List";
                this.showImage = false;
                this.contacts = [];
                var contactResource = dataAccessService.getContactResource();
                contactResource.query(function (data) {
                    _this.contacts = data;
                });
            }
            ContactListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ContactListCtrl.$inject = ['dataAccessService'];
            return ContactListCtrl;
        }());
        angular
            .module('contactManagement')
            .controller('ContactListCtrl', ContactListCtrl);
    })(contactList = app.contactList || (app.contactList = {}));
})(app || (app = {}));

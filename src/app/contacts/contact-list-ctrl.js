var app;
(function (app) {
    var contactList;
    (function (contactList) {
        'use strict';
        /**
         * ContactListCtrl implements IContactListModel
         */
        var ContactListCtrl = (function () {
            function ContactListCtrl() {
                this.title = "Contact List";
                this.showImage = false;
                this.contacts = [
                    {
                        "id": 1,
                        "name": "Benjamin Franklin",
                        "phone": "(555)555-1790",
                        "email": "benjaminfranklin@uspresidents.com",
                        "imageUrl": "images/no-image.png"
                    },
                    {
                        "id": 2,
                        "name": "Abraham Lincoln",
                        "phone": "(555)555-1865",
                        "email": "abrahamlincoln@uspresidents.com",
                        "imageUrl": "images/no-image.png"
                    },
                    {
                        "id": 3,
                        "name": "Franklin Roosevelt",
                        "phone": "(555)555-1945",
                        "email": "franklinroosevelt@uspresidents.com",
                        "imageUrl": "images/no-image.png"
                    },
                    {
                        "id": 5,
                        "name": "William Harrison",
                        "phone": "(555)555-1841",
                        "email": "williamharrison@uspresidents.com",
                        "imageUrl": "images/no-image.png"
                    },
                    {
                        "id": 6,
                        "name": "William Harding",
                        "phone": "(555)555-1923",
                        "email": "williamharding@uspresidents.com",
                        "imageUrl": "images/no-image.png"
                    }
                ];
            }
            ContactListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            return ContactListCtrl;
        }());
        angular
            .module('contactManagement')
            .controller('ContactListCtrl', ContactListCtrl);
    })(contactList = app.contactList || (app.contactList = {}));
})(app || (app = {}));

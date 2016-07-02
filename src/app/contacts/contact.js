var app;
(function (app) {
    var domain;
    (function (domain) {
        'use strict';
        /**
         * Contact implements IContact
         */
        var Contact = (function () {
            function Contact(id, name, phone, email, imageUrl) {
                this.id = id;
                this.name = name;
                this.phone = phone;
                this.email = email;
                this.imageUrl = imageUrl;
            }
            return Contact;
        }());
        domain.Contact = Contact;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));

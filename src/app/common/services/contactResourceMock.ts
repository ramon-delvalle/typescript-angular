module app.common {
    var mockResource = angular
                        .module('contactResourceMock', ['ngMockE2E'])
                        .run(mockRun);

    function mockRun($httpBackend:ng.IHttpBackendService) : void {
        var contacts: app.domain.IContact[] = [];
        var contact: app.domain.IContact;
        var contactUrl = '/api/contacts';
        var editingRegex = new RegExp(contactUrl + '/[0-9][0-9]*', '');


        contact = new app.domain.Contact(1,
                                        "Benjamin Franklin",
                                        "(555)555-1790",
                                        "benjaminfranklin@uspresidents.com",
                                        "images/no-image.png");
        contacts.push(contact);

        contact = new app.domain.Contact(2,
                                        "Abraham Lincoln",
                                        "(555)555-1865",
                                        "abrahamlincoln@uspresidents.com",
                                        "images/no-image.png");
        contacts.push(contact);

        contact = new app.domain.Contact(3,
                                        "Franklin Roosevelt",
                                        "(555)555-1945",
                                        "franklinroosevelt@uspresidents.com",
                                        "images/no-image.png");
        contacts.push(contact);

        contact = new app.domain.Contact(4,
                                        "William Harrison",
                                        "(555)555-1841",
                                        "williamharrison@uspresidents.com",
                                        "images/no-image.png");
        contacts.push(contact);

        contact = new app.domain.Contact(6,
                                        "William Harding",
                                        "(555)555-1923",
                                        "williamharding@uspresidents.com",
                                        "images/no-image.png");
        contacts.push(contact);

        $httpBackend.whenGET(contactUrl).respond(contacts);

        $httpBackend.whenGET(/app/).passThrough();
    }


}
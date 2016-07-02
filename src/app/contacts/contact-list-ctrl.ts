module app.contactList {
    'use strict';
    interface IContactListModel {
        title: string;
        showImage: boolean;
        contacts: app.domain.IContact[];
        toggleImage(): void;
    }

    /**
     * ContactListCtrl implements IContactListModel
     */
    class ContactListCtrl implements IContactListModel {
        
        title: string;
        showImage: boolean;
        contacts: app.domain.IContact[];

        constructor() {
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
            ]
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    angular
        .module('contactManagement')
        .controller('ContactListCtrl',
            ContactListCtrl);
}
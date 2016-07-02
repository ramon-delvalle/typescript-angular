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

        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Contact List";
            this.showImage = false;
            this.contacts = []

            var contactResource = dataAccessService.getContactResource();
            contactResource.query((data: app.domain.IContact[]) => {
                this.contacts = data;
            });
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
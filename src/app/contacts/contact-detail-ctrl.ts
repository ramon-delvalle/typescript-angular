module app.contactDetail {
    interface IContactDetailModel {
        title: string;
        contact: app.domain.IContact;
    }

    interface IContactParams extends ng.route.IRouteParamsService {
        id: number;
    }

    /**
     * ContactDetailCtrl implements IContactDetailModel
     */
    class ContactDetailCtrl implements IContactDetailModel {

        title:string;
        contact: app.domain.IContact;

        static $inject = ['$routeParams', 'dataAccessService'];
        constructor(private $routeParams: IContactParams,
                    private dataAccessService: app.common.DataAccessService) {
            this.title = 'Contact Detail';

            var id = $routeParams.id;
            var contactResource = dataAccessService.getContactResource();
            contactResource.get({id: id},
                                (data: app.domain.IContact) => {
                                    this.contact = data;
                                });
        }
    }

    angular
        .module('contactManagement')
        .controller('ContactDetailCtrl',
            ContactDetailCtrl);
}
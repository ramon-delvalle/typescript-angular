module app.common {
    'use strict';
    interface IDataAccessService {
        getContactResource(): ng.resource.IResourceClass<IContactResource>
    }

    interface IContactResource 
        extends ng.resource.IResource<app.domain.IContact> {

    }

    /**
     * DataAccessService implements IDataAccessService
     */
    export class DataAccessService 
        implements IDataAccessService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {
            
        }

        getContactResource(): ng.resource.IResourceClass<IContactResource> {
            return this.$resource('/api/contacts/:id');
        }
    }

    angular
        .module('common.services')
        .service('dataAccessService',
            DataAccessService);
}
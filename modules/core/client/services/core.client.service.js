'use strict';

angular
    .module('ContactsApp')
        .factory('ContactService', function($http){

            var _getContacts = function(){
                var promise = $http.get('/api/contact');
                return promise;
            }

            var _getContact = function(contactId){
                return $http.get('/api/contact/'+contactId);
            }
            return {
                getContacts: _getContacts,
                getContact: _getContact
            };

        });
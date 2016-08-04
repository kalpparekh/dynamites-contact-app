'use strict';

angular
    .module('ContactsApp')
        .factory('ContactService', function($http){

            var _getContacts = function(){
                var promise = $http.get('/api/contact');
                return promise;
            }

            return {
                getContacts: _getContacts
            };

        });
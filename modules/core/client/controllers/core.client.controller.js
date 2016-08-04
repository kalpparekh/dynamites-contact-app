'use strict';

angular
    .module('ContactsApp')
        .controller('ContactsCtrl', function($scope, ContactService){

            var contactsPromise = ContactService.getContacts();

            var successCallback = function(response){
                $scope.contacts = response;
                $scope.fields = Object.keys($scope.contacts[0]) || [];
            }
            var failureCallback = function(err){
                console.log("Error while fetching contacts");
            }

            contactsPromise
                .success(successCallback)
                .error(failureCallback);


        })
        .controller('saveCtrl', function($scope){
            $scope.saveContact = function(contact){
                debugger;
            }
        })
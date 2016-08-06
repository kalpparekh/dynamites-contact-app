'use strict';

angular
    .module('ContactsApp')
        .controller('ContactsCtrl', function($scope, ContactService, $state){

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

            $scope.updateContact = function(contact){
                $state.go('edit',{contactId: contact.id});
            }

        })
        .controller('saveCtrl', function($scope){
            $scope.saveContact = function(contact){
            }
        })
    .controller('editCtrl', function($scope, contactId, ContactService){
        ContactService
            .getContact(contactId)
            .success(function(contact){
                $scope.contact = contact;
            }).error(function(err){
            console.log("Error:: occured during get opertaion")
        })


        $scope.saveContact = function(contact){
            debugger;
        }
    })


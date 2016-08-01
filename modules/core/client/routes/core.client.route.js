'use strict';

angular
    .module('ContactsApp')
        .config(function($stateProvider){

                $stateProvider
                    .state('display',{
                            url:'/display',
                            templateUrl: 'modules/core/client/views/display.client.tpl.html'
                    })
                    .state('create',{
                            url:'/create',
                            templateUrl: 'modules/core/client/views/create.client.tpl.html'
                    })
        });

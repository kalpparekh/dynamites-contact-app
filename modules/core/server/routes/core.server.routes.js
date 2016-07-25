'use strict';

var controller = require('../controllers/core.server.controller'),
    mainController = require('../controllers/main.server.controller');


module.exports = function(app){
    app
        .route('/')
            .get(mainController.index);

    // Contact collection and creation
    app
        .route('/api/contact')
            .get(controller.getContacts)
            .post(controller.createContact);

    // Update and delete operations
    app
        .route('/api/contact/:contactId')
        .put(controller.updateContact);

    app.param ('contactId', controller.validateContactIdAndForward)
}
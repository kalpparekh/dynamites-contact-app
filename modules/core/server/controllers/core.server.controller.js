'use strict';

var mockService = require('../utils/core.server.mock');

module.exports.getContacts = function(req, res){
    res.status(200);
    res.json(mockService.getContacts);
}

module.exports.createContact = function(req,res){
    var contact =  req.body;
    if(!contact){
        res.status(400);
        res.end("ERROR: couldn't save contact");
    }
    contact =  mockService.saveContact(contact);
    if(contact){
        res.status(200);
        res.json(contact);
    }
}

module.exports.updateContact = function(req, res){
    var updatedContact = req.body,
        contactID = req.metadata.contactId,
        index = req.metadata.index;

    var isUpdated = mockService.updateContact(index,updatedContact);
    if(!isUpdated){
        res.status(400)
            .send({message: "Error:: Unable to update contact. Please try again!!"});
    } else{
        res.status(200)
            .json(updatedContact);
    }
}


module.exports.validateContactIdAndForward = function(req, res, next, id){
    var metadata = req.metadata = {};
        metadata.contactId = id;
    var foundContact = mockService.findContactById(id);
    if (foundContact) {
        metadata.model = foundContact.contact;
        metadata.index = foundContact.index;
    }
    if(!metadata.model){
       res
           .status(400)
           .send({message: 'Error: Unable to find Contact with id '+id });
    }
    next();
}
'use strict';

  var mongoose = require('mongoose'),
      Contact = mongoose.model('SContact');


module.exports.saveContact = function(savableContact, callback){

  var contact = new Contact(savableContact);

  contact.save(function(err){
      if(err){
        callback(err);
      }
    callback(null,contact );
  });

};
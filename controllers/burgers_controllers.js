var express = require('express');
var router = express.Router(); //Create a nw Router object


//Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. 

var burger = require('../models/burger.js');

router.get('/', function(req, res) { //set up the app/route 
    
    burger.all(function(data) { //call ORM function on the model/database
      var hbsObject = { //create an object for the results of the MYSQL data
        burgers: data
      };
      // console.log(hbsObject);
      res.render('index', hbsObject); //render the results in the index
    });

  });
  
  router.post('/burgers', function(req, res) { //set up a route by post
    burger.create([ // call on the burger model and use the create ORM function and fill in args.
      'burger_name'
    ], [
      req.body.burger_name 
    ], function(data) {
      res.redirect('/'); // redirect to the home route 
    });
  });
  
  router.put('/burgers/:id', function(req, res) { // Create a placeholder of ID
    var condition = 'id = ' + req.params.id; //put theplacehodler in variable 
  
    burger.update({ //call update ORM on burger database
      devoured: true
    }, condition, function(data) { //set the args
      res.redirect('/'); //redirect bac to home page
    });
  });
  
  // Export routes to server.js.
  module.exports = router;
var orm = require('../config/orm.js'); // get the orm 
//var connection; 

// LETS MAKE BURGER YALL
var burger = {
  
  all: function(cb) { //function the callback argument
    orm.all('burgers', function(res) { //pass layout and callback as a function for th results
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database to controller
module.exports = burger;
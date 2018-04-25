'use strict';
module.exports = function(app) {
  var inMemoryController = require('../controllers/inMemoryController');
  
  // get the factory, get the appropriate controller, call on methods

  app.route('/prev')
    .get(inMemoryController.getPrev);
    
  app.route('/total')
    .get(inMemoryController.getTotal);

  app.route('/stats')
    .get(inMemoryController.getStats);
};
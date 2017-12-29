const db = require('../models');

module.exports = (app) => {

	app.get('/users', function(req, res) {
	  db.User.findAll()
	    .then(function (users) {
	      res.json(users);
	    });
	});	

	app.post('/users', function (req, res) {
	  db.User.create({ 
	    first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    bio: req.body.bio,
	    email: req.body.email,
	  })
	    .then(function (user) {
	      res.json(user);
	    });
	});

};

/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {},

  // This loads the sign-up page -->new.ejs
  new: function(req, res){
  
  	res.view();

  },
  create: function(req, res, next){
  		//Create a User with th params sent form
  		// The sign-up form -->new.ejs
  		User.create(req.params.all(),function userCreated(err, user){

  			//If there's an error
  			if(err){

          console.log(err);
          req.session.flash={
            err:err 
          }
         
  				return res.redirect('/user/new');
  			}
  			
  				//After successfully create the user
  				//Redirect to the show action
  				//res.json(user);
          //res.redirect('/user');
  			res.redirect('user/show/' +user.id)
  		})

  },
  //render the profle view (e.g /view/sjow)
  show: function(req, res, next){
    User.findOne(req.param('id'),function foundUser(err, user){

      if(err) return next(err);
      if(!user) return next();
      res.view({user:user});
    });

  },
  edit: function(req, res, next){
    User.findOne(req.param('id'),function foundUser(err, user){

      if(err) return next(err);
      if(!user) return next();
      res.view({user:user});
    });
  },
  update: function(req, res, next){
    User.update(req.param('id'),req.params.all(), function userUpdate(err){
       if(err){
          return res.redirect('/user/edit' + req.param('id'));
       }
       res.redirect('/user/show/' + req.param('id'));
    });

  },
  index: function(req, res, next){
    User.find(function foundUser(err,user){
      if(err) return next(err);
      res.view({user:user});

    });

  }

};

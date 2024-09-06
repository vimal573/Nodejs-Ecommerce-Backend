const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req.get('cookie').trim().split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('66d9d87a784c4a1fdc4b72d9')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = JSON.stringify(user);
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

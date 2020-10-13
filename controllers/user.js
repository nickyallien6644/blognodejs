const User = require('../models/user');
const Image = require('../models/image');

exports.getLogin = (req,res,next) => {
    res.render('post/login', {
        pageTitle: 'Login',
        url: '/login'
    });
}
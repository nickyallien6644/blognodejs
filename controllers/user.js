const User = require('../models/user');
const Image = require('../models/image');

exports.getLogin = (req,res,next) => {
    res.render('post/login', {
        pageTitle: 'Login',
        url: '/login',
    });
}

exports.login = (req,res,next) => {
    const email = req.body.txtEmail;
    const password = req.body.txtPass;

    User.findOne({where: {email: email, password: password}})
        .then(user => {
            res.render('post/successful', {
                pageTitle: 'Successful',
                url: '/successful',
                user: user,
            });
        })
        .catch(err => console.log(err));
};
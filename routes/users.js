const express = require('express');
const router = express.Router();

const { userNames } = require('./home');

router.get('/users', (req, res) => {
    res.render('users', {
        userNames,
        path: '/users',
        pageTitle: 'Users'
    });
});

exports.routes = router;
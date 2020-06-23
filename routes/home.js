const express = require('express');
const router = express.Router();

const userNames = [];

router.get('/', (req, res) => {
    res.render('home', {
        path: '/',
        pageTitle: 'Home'
    });
});

router.post('/', (req, res) => {
    userNames.push(req.body.username);
    res.redirect('/users');
});

exports.routes = router;
exports.userNames = userNames;
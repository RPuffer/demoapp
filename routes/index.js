'use strict';
const express = require('express');
const router = express.Router();
const api = require('../api/usersApi');


/* GET home page - read DB. */
/* POST add user to DB. */
router.route('/')
    .get(api.get)
    .post(api.post);


/* DELETE user from DB. */
router.route('/deleteUser')
    .post(api.delete);


/* Catch-All redirect route */
router.route('*')
    .get(function(req, res){
        res.redirect('http://localhost:3000')
    });

module.exports = router;
   
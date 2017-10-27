'use strict';
const query = require('./query.js')
const _ = require('lodash');
const chalk = require('chalk');


var display = function (res) {
  console.log(chalk.rgb(100, 255, 100)(`Request Handled by Process: ${process.pid}`));
  query.selectAll(function (err, result) {
    if (!result) {
      console.log("Rows are empty");
      result = {rows: []} 
    } else {
      if(!result.rows) result.rows = [];
    }
    res.render('index', {
      rows: result.rows
    });
  });
}


exports.get = function (req, res) {
  display(res);
}

exports.post = function (req, res, next) {
  var data = _.clone(req.body);

  if (data.id && data.name && data.state && data.company) {
      query.insertVals(data, (err) => {
        if (!err) res.redirect(req.path);
        else next(err);
      });
  } else {
    res.redirect(req.path + '?err=InvalidUser');
  }
}

exports.delete = function (req, res, next) {
//  var data = {
//    id: Number.parseInt(getQueryString('id', req.url), 10)
//  }
//  
  var data = _.clone(req.body);

  query.removeById(data.id, (err) => {
    if (!err) res.redirect(req.url.replace('deleteUser', ''));
    else next(err);
  });
}

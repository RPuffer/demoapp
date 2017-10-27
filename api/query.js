'use strict';
const mysql = require('mysql');
const {pass, port, table, db, host} = require('./keys');


var select = function (queryString, callback) {

    var connection = mysql.createConnection({
        host: host,
        port: port,
        user: 'root',
        password: pass,
        database: db
    });
    
    connection.connect();

    var result = {
        'rows': [],
        'columns': []
    };
    
    connection.query('SELECT ' + queryString, function (err, results, fields) {
        if (!err) {
            result.rows = results;
            result.columns = fields;
        } else {
            callback(err, null)
        }
        connection.end();
        callback(err, result);
    });
};


var insert = function (queryString, callback){
    
    var connection = mysql.createConnection({
        host: host,
        port: port,
        user: 'root',
        password: pass,
        database: db
    });
        
    connection.connect();

    connection.query('INSERT INTO ' + queryString, function(err, results) {
        var result = {};
        if (!err) {
            result = results;
        } else {
            // throw new Error("Error performing Query:" + '\n' + queryString + '\n' + err);
            callback(err, null)
        }
        connection.end();
        callback(err, result)
    });

}


var remove = function (queryString, callback){
    
    var connection = mysql.createConnection({
        host: host,
        port: port,
        user: 'root',
        password: pass,
        database: db
    });
        
    connection.connect();
    
    connection.query('DELETE FROM ' + queryString, function(err, results) {
        var result = {};
        if (!err) {
            result = results;
        } else {
          // throw new Error("Error performing Query:" + '\n' + queryString + '\n' + err);
          callback(err, null)
        }
        connection.end();
        callback(err, result)
    });
}

exports.insert = insert
exports.select = select
exports.remove = remove

exports.selectAll = function selectAll(callback) {
    select(`* from ${table} \nORDER BY id ASC`, callback);
}
 

exports.removeById = function removeById(id, callback){
    var data = {
        unique_id: Number.parseInt(id, 10)
    };
    remove(`${table} \n WHERE unique_id=${data.unique_id}`, callback);       
}

exports.insertVals = function(values, callback){
    try {
        insert(`${table} (id, name, state, company) ` + '\nVALUES' +
            '('   + values.id      + ','   + 
            ' \'' + values.name    + '\',' +
            ' \'' + values.state   + '\',' +
            ' \'' + values.company + '\')', 
        callback);
    } catch (error) {
        throw error
    }
}


/* eslint-disable no-undef */
const query = require('../api/query.js');
const promise = require('promise');

describe('The MySql Query API', function () {
  var testValues = {
    id: 57,
    name: 'Bob',
    state: 'Wisconsin',
    company: 'Northwestern Mutual'
  };

  var uID;

  it('should be able to insert data', function (done) {
    
    let inSync = promise.denodeify(query.insertVals)
    
    inSync(testValues).then((results) => {
      expect(results).toBeTruthy();
      done();
    }).catch((err) => {
      expect(err).toBeFalsy();
      done();
    })
  });


  it('should be able to read table data', function (done) {
    let result = [];
    let selSync = promise.denodeify(query.selectAll)
    
    selSync().then((results) => {
      result = results.rows;
      result.forEach((element) => {
        if(element.id == 57 && element.name == 'Bob' && element.state == 'Wisconsin' && element.company == 'Northwestern Mutual') uID = element.unique_id
        expect(element.id).toBeDefined();
        expect(element.name).toBeDefined();
        expect(element.state).toBeDefined();
        expect(element.company).toBeDefined();
        return;
      })
      done();
    }).catch((err) => {
      expect(err).toBeFalsy();
      done();
    })

  });

  it('should be able to remove data', function (done) {
    
    let remSync = promise.denodeify(query.removeById)
    
    remSync(uID.toString()).then((results) => {
      expect(results).toBeTruthy();
      done();
    }).catch((err) => {
      expect(err).toBeFalsy();
    })
    
  });
  
  it('should contain error on invalid insert query', () => {
    query.insert('test_table \nVALUES(1,2)', (err) => {
      expect(err).toBeDefined();
    }); 
    
  });
  
  it('should contain error on invalid select query', () => {
    query.select( '* FROM invalid_table', (err) => {
      expect(err).toBeDefined();
    });
  });
  
  it('should contain error on invalid remove query', () => {
    query.remove( 'test_table \nWHERE id=1010101010', (err) => {
      expect(err).toBeDefined();
    });
  });
  
});

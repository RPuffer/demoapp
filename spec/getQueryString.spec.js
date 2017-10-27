/* eslint-disable no-undef */
const {getQueryString} = require('../public/javascripts/getQueryString.js');

describe('The getQueryString class', function () {
  var url = 'http://localhost:3000/?id=10&name=Bob&state=Wisconsin&company=NM';

  
  it('should be able to retrive an Id string', function () {
    expect(getQueryString('id', url)).toBe('10');
  });

  it('should be able to retrive a Name string', function () {
    expect(getQueryString('name', url)).toBe('Bob');
  });

  it('should be able to retrive an State string', function () {
    expect(getQueryString('state', url)).toBe('Wisconsin');
  });

  it('should be able to retrive an Company string', function () {
    var res = expect(getQueryString('company', url)).toBe('NM');
  });

});

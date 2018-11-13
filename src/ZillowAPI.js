var Zillow = require('node-zillow');
var ZWSID = 'X1-ZWz1gqr90ktogb_3tnpx';
var zwsid = process.env.ZWSID;
var zillow = new Zillow(zwsid);

var parameters = {
    zpid: 1111111
};

export const get = () =>
 zillow.get('GetZestimate', parameters)
    .then(results => results);
    .then(results => console.log(results))
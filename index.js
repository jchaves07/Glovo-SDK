require('dotenv').config();
const endpointsHelper = require('./src/endpointsHelper');
//get estimate order price
module.exports.EstimateOrderPrice = (estimateRequest) =>{
    endpointsHelper.post('/b2b/orders/estimate', estimateRequest);
}
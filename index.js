require('dotenv').config();
const endpointsHelper = require('./src/endpointsHelper');

module.exports.EstimateOrderPrice = (estimateRequest) =>{
    endpointsHelper.post('/b2b/orders/estimate', estimateRequest);
}
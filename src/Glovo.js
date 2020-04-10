require('dotenv').config();
const endpointsHelper = require('./src/endpointsHelper');
export class Glovo{
    Estimate = () =>{
        endpointsHelper.post('/b2b/orders/estimate', {
            'scheduleTime': 1586547488000,
            'description': "A 30cm by 30cm box",
            'addresses': [
              {
                'type': "PICKUP",
                'lat': 9.999671,
                'lon': -84.1246683,
                'label': "La parrillita de pepe"
              },
              {
                'type': "DELIVERY",
                'lat': 9.999977,
                'lon': -84.1223468,
                'label': "Hospital mexico"
              }
            ]
          })
    }
}
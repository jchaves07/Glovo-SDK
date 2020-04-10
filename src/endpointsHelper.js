
const axios = require('axios')

class endpointsHelper{
    constructor(){

    }
    static BASE_URL = process.env.BASE_URL;
    static getAuth(){
        let buffer = new Buffer.from(`${process.env.API_KEY}:${process.env.API_SECRET}`);
        return `Basic ${buffer.toString('base64')}`;
    }
    static post(endpoint, data){
        let url = `${this.BASE_URL}${endpoint}`;
        axios
        .post(url, data, 
            {
                headers:{
                    'Authorization': this.getAuth(),
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                console.log('inicio')
                console.log(response.data);
              })
              .catch(error => console.log('error' + error));
      
    }
}
module.exports = endpointsHelper;
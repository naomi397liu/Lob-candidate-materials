

const data = require('./addresses.json'); //list of dictionaries
const addressController = require('./controllers/address/');

for (address of data){
    addressController.add(address)
}


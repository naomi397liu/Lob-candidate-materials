// read in Json, loop over them and add them to the data base using 
// written add function
// when to run this?

const data = require('./addresses.json'); //list of dictionaries
const addressController = require('./controllers/address/');

for (address of data){
    addressController.add(address)
}


const mongoose = require('./connection.js')
/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
//global.shops = [];
const ShopSchema = mongoose.Schema (
  {
  name: String,
  employees: Number,
  currentlyOpen : Boolean
}
)
const ShopCollection = mongoose.model('Shop', ShopSchema)
/* 
 * TODO: delete this it's just a sample
 *
 */
function createShop() {
  //returns a promise containign the new shop document in our database
   return ShopCollection.create({
    name: "",
    employees: 0,
    currentlyOpen: false
  })
}
const getShops = () => {
  return ShopCollection.find()
}

const getShop = (id) => {
  return ShopCollection.findById(id)
}

const addShop = (newShop) => {

  return ShopCollection.insertMany([ newShop ])

  //global.shops.push(newShop);
}

const updateShop = (i, shop) => {
  global.shops[i] = shop;
}

const deleteShop = (id) => {
  return ShopCollection.findByIdAndDelete(id);
}

const deleteNoNameShops = () => {
  //this is a more efficient query in mongo
  return ShopCollection.deleteMany({ name: '' })
}


/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addShop,
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
  deleteNoNameShops
};

  //return {
    //name: "",
    //employees: 0,
    //currentlyOpen: false
  //};
//}

//function getShops() {
  //return ShopCollection.find()
//}
 // return global.shops;


//function getShop(i) {
  //return global.shops[i];
//}


//function getShop(id) {
  //return ShopCollection.findById(id)
//}
//returns an array of all documents that match thee object pattern
//return ShopCollection.find({
//_id: id
//})




//function addShop(newShop) {
  //global.shops.push(newShop);
//}

//function updateShop(i, shop) {
  //global.shops[i] = shop;
//}

//function deleteShop(i) {
  //global.shops.splice(i, 1);
//}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
//module.exports = {
  //addShop,
  //createShop,
  //deleteShop,
  //getShop,
  //getShops,
  //updateShop,
//}

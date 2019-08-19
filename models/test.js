
const shopApi = require('./shop.js')
const employeeApi = require('./emplyee.js')
//create a shop
shopApi.createShop().then((newShopDocument) => {
    console.log(newShopDocument)
})
//create a shop and then print out all the employees in our database
employeeApi.createEmployee('5d5703a1f961eb086308c7e0').then((newEmployeeDocument) => {
    console.log(newEmployeeDocument)
})
employeeApi.getEmployees().then((allEmployeesInDB) => {
    console.log(alldocuments)
    console.log(allEmployeesInDB)
})
//get all the shops in db
shopApi.getShops().then((allShopsInDB) => {
    console.log("alldocuments")
    console.log(allShopsInDB)
})
//geet a shop by its id
shopApi.getShop("5d56f8a9fe424a081cbbe99d").then((foundDoc) =>
{
    console.log("single document by _id")
    console.log(foundDoc)

})
//get all employees that have the given shop id
//employeeApi.getEmployeesById('5d5703a1f961eb086308c7e0').then((employeesForShop) => {
    //console.log("employees for shop")
    //console.log(employeesForShop)
//})
employeeApi.getEmployeesByShopId('5d5703a1f961eb086308c7e0').then((employeesForShop) => {
    console.log("employees for shop")
    console.log(employeesForShop)
})

employeeApi.deleteEmployeeById("5d5703a1f961eb086308c7e0").then((removeDoc) => {
console.log('delet doc')
console.log(removeDOC)
})

//insert a new shop into the database
//NOTE: this is different from creating a new shop. Creating a new shop
//creates the document in the database first and then returns it.  This adds
//the given document to the database and inserts a _id into the document.
shopApi.addShop({ name: "Bob", employees: 100, currentlyOpen: true }).then((newBobShop) => {
    console.log('bob shop')
    console.log(newBobShop)
  })
  
  //get all shops and delete the ones that have an empty name
  //NOTE: this is very inefficient. See deleteNoNameShops() in
  //models/shops.js
  shopApi.getShops().then((allShops) => {
  
    //create an [ Promise ] wrapper to wait until all
    //the shops are deleted from our database
    Promise.all(
      //1. filter all the shops to all shops with no name
      //2. map each shop to a Promise that is returned after calling deleteShop
      allShops.filter(shop => !shop.name).map(shopApi.deleteShop)
    ).then((deletedShops) => {
      //this function runs once all shops are deleted
      console.log("all done!")
      console.log(deletedShops)
  });
  
  })
  

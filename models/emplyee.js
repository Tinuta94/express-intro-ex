const mongoose = require('./connection.js')
const ObjectId = mongoose.ObjectId
const EmployeeSchema = mongoose.Schema(
    {
        name: String,
        age: Number,
        pay: Number,
        shopId: ObjectId
    }
)


const EmployeeCollection = mongoose.model('Employee', EmployeeSchema)

const createEmployee = (shopId) => {
    //returns a promise containign the new shop document in our database
    return EmployeeCollection.create({
        name: "",
        age: 30,
        pay: 200,
        shopId
    })
}
const getEmployees = () => {
    return EmployeeCollection.find()
}
const getEmployee = (id) => {
    return EmployeeCollection.findById({
        _id: id
    })
}
const getEmployeesByShopId = (shopId) => {
    return EmployeeCollection.find({
        shopId
    })
}
const deleteEmployeeById = (id) => {
    return EmployeeCollection.findOneAndDelete({ _id: id })
}
module.exports = {
    createEmployee,
    deleteEmployeeById,
    getEmployee,
    getEmployees,
    getEmployeesByShopId,
  }
  
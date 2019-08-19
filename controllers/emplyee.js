/* Step 1 import express
 *
 */
const express = require('express')


/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `shopsApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const employeesApi = require('../models/emplyee.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from shopRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const employeeRouter = express.Router()


/* Step 4
 * 
 */

employeeRouter.get('/', function(req,res) {
  res.send(employeesApi.getEmployees());
})

employeeRouter.get('/new', function(req, res) {
  res.send(employeesApi.createEmployee());
})

employeeRouter.get('/:index', function(req,res){
  res.send(employeeApi.getEmployee(req.params.index));
})

employeeRouter.post('/', function(req,res){
  employeesApi.addEmployee(req.body);
  res.status(200).end();
})

employeeRouter.put('/:index', function(req,res){
  employeesApi.updateShop(req.params.index, req.body);
  res.status(200).end();
})

employeeRouter.delete('/:index', function(req,res){
  employeesApi.delete(req.params.index)
  res.status(200).end();
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  employeeRouter
}

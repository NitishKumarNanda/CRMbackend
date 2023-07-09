import express, { Router } from 'express';


import { addCustomer, getAllCustomers, toggleCustomerDone, updateCustomer, deleteCustomer } from '../controller/Customer-controller.js';

const route = express.Router();


route.post('/Customers', addCustomer)
route.get('/Customers', getAllCustomers);
route.get('/Customers/:id', toggleCustomerDone);
route.put('/Customers/:id', updateCustomer);
route.delete('/Customers/:id', deleteCustomer);


export default route;
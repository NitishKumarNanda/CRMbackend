import mongoose from "mongoose";


const CustomerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
});

const customer = mongoose.model('customer', CustomerSchema);

export default customer;

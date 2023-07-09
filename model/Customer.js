import mongoose from "mongoose";


const CustomerSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: async function () {
          const maxIdDocument = await Customer.findOne().sort({ id: -1 }).select('id');
          const maxId = maxIdDocument ? maxIdDocument.id : 0;
          return maxId + 1;
        },
        unique: true,
      },
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

import Customer from '../model/Customer.js';

export const addCustomer = async (request, response) => {
    try {
        const newCustomer = await Customer.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newCustomer.save();
        return response.status(200).json(newCustomer);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllCustomers = async (request, response) => {
    try {
        const customers = await Customer.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(customers);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleCustomerDone = async (request, response) => {
    try {
        const customerRef = await Customer.findById(request.params.id);

        const customer = await Customer.findOneAndUpdate(
            { _id: request.params.id },
            { done: !customerRef.done }
        )

        await customer.save();

        return response.status(200).json(customer);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateCustomer = async (request, response) => {
    try {
        await Customer.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const customer = await Customer.findById(request.params.id);

        return response.status(200).json(customer);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteCustomer = async (request, response) => {
    try {
        const customer = await Customer.findByIdAndDelete(request.params.id)

        return response.status(200).json(customer);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
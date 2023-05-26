const {ProductComponent} = require('../models');

const store = async (req, res) => {
    const requestData = {
        id_product: req.body.id_product,
        number_size: req.body.number_size,
        quantity: req.body.quantity,
        price: req.body.price
    }

    try {
        const savedData = ProductComponent.create(requestData);
        const response = {
            message: "Data berhasil disimpan.",
            data: savedData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getProductComponentById = async (req, res) => {
    const id = req.params.id;

    try {
        const getData = ProductComponent.findOne({where: {id: id}});
        const response = {
            message: "Oke",
            data: getData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const requestData = {
        id_product: req.body.id_product,
        number_size: req.body.number_size,
        quantity: req.body.quantity,
        price: req.body.price,
    };
    try {
        const savedData = ProductComponent.update(requestData, {where: {id: id}});
        const response = {
            message: "Data berhasil diupdate",
            data: savedData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const destroy = async (req, res) => {
    const id = req.params.id;
    
    try {
        const deleteData = ProductComponent.destroy({where: {id: id}});
        const response = {
            message: "Data berhasil dihapus",
            data: deleteData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    store,
    getProductComponentById,
    update,
    destroy
}
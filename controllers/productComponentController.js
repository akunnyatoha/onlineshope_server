const {Product, ProductComponent} = require('../models');
const productcomponent = require('../models/productcomponent');

const store = async (req, res) => {
    const requestData = {
        id_product: req.body.id_product,
        number_size: req.body.number_size,
        quantity: req.body.quantity,
        price: req.body.price
    }

    const getProduct = await Product.findOne({where: {id: requestData.id_product}, include:[{model:ProductComponent, as:'productComponent'}]});
    // const productComponent = getProduct.productComponent;

    try {
        let response;
        let savedData;
        if(getProduct.productComponent.length > 0){
            const getProductComponent = ProductComponent.findOne({where: {id_product: idProduct, number_size: requestData.number_size}}); 
            response = data;
        } else {
            response = "Kosong"
        }    
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllProductComponent = async(req, res) => {
    const idProduct = req.query.id_product;

    try {
        let response;
        let getData ;
        if(idProduct != null || idProduct != undefined) {
            getData = await ProductComponent.findAll({where: {id_product: idProduct}});
            response = {message: "Oke", data: getData};
        } else {
            getData = await ProductComponent.findAll();
            response = {message: "Oke", data: getData};
        }
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
    destroy,
    getAllProductComponent
}
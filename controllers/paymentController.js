const {Payment} = require('../models');

const index = async (req, res) => {
    try {
        const getData = await Payment.findAll();
        const response = {
            message: "Oke.",
            data: getData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const store = async (req, res) => {
    const requestData = {
        name_account: req.body.name_account,
        no_account: req.body.no_account,
        pemilik_account: req.body.pemilik_account,
        image_account: req.body.image_account,
    };
    let response;

    try {
        const savedData = await Payment.create(requestData);
        response = {
            message: "Databerhasil disimpan.",
            data: savedData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPaymentByid = async(req,res) => {
    const id = req.params.id;
    try {
        const getData = await Payment.findOne({where: {id: id}});
        response = {
            message: "Oke",
            data: getData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const update = async(req, res) => {
    const id = req.params.id;
    const requestData = {
        name_account: req.body.name_account,
        no_account: req.body.no_account,
        pemilik_account: req.body.pemilik_account,
        image_account: req.body.image_account,
    };
    let response;
    try {
        const savedData = await Payment.update(requestData, {where: {id: id}});
        response = {
            message: "Data berhasil di ubah.",
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
        const deleteData = await Payment.destroy({where: {id: id}});
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
   index,
   store,
   getPaymentByid,
   update,
   destroy
}
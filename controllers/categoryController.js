const {Category} = require('../models')

const index = async(req, res) => {
    const qNew = req.query.new;
    try {
        let response;
        let getData;
        if(qNew) {
            getData = await Category.findAll({
                order: [['id', 'DESC']]
            });
            response = {
                message: "Oke",
                data: getData
            };
        } else {
            getData = await Category.findAll();
            response = {
                message: "Oke",
                data: getData
            };
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const store = async (req, res) => {
    const requestData = {
        name_category : req.body.name_category
    };

    try {
        const savedData = await Category.create(requestData);
        response = {
            message: "Data berhasil disimpan.",
            data: savedData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const findCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const getData = await Category.findAll({
            where: {id: id}
        });
        response = {
            message: "Oke",
            data: getData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const update = async (req, res) => {
    const requestData = {
        id: req.params.id,
        name_category: req.body.name_category
    };

    try {
        const savedData = await Category.update(requestData.name_category, {
            where: {id: requestData.id}
        });
        response = {
            message: "Data berhasil diupdate.",
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
        const deleteData = await Category.destroy({
            where: {id: id}
        });
        response = {
            message: "Data berhasil dihapus.",
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
    findCategoryById,
    update,
    destroy
};
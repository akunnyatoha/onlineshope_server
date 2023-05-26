const { Color } = require('../models')

const index = async(req, res) => {
    try {
        const qNew = req.query.new;
        console.log(qNew);
        let response;
        let getData;
        if(qNew) {
            getData = await Color.findAll({
                order: [['id', 'DESC']]
            });
            response = {
                message: "Oke.",
                data: getData
            };
        } else {
            getData = await Color.findAll();
            response = {
                message: "Oke",
                data: getData,
            };
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const store = async (req, res) => {
    const requestData = {
        name_color : req.body.name_color
    };

    try {
        const savedData = await Color.create(requestData);
        response = {
            message: "Data berhasil disimpan.",
            data: savedData
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const findColorById = async (req, res) => {
    const id = req.params.id;
    try {
        const getData = await Color.findAll({
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
        name_color: req.body.name_color
    };

    try {
        const savedData = await Category.update(requestData.name_color, {
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
        const deleteData = await Color.destroy({
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
    findColorById,
    update,
    destroy
};
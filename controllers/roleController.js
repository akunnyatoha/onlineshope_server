const {Role} = require('../models');

const index = async (req, res) => {
    const qNew = req.query.new;
    // console.log(qNew);
    try {
            let getData;
            let response ;
            if(qNew) {
                getData = await Role.findAll({
                    order: [['id', 'DESC']]
                });
                response = {
                    message: "Oke",
                    data: getData
                };
            } else {
                getData = await Role.findAll();
                response = {
                    message: "Oke",
                    data: getData
                };
            }
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
};

const store = async (req, res) => {
    const requestData = {
        name_role: req.body.name_role
    }
    try {
        const savedRole = await Role.create(requestData);
        response = {
            message: "Data berhasil disimpan",
            data: savedRole
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const findById = async (req, res) => {
    const id = req.params.id;
    let response ;
    try {
        const getData = await Role.findOne({
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
};

const update = async (req, res) => {
    const id = req.params.id;
    const requestData = {
        name_role: req.body.name_role
    };

    try {
        const savedRole = await Role.update(requestData, {
            where: {id: id}
        });
        const response = {
            message: "Data berhasil diupdate",
            data: savedRole
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const destroy = async(req, res) => {
    const id = req.params.id;
    try {
        const deleteData = await Role.destroy({where: {id: id}});
        const response = {message: "Data berhasil dihapus", data: deleteData};
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    index,
    store,
    findById,
    update,
    destroy,
};
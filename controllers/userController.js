const {User, Role} = require('../models')

const index = async (req, res) => {
    const qNew = req.query.new;
    const qRole = req.query.role;
    // console.log(qNew);
    try {
            let getData;
            let response ;
            if(qNew | qRole) {
                getData = await User.findAll({
                    order: [['id', 'DESC']],
                    where: {id_role: qRole},
                    include: [{
                        model: Role,
                        as: 'role'
                    }]
                });
                response = {
                    message: "Oke",
                    data: getData
                };
            } else {
                getData = await User.findAll({
                    order: [['id', 'DESC']],
                    include: [{
                        model: Role,
                        as: 'role',
                    }]
                });
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

const store = async(req, res) => {
    const requestData = {
        id_role: req.body.id_role,
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        no_telephone: req.body.no_telephone,
    };

    try {
        const savedUser = await User.create(requestData);
        const response = {
            message: "Data berhasil disimpan",
            data: savedUser
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const findUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const getUser = await User.findOne({
            where: {id: id},
            include: [{
                model:Role,
                as: 'role'
            }]
        })
        const response = {
            message: "Oke",
            data: getUser
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const update = async (req, res) => {
    const requestData = {
        id_role: req.body.id_role,
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        no_telephone: req.body.no_telephone,
    };
    const id = req.params.id;

    try {
        const savedUser = await User.update(requestData, {
            where: {id: id}
        });
        const response = {
            message: "Data berhasil diupdate",
            data: savedUser
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

const destroy = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteUser = await User.destroy({where: {id:id}});
        const response = {
            message: "Data berhasil dihapus",
            data: deleteUser
        };
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    index,
    store,
    findUserById,
    update,
    destroy
};
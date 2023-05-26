const { Product, Category, Color, ProductComponent } = require('../models');

const index = async (req, res) => {
    const qNew = req.query.new;
    try {
        let response;
        let getData;
        if(qNew) {
            getData = await Product.findAll({
                order: [['id', 'DESC']],
                include: [
                    {
                        model: Category,
                        as: 'category'
                    },
                    {
                        model: Color,
                        as: 'color'
                    },
                    {
                        model: ProductComponent,
                        as: 'productComponent'
                    }
                ]
            });
            response = {
                message: "Oke.",
                data: getData
            };
        } else {
            getData = await Product.findAll({
                include: [
                    {
                        model: Category,
                        as: 'category'
                    },
                    {
                        model: Color,
                        as: 'color'
                    },
                    {
                        model: ProductComponent,
                        as: 'productComponent'
                    }
                ]
            });
            response = {
                message: "Oke",
                data: getData
            };
        }
        // console.log(getData.color);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const store = async (req, res) => {
    const requestData = {
        id_category: req.body.id_category,
        id_color: req.body.id_color,
        code_product: req.body.code_product,
        name_product: req.body.name_product,
        description: req.body.description
    };

    try {
        const savedData = await Product.create(requestData);
        response = {
            message: "Data berhasil disimpan.",
            data: savedData
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const findProductByID = async (req, res) => {
    const id = req.params.id;
    try {
        const getData = await Product.findOne({
            where: {id: id},
            include: [
                {
                    model: Category,
                    as: 'category'
                },
                {
                    model: Color,
                    as: 'color'
                },
                {
                    model: ProductComponent,
                    as: "productComponent"
                }
            ]
        });
        const response = {
            message: "Oke",
            data: getData
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const requestData = {
        id_category: req.body.id_category,
        id_color: req.body.id_color,
        code_product: req.body.code_product,
        name_product: req.body.name_product,
        description: req.body.description,
    };

    try {
        const savedData = await Product.update(requestData, {where: {id: id}});
        const response = {
            message: "Data berhasil disimpan",
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
        const deleteData = await Product.destroy({where: {id: id}});
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
    findProductByID,
    update,
    destroy
}
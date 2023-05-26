const router= require("express").Router();
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const categoryController = require('../controllers/categoryController');
const colorController = require('../controllers/colorController');
const paymentController = require('../controllers/paymentController');
const productController = require('../controllers/productController');
const productComponentController = require('../controllers/productComponentController');

//roles router
router.get('/master-roles', roleController.index);
router.post('/master-roles/store', roleController.store);
router.get('/master-roles/find/:id', roleController.findById);
router.post('/master-roles/update/:id', roleController.update);
router.get('/master-roles/destroy/:id', roleController.destroy);

//user router
router.get('/master-users', userController.index);
router.get('/master-users/find/:id', userController.findUserById);
router.post('/master-users/store', userController.store);
router.post('/master-users/update/:id', userController.update);
router.get('/master-users/destroy/:id', userController.destroy);

//category router
router.get('/master-categories', categoryController.index);
router.get('/master-categories/find/:id', categoryController.findCategoryById);
router.post('/master-categories/create', categoryController.store);
router.post('/master-categories/update/:id', categoryController.update);
router.get('/master-categories/destroy/:id', categoryController.destroy);

//color router
router.get('/master-colors', colorController.index);
router.get('/master-colors/find/:id', colorController.findColorById);
router.post('/master-colors/create', colorController.store);
router.post('/master-colors/update/:id', colorController.update);
router.get('/master-colors/destroy/:id', colorController.destroy);

//payment router
router.get('/master-payments', paymentController.index);
router.post('/master-payments/create', paymentController.store);
router.get('/master-payments/find/:id', paymentController.getPaymentByid);
router.post('/master-payments/update/:id', paymentController.update);
router.get('/master-payments/destroy/:id', paymentController.destroy);

//product router
router.get('/master-products', productController.index);
router.post('/master-products/create', productController.store);
router.get('/master-products/find/:id', productController.findProductByID);
router.post('master-products/update/:id', productController.update);
router.get('master-products/destroy/:id', productController.destroy);

// //productComponent router
router.post('/master-product-components/store', productComponentController.store);
router.get('/master-product-components/find/:id', productComponentController.getProductComponentById);
router.post('/master-product-components/update/:id', productComponentController.update);
router.get('/master-product-components/destroy/:id', productComponentController.destroy);

module.exports = router;
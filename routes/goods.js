const express = require('express');
const router = express.Router();

const goodsController = require('../controllers/goods-controller');



//DRIVERS
router.get('/goods',  goodsController.goods);
router.get('/goods/:id',  goodsController.showGoodsById);
router.post('/goods',  goodsController.createGoods);
router.post('/goods/amend/:id',  goodsController.amendGoods);
router.post('/goods/destroy/:id',  goodsController.destroyGoods);


module.exports = router;
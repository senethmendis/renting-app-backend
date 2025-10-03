const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/search', itemController.searchItems); // <-- Move this above /:id
router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

// export the router module so that server.js file can use it
module.exports = router;
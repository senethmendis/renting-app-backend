const express = require('express');
const router = express.Router();
const renderController = require('../controllers/renderController');

router.get('/search', renderController.searchRenters); // <-- Move this above /:id
router.get('/', renderController.getAllRenters);
router.post('/', renderController.createNewRent);
router.get('/:id', renderController.getRenterById);
router.put('/:id', renderController.updateRenter);
router.delete('/:id', renderController.deleteRenter);

// export the router module so that server.js file can use it
module.exports = router;
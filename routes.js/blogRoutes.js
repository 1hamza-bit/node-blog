const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/', blogController.createPost);
router.get('/', blogController.getPosts);
router.get('/:id', blogController.getPostById);
router.put('/:id', blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;

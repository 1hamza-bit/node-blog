
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const blogController = require('../controllers/blogController');

cloudinary.config({ 
    cloud_name: 'dmwolrggx', 
    api_key: '916911784584737', 
    api_secret: '***************************' 
  });
  
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
});
  
const upload = multer({ storage: storage });

router.post('/',upload.single("image"), blogController.createPost);
router.get('/', blogController.getPosts);
router.get('/:id', blogController.getPostById);
router.put('/:id', blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;

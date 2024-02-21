const Blog= require('../models/blog');

exports.createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = await BlogPost.create({ title, content, author });
        res.json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, { title, content, author }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

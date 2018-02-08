const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

// get posts

module.exports.getPosts = (callback, limit) => {
    Post.find(callback).limit(limit);
}

// get post by id
module.exports.getPostById = (id, callback) => {
    Post.findById(id, callback);
}

// add post 
module.exports.addPost = (post, callback) => {
    Post.create(post, callback);
}

//update post
module.exports.updatePost = (id, post, options, callback) => {
    let query = {_id: id};
    let update = {
        title: post.title,
        image: post.image,
        date: post.date,
        body: post.body 
    }

    Post.findOneAndUpdate(query, update, options, callback);
}

// delete guest
module.exports.deletePost = (id, callback) => {
    let query = {_id: id};
    Post.remove(query, callback);
}




const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
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
    url: {
      type: String,
      required: false
    }
});

const Resource = module.exports = mongoose.model('Resource', ResourceSchema);

// get Resources

module.exports.getResources = (callback, limit) => {
    Resource.find(callback).limit(limit);
}

// get resource by id
module.exports.getResourceById = (id, callback) => {
    Resource.findById(id, callback);
}

// add resource 
module.exports.addResource = (resource, callback) => {
    Resource.create(resource, callback);
}

//update resource
module.exports.updateResource = (id, resource, options, callback) => {
    let query = {_id: id};
    let update = {
        title: resource.title,
        body: resource.body, 
        image: resource.image, 
        date: resource.date,
        url: resource.url
    }

    Resource.findOneAndUpdate(query, update, options, callback);
}

// delete resource
module.exports.deleteResource = (id, callback) => {
    let query = {_id: id};
    Resource.remove(query, callback);
}




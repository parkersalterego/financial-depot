const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Resource = require('../models/resource');

// get resource
router.get('/', (req, res, next) => {
    Resource.getResources((err, resources) => {
        if (err) {
            return next(err);
        }
        res.json(resources);
    });
});

// get post by id
router.get('/:_id', (req, res, next) => {
    Resource.getResourceById(req.params._id, (err, resource) => {
        if (err) {
            return next(err);
        }
        res.json(resource);
    });
});

// add post
router.post('/', (req, res, next) => {
    let resource = new Resource({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image,
        date: req.body.date,
        url: req.body.url
    });

    Resource.addResource(resource, (err, resource) => {
        if (err) {
            return next(err);
        }
        res.json(resource);
    });
});

// update resource
router.put('/:_id', (req, res, next) => {
    let id = req.params._id;
    let resource = new Resource({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image,
        date: req.body.date,
        url: req.body.url
        
    });

    Resource.updateResource(id, resource, {}, (err, resource) => { 
        if (err) {
            return next(err);
        }
        res.json(resource);
    });
});

// delete resource 
router.delete('/:_id', (req, res, next) => {
    let id = req.params._id;
    Resource.deleteResource(id, (err, resource) => {
        if (err) {
            return next(err);
        }
        res.json(resource);
    });
});

module.exports = router;
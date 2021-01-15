const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const objService = require('./barang.service');

// routes with authorize data
router.post('/',authorize(), createSchema, create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function createSchema(req, res, next) {
    const schema = Joi.object({
        nama: Joi.string().required(),
        merk: Joi.string().required(),
        keterangan: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {
    objService.create(req.body)
        .then(() => res.json({ message: 'Created successfully' }))
        .catch(next);
}

function getAll(req, res, next) {
    objService.getAll()
        .then(data => res.json(data))
        .catch(next);
}

function getById(req, res, next) {
    objService.getById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        nama: Joi.string().empty(''),
        merk: Joi.string().empty(''),
        keterangan: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    objService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Updated successfully' }))
        .catch(next);
}

function _delete(req, res, next) {
    objService.delete(req.params.id)
        .then(() => res.json({ message: 'Deleted successfully' }))
        .catch(next);
}
const express = require('express')
const router = express.Router()
const controller = require('../controller/subject.controller')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
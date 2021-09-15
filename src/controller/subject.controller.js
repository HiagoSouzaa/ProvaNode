const service = require('../service/subject.service')

const create = (req, res) => {
    if (req.body.name && req.body.workload && req.body.teacherName) {
        service.create(req.body)
        res.send('201 - o subject for criado com sucesso');
    } else {
        res.send('400 - houver erros de validação no subject');
    }
}

const getAll = async (req, res) => {
    const rs = await service.getAll()
    if (rs.length) {
        res.status(200).send(rs)
    } else {
        res.send('Ops! There is not any value.');
    }
}

const update = (req, res) => {

    if (req.body.name && req.body.workload && req.body.teacherName) {
        const rs = service.update(req.params.id, req.body)
        if (rs) {
            res.send('201 - o subject for criado com sucesso');
        } else {
            res.send('400 - houver erros de validação no subject');
        }
    } else {
        res.status(400).send('There is a problem with your body request! Please, check it!');
    }
}

const remove = (req, res) => {
    const rs = service.remove(req.params.id)
    if (rs) {
        res.send('201 - o subject for criado com sucesso');
    } else {
        res.send('400 - houver erros de validação no subject');
    }

}

module.exports = {
    create,
    getAll,
    update,
    remove
}
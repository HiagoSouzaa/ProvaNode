const database = []

const create = subject => {
    subject.id = Date.now()
    database.push(subject)
}

const getAll = () => database

const update = (subjectId, subject) => {
    const indexSubject = database.findIndex(
        oldSubject => oldSubject.id == subjectId
    )

    if (indexSubject != -1) {
        subject.id = Number(subjectId)
        database[indexSubject] = subject
        return true
    }

    return null
}

const remove = subjectId => {
    const indexSubject = database.findIndex(
        subject => subject.id == subjectId
    )

    if (indexSubject != -1) {
        database.splice(indexSubject, 1)
        return true
    }

    return null

}

module.exports = {
    create,
    getAll,
    update,
    remove
}
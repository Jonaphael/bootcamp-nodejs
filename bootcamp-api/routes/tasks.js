module.exports = app => {

    const Tasks = app.db.models.Tasks;

    app.route('/tasks')
        .get((req, res) => {
            Tasks.findAll()
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(500).json({ msg: error.message });
                });
        })
        .post((req, res) => {
            Tasks.create(req.body)
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(500).json({ msg: error.message });
                });
        });

    app.route('/tasks/:id')
        .get((req, res) => {
            Tasks.findbyId(req.param.id)
                .then(result => {
                    res.json(result)
                })
                .catch(error => {
                    res.status(500).json({ msg: error.message });
                });
        })
        .put((res, req) => {
            Tasks.update(res.body, {
                where: req.params.id
            })
                .then(() => {
                    res.sendStatus(204);
                })
                .catch(error => {
                    res.status(500).json({ msg: error.message });
                });
        })
        .delete((res, req) => {
            Tasks.destroy({
                where: {
                    id: req.params.id
                }
            })
                .then(() => {
                    res.sendStatus(204)
                })
                .catch(error => {
                    res.status(500).json({ msg: error.message });
                });
        });
};
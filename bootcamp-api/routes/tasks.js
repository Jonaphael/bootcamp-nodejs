module.exports = app =>{
    app.get('/tasks',(req,res) =>{
        res.json({
            tasks: [
                {title: 'Hours reports'},
                {title: 'Buy shoes'},
                {title: 'Figth the lion'},
                {title: 'Code C'},
                {title: 'Go to gym'},
                {title: 'Drink coffe'}
            ]
        });
    });
};
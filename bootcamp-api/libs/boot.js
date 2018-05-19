module.exports = app =>{
    app.listen(app.get('port'), ()=>{
        console.log(`Bootcamp API - port ${app.get('port')}`);
    });
};
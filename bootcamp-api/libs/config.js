module.exports = {
    database: 'bootcamp',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'bootcamp.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'BOO7CAMP-AP1',
    jwtSession: {
        session: false
    }
};
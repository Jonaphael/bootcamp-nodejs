const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            valide: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            valide: {
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            type: DataType.STRING(20),
            allowNull: false,
            valide: {
                notEmpty: true,
            }
        }
    });

    Users.associate = models => {
        Users.hasMany(models.Tasks, {
            onDelete: 'CASCADE'
        });
    };

    Users.hook('beforeCreate', user => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    });

    Users.isPassword = (encodedPassword, password) => {
        return bcrypt.compareSync(password, encodedPassword);
    };
    
    return Users;
};
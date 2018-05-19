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
    return Users;
};
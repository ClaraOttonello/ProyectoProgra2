module.exports = function (sequelize, dataTypes) {
    
    let alias = 'users';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: { type: dataTypes.STRING },
        username: { type: dataTypes.STRING },
        pass: { type: dataTypes.STRING },
        birthd: { type: dataTypes.DATE },
        img: { type: dataTypes.STRING },
        updatedAt: { type: dataTypes.DATE },
        createdAt: { type: dataTypes.DATE }
    }

    const configs = {
        tableName: 'users',
        timestamps: true
    }

    const User = sequelize.define(alias, cols, configs);

    User.associate = function (models) {
        User.hasMany(models.products, {
            as: 'products',
            foreignKey: 'user_id'
        }),
        User.hasMany(models.comment, {
            as: 'com_user',
            foreignKey: 'user_id' 
        })
    }

    return User;
}
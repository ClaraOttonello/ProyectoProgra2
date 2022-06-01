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
        pass: {type: dataTypes.STRING},
        birthd: { type: dataTypes.DATE},
        img: { type: dataTypes.STRING },
    }

    const configs = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, configs);

    return User;
}
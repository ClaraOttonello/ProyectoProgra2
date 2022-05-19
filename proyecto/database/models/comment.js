module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        _name: { type: dataTypes.STRING },
        content: { type: dataTypes.STRING },
        age: { type: dataTypes.INETEGER },
        img: { type: dataTypes.STRING },
        password: { type: dataTypes.STRING },
    }

    const configs = {
        tableName: 'users',
        timestamps: false
    }

    const Comment = sequelize.define('Comment', cols, configs);

    return Comment;
}
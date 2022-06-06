module.exports = function (sequelize, dataTypes) {
let alias = 'comment';
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        _name: { type: dataTypes.STRING },
        content: { type: dataTypes.STRING },
        age: { type: dataTypes.INTEGER },
        img: { type: dataTypes.STRING },
        password: { type: dataTypes.STRING },
    }

    const configs = {
        tableName: 'comments',
        timestamps: false
    }

    const Comment = sequelize.define (alias, cols, configs);

    
    Comment.associate = function(models) {
        Comment.belongsTo(models.user, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Comment.belongsTo(models.proudcts, {
            as: 'product',
            foreignKey: 'book_id'
        })
    }


    return Comment;
}
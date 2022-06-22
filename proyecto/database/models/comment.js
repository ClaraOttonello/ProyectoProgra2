module.exports = function (sequelize, dataTypes) {
    
    let alias = 'comment';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        content: { type: dataTypes.STRING },
        user_id: { type: dataTypes.INTEGER },
        product_id: { type: dataTypes.INTEGER },
        created_at: { type: dataTypes.DATE },
    }

    const configs = {
        tableName: 'comments',
        timestamps: false
    }

    const Comment = sequelize.define(alias, cols, configs);

    Comment.associate = function (models) {
        Comment.belongsTo(models.users, {
            as: 'usercomment',
            foreignKey: 'user_id'
        }),
        Comment.belongsTo(models.products, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return Comment;
}
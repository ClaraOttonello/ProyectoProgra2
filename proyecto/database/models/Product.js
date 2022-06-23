module.exports = function (sequelize, dataTypes) {
    
    const alias = 'products';
    
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        _name: { type: dataTypes.STRING },
        price: { type: dataTypes.INTEGER },
        _description: { type: dataTypes.STRING },
        img: { type: dataTypes.STRING },
        updatedAt: { type: dataTypes.DATE },
        createdAt: { type: dataTypes.DATE }
    }

    const configs = {
        tableName: 'products',
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, configs);

    Product.associate = function (models) {
        Product.belongsTo(models.users, {
            as: 'owner',
            foreignKey: 'user_id'
        }),
        Product.hasMany(models.comment, {
            as: 'comments',
            foreignKey: 'product_id'
        })
    }

    return Product;
}
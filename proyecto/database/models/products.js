module.exports = function (sequelize, dataTypes) {
let alias = 'products';
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
    }

    const configs = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, configs);

    Product.associate = function (models) {
        Product.belongsTo(models.users,{
            as: 'owner',
            foreignKey: 'user_id'
        })
        Product.hasMany(models.comment, {
            as: 'comments',
            foreignKey: 'product_id'
        })
    }

    return Product;
}
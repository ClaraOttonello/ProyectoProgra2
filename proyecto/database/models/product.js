module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        _name: { type: dataTypes.STRING },
        price: { type: dataTypes.INETEGER },
        description: { type: dataTypes.STRING },
        img: { type: dataTypes.STRING },
    }

    const configs = {
        tableName: 'product',
        timestamps: false
    }

    const product = sequelize.define('product', cols, configs);

    return product;
}
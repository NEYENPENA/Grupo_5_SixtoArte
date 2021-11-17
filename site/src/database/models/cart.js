module.exports = (sequelize, dataTypes) => {
    let alias = "cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false},
        id_order: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'carts',
        timestamps: false
    };
    const cart = sequelize.define(alias, cols, config)
// ver si esta bien la funcion sin return
    cart.associate = function(models) {
        cart.hasMany(models.order, {
            as: "orden",
            foreignKey : "id_order"
        })
    }

    return cart
}
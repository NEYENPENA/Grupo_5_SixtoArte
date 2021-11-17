module.exports = (sequelize, dataTypes) => {
    let alias = "order";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,            
        },
        status: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false}        
    };
    let config = {
        tableName: 'order',
        timestamps: false
    };
    const order = sequelize.define(alias, cols, config)
    
    order.associate = function(models) {
    order.belongsTo(models.user, {
        as: "orden_usuario",
        foreignKey : "id_user"
    }),
    order.hasMany(models.cart, {
        as: "orden_carrito",
        foreignKey: "id_order"
    })
    }
    return order
}
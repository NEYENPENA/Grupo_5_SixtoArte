module.exports = (sequelize, dataTypes) => {
    let alias = "image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,            
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false            
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }        
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    
    const image = sequelize.define(alias, cols, config)

    image.associate = function(models) {
        image.belongsTo(models.product, {
            as: "imagen_producto",
            foreignKey : "id_product"
        })
    }

    return image
}
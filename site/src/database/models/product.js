module.exports = (sequelize, dataTypes) => {
    let alias = "product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,            
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,        
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        related: {
            type: dataTypes.STRING(400),                    
        },
        id_categoria: {
            type: dataTypes.INTEGER,
        },        
        id_colour: {
            type: dataTypes.INTEGER,
            allowNull: false
        }      
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const product = sequelize.define(alias, cols, config)

    product.associate = function(models) {
        product.belongsTo(models.colour, {
            as: "color",
            foreignKey : "id_colour"
        }),
        product.hasMany(models.image, { 
            as: "imagen",
            foreignKey : "id_product"
        }),
        product.belongsTo(models.categorie, {
            as: "categoria",
            foreignKey: "id_categoria"
        }),
        product.belongsToMany(models.user, {
            as: "usuario",
            through: "cart",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        })
    }

    return product
        
}
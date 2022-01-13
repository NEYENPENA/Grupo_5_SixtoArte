module.exports = (sequelize, dataTypes) => {
    let alias = "user";
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
        username: {
            type: dataTypes.STRING(100),
            allowNull: false,
        // agregar UQ
        },
        birthday: {
            type: dataTypes.DATE, // REVISAR                         
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            // agregar UQ            
        },
        contraseña: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(400),
            allowNull: false,
        },
        id_role: {
            type: dataTypes.INTEGER,
            allowNull: false
        }      
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const user = sequelize.define(alias, cols, config)

    user.associate = function(models) {
        user.belongsTo(models.rol, {
            as: "roles",
            foreignKey : "id_role"
        }),
        user.hasMany(models.order,{
            as: "ordenes",
            foreignKey: "id_user"
        }),
        user.belongsToMany(models.product, {
            as: "producto",
            through: "cart",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        })

    }

    return user
}
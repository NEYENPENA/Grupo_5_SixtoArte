module.exports = (sequelize, dataTypes) => {
    let alias = "rol";
    let cols = {
        id: {
            //si es 0 que sea usuario normal, si es 1 que sea admin
            //defaultValue
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,            
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        }        
    };
    let config = {
        tableName: 'roles',
        timestamps: false
    };
    const rol = sequelize.define(alias, cols, config)

    rol.associate = function(models) {
        rol.hasMany(models.user, {
            as: "rol_usuario",
            foreignKey : "id_role"
        })
    }

    return rol
}


module.exports = (sequelize, dataTypes) => {
    let alias = "categorie";
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
            // AGREGAR UQ            

        }        
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    };
    const categorie = sequelize.define(alias, cols, config)

    categorie.associate = function(models) {
        categorie.hasMany(models.product, {
            as: "categoria_productos",
            foreignKey : "id_colour"
        })
    }

    return categorie
}
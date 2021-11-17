module.exports = (sequelize, dataTypes) => {
    let alias = "colour";
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
        }        
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };

    const color = sequelize.define(alias, cols, config)

    color.associate = function(models) {
        color.hasMany(models.product, {
            as: "color_productos",
            foreignKey : "id_colour"
        })
    }

    return color
}
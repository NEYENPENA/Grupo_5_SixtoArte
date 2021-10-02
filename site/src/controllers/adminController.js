const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    //listar
    admin: (req,res) => {
        res.render('admin/admin', {productos})
    },

    //crear
    carga: (req,res) => {
        res.render('admin/carga', {productos})
    },
    guardar: (req,res) => {
        let max = 0
		products.forEach(element => {
			
			if(max < element.id){
			max = element.id
			}
		});
        
        let {nombre, precio, descripcion, imagen} = req.body
        const product ={}
        product.id =max +1
		product.name = nombre
		product.price = +precio
		product.description = descripcion
		product.image = req.file ? req.file.imagen : 'default-image.png'

        products.push(product)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		res.redirect('/products/detail/'+ product.id)

    },

    //editar
    edit: (req,res) => {
        const {id} =req.params
        let productEdit = products.find(e => e.id === +id)
        res.render('admin/edit', {productEdit})
    },

    guardarEdit:(req,res) => {
        const productUpdate = products.find(p => p.id === +req.params.id)
        let {nombre, precio, descripcion, imagen} = req.body
        if(productUpdate){
			productUpdate.nombre = nombre
			productUpdate.precio = +precio
			productUpdate.descripcion = descripcion
            productUpdate.imagen = imagen

			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		    res.redirect('/products/detail/'+req.params.id)

		}else{
			res.redirect('/products/detail/'+req.params.id)
		}
    },

}
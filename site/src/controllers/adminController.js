const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    //listar
    admin: (req,res) => {
        res.render('admin/admin', {products})
    },

    //crear
    carga: (req,res) => {
        res.render('admin/carga', {products})
    },
    guardar: (req,res) => {
        let max = 0
		products.forEach(element => {
			
			if(max < element.id){
			max = element.id
			}
		});
        
        let {nombre, precio, descripcion} = req.body
        const product ={}
        product.id =max +1
		product.Nombre = nombre
		product.precio = +precio
		product.descripcion = descripcion
        product.categoria = 'otro'
         product.relacionado = 'Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!'
		product.imagen = req.file ? req.file.filename : 'default-image.png'

        products.push(product)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		res.redirect('/product/detalle/'+ product.id)

    },

    //editar
    edit: (req,res) => {
        const {id} =req.params
        let productEdit = products.find(e => e.id === +id)
        res.render('admin/edit', {productEdit})
        
    },

    guardarEdit:(req,res) => {
        const productUpdate = products.find(p => p.id === +req.params.id)
        let {nombre, precio, descripcion} = req.body
        if(productUpdate){
			productUpdate.nombre = nombre
			productUpdate.precio = +precio
			productUpdate.descripcion = descripcion
            productUpdate.imagen = req.file ? req.file.filename : null

			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
		    res.redirect('/product/detalle/'+req.params.id)

		}else{
			res.redirect('/product/detalle/'+req.params.id)
		}
    },    
    detalleAdmin: (req,res) => {        
        const {id} = req.params;
        const producto = products.find(element => element.id === +id);
        res.render('admin/detalle', {producto}); 
    },

    //eliminar
    eliminar: (req,res) => {
        products = products.filter(product => product.id !== +req.params.id)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))
        res.redirect('/')
    }
}
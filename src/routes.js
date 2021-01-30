const { Router } = require('express');
const CategoriesController = require('./controllers/CategoriesController');

const routes = Router();

routes.get('/', (req, res) =>{
    return res.json({ message: 'API OK!'}); // Objeto JavaScript
});
routes
.get('/categories', CategoriesController.index)
.get('/categories/:id', CategoriesController.select)
.post('/categories', CategoriesController.create) 
.put('/categories/:id', CategoriesController.update)
.delete('/categories/:id', CategoriesController.delete);

module.exports = routes;


//req = envia
//res = recebe
//get - pegar dados
//post - enviar dados
//put - atualizar
//delete  
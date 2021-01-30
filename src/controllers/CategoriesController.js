const knex = require('../database');

module.exports = {

    async index(req, res){ //consultar todos
        const categories = await knex('categories');
        return res.json(categories);
    },

    async select(req, res, next){//consultar os selecionados
        try {
            const { id } = req.params;

            //necessario salvar na variavel para mostrar o resultado da consulta 
            let category = await knex('categories').where({ id });
            
            return res.send(category);
        } catch (error) {
            next(error);
        }
    },

    async create (req, res, next){//criação
        try {
            const { name } = req.body;

            await knex('categories').insert({
                name
            });
            
            return res.status(201).send(); //201 sucesso ao inserir um novo registro

        } catch (error) {
            next(error);
        }
    },

    async update (req, res, next){//udate - atualização
        try {
            const { name } = req.body;
            const { id } = req.params;

            await knex('categories')
            .update({ name})
            .where({ id });

            return res.send()

        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {//deletar
        try {
            const { id } = req.params;

            await knex('categories')
            .where({ id }).delete();
            

            return res.send();
        } catch (error) {
            next(error);
        }
    }
}
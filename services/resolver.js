const knex = require("./config");

const resolver = {
    getAllSapa: async () => {
        return await knex("sapa")
            .select()
            .then((data) => {
                return data;
            });
    },

    addSapa: async (param) => {
        return await knex("sapa")
            .insert(param.input)
            .returning()
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw err;
            })
    },

    updateSapa: async (param) => {
        return await knex("sapa")
            .where("id", param.id)
            .update(param.input)
            .returning()
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw err;
            })
    },

    deleteSapa: async (param) => {
        return await knex("sapa")
            .where("id", param.id)
            .delete()
            .returning()
            .then((data) => {
                return data;
            })
            .catch((err) => {
                throw err;
            })
    }
};

module.exports = resolver;
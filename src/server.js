const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require("../services/schema");
const resolver = require("../services/resolver");

// for test mock data
// const data = require("../test/data");

// define schema
// const schema = buildSchema();

const setupExpressServer = () => {

    //test
    // The schema should model the full data object available.
    // const schema = buildSchema(`myschema`);

    // "rootValue" for test
    // const root = {
    //     AllSapa: () => {
    //         return data.sapa;
    //     },
    // };

    const app = express();
    app.use("/graphql", graphqlHTTP({
        // schema,
        schema : buildSchema(schema),
        // rootValue: root,
        rootValue: resolver,
        graphiql: true,
        // graphiql: false,
        })
    );

    //express connection test
    app.get("/", (req, res) => {
        res.send("Hello!");
    });

    return app;
};

module.exports = { setupExpressServer };

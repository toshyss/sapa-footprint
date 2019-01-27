const schema =`
type Sapa {
    id: ID
    name: String
    direction: String
    route: String
    address: String
    service_name: String
    service_type: String
}

input SapaInput {
    name: String
    direction: String
    route: String
    address: String
    service_name: String
    service_type: String
}

type Mutation {
    addSapa(input: SapaInput): Sapa
    deleteSapa(id: ID!): Sapa
    updateSapa(id: ID!, input: SapaInput): Sapa
}

type Query {
    getAllSapa: [Sapa]
}
`;
module.exports = schema;
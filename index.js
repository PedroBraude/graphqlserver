import { gql } from "apollo-server"

const cars = [
    {
        color: 'red',
        type: 'station wagon',
        registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
        capacity: 5
    },
    {
        color: 'blue',
        type: 'cabrio',
        registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
        capacity: 2
    },
    {
        color: 'white',
        type: 'chevrolet',
        registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
        capacity: 6
    }
]

// Describir los datos con graphql

// gql es un metodo que ejecuta un template que lo rellena con lo que le pasemos.
const typeDefs = gql`
type Car {
    color: String!
    type: String!
    registration: String!
    capacity: Int!   

}
`


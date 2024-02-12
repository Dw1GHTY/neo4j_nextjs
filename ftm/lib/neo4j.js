var neo4j = require('neo4j-driver')

const driver = neo4j.driver(
    process.env.URI,
    neo4j.auth.basic(
        process.env.USER,
        process.env.PASSWORD
    )
)

export async function read(cypher, params = {}){
    const session = driver.session();

    try{
        const res = await session.executeRead(tx => tx.run(cypher, params))

        const values = res.records.map(record => record.toObject())

        console.log(values)
    } 
    finally{
        await session.close();
    }
}
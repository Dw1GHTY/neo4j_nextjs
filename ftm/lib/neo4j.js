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

        const values = res.records.map(record => record.toObject())     //array | za pristup .n.properties

        return values
    } 
    finally{
        await session.close();
    }
}

export async function getManagers(filter){

    const query = 
        `MATCH (n:Manager{name:'${filter}'}) return n`

    const managers = await read(query)
    managers.forEach(manager => {
        console.log(manager.n.properties.name)
    });

}
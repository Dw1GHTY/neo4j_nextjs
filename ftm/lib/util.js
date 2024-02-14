import { driver } from "./dbConnection";

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

export async function write(cypher, params = {}) {

    const session = driver.session()
  
    try {

      const res = await session.executeWrite(tx => tx.run(cypher, params))
  

      const values = res.records.map(record => record.toObject())
  
      return values
    }
    finally {

      await session.close()
    }
}

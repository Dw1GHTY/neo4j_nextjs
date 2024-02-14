import { 
    read, 
    write 
} from "./util";

export async function getManagers(filter){

    const query = 
        `MATCH (n:Manager) return n`

    const managers = await read(query)
    managers.forEach(manager => {
        console.log(manager.n.properties.name)
    });

}
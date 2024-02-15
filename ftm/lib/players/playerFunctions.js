import { read, write } from "../util";



export async function getAllPlayers(){

    const players = await read(
        'MATCH (p:Player) return p'
    )
    
    const data = [];

    players.forEach(player => {
        //console.log(player.p.properties)
        data.push(player.p.properties)
    });

    console.log(data);

    return data;
}
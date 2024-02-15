import React from 'react'
import { getAllPlayers } from '../../../lib/players/playerFunctions'


let players = await getAllPlayers();

const Players = () => {
  return (
    <table>
        <thead>
            <tr>    
                <th>name</th>
                <th>surname</th>
                <th>club</th>
            </tr>
        </thead>
        <tbody>
            {
                players.forEach(player => {     //ovde si stao
                    {console.log(player.name)}
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.surname}</td>
                        <td>{player.club}</td>
                    </tr>       
                })
            }
        </tbody>
    </table>
  )
}

export default Players
import {IRegisterRepository,RegisterPlayersType} from "@/core/usecase/registerPlayers";

const registerPlayers=async(data:RegisterPlayersType[]):Promise<void>=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            data.forEach((player)=>{
                console.log(`Player:${player.id}`)
            })
            resolve()
        },1000)
    })
}

export const registerPlayerRepository:IRegisterRepository = {
    registerPlayers
}
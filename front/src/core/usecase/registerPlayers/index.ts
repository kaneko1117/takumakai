import {User, UserMethods, UserMethodsType} from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

export type RegisterPlayersType = Pick<User, "id">;

type RegisterPlayersValidation = ObjectsKeyExtract<
  UserMethodsType,
  "userIDValidation"
>;

export interface IRegisterPlayersUseCase {
    registerPlayersValidation:()=>RegisterPlayersValidation;
    registerPlayers:(data:RegisterPlayersType[])=>Promise<void>;
}

export interface IRegisterRepository {
    registerPlayers:(data:RegisterPlayersType[]) =>Promise<void>
}

const registerPlayerValidation=():RegisterPlayersValidation=>{
    return {
        userIDValidation:UserMethods.userIDValidation
    }
}

export const registerPlayersUseCase = (repo:IRegisterRepository):IRegisterPlayersUseCase=>{
    return {
        registerPlayersValidation:registerPlayerValidation,
        registerPlayers:repo.registerPlayers,
    }
}



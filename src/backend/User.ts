import { atomWithStorage } from "jotai/utils";

export interface User {
    userIdx: number
    jwt: string
}

export const userAtom = atomWithStorage<User>("user", { userIdx: -1, jwt: "" });
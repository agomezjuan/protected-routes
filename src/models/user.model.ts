import { Roles } from "./roles"

export interface User {
    id: string
    email: string
    password: string
    username: string
    rol?: Roles
}

export const UserEmptyState: User = {
    id: '',
    email: '',
    password: '',
    username: '',

}
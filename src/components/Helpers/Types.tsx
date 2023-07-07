import { ReactNode } from "react"

export interface IUser {
    username: string
    age: number
    fullname: string
    email: string
    position: string
    id?: string
}

export interface IUserList {
    users: IUser[]
}

export interface IAddUser {
    onAddUser: (user: IUser) => void
}

export interface IError {
    title: string
    message: string
    onConfirm?: () => void
}

export interface IPortalActions {
    onConfirm?: () => void
}

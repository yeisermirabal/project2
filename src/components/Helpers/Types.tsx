import { InputHTMLAttributes } from "react"

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

export interface IStateReducer {
    value: string;
    isValid: boolean;
}

export type ActionReducer =
    | { type: 'USER_INPUT'; value: string }
    | { type: 'INPUT_BLUR' };

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean
    label: string
}
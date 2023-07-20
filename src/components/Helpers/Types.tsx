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

export interface HomeProps {
    onLogout: () => void
}

export interface ILogin {
    email: string
    password: string
}

export interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

export interface HeaderProps {
    isAuthenticated: boolean
    onLogout: () => void
}

export interface NavigationProps {
    isLoggedIn: boolean
    onLogout: () => void
}

export interface IStateReducer {
    value: string;
    isValid: boolean;
}

export type ActionReducer =
    | { type: 'USER_INPUT'; value: string }
    | { type: 'INPUT_BLUR' };
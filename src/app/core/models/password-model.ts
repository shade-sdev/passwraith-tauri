import {PasswordType} from "./password-type-model";

export interface PasswordModel {
    id?: number,
    username?: string,
    password?: string,
    website?: string,
    website_url?: string,
    website_icon_url?: string,
    password_type?: PasswordType,
}
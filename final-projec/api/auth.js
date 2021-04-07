import { CORRECT_USERNAME, CORRECT_PASSWORD } from '../consts'

export const login = (username, password) => {
    if (username == CORRECT_USERNAME &&
        password == CORRECT_PASSWORD) {
        return { token: 'token' }
    } else return { err: 'Wrong credentials.' }
}
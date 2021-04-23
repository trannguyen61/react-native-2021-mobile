import { CORRECT_USERNAME, CORRECT_PASSWORD } from '../consts'

export const login = (username, password) => {
    const indexOfFoundUsername = CORRECT_USERNAME.findIndex(name => name == username)
    if (indexOfFoundUsername != -1 && password == CORRECT_PASSWORD[indexOfFoundUsername]) {
        return { token: 'token' }
    } else return { err: 'Wrong credentials.' }
}
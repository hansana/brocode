export default class LoginService {

    static isLoggedIn() {
        if (localStorage.getItem('loginToken')) {
            return true;
        }

        return false;
    }

    static addLoginDetails(data) {
        localStorage.clear();
        localStorage.setItem('username', data.username);
        localStorage.setItem('loginToken', data.token);
    }

    static getUserName() {
        return localStorage.getItem('username');
    }

    static getToken() {
        return localStorage.getItem('loginToken');
    }

    static clearUserData() {
        localStorage.removeItem('username');
        localStorage.removeItem('loginToken');
    }
}
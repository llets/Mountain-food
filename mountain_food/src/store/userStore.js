import {makeAutoObservable} from 'mobx'

class UserStore{

    _user = {
        "id": 1,
        "email": "admin@gmail.com",
        "username": "admin",
        "password": "admin",
        "isAdmin": true
    }
    _isAuth = false
    _isAdmin = false

    constructor(){
        // this._isAuth = false
        // this._user = {}
        // this._isAdmin = false
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

    get userId() {
        return this._user.id
    }

    get isAdmin(){
        return this._isAdmin
    }
}

export default UserStore
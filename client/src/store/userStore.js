import {makeAutoObservable} from 'mobx'

class UserStore{

    // _user = {
    //     "id": 1,
    //     "email": "admin@gmail.com",
    //     "username": "admin",
    //     "password": "admin",
    //     "isAdmin": true
    // }
    // _isAuth = false
    // _isAdmin = false

    constructor(){
        this._isAuth = false
        this._user = {}
        this._isAdmin = false
        this._id = {}
        makeAutoObservable(this)
    }

    setIsAuth(a){
        this._isAuth = a
    }

    setUser(user){
        this._user = user
    }

    setIsAdmin(a){
        this._isAdmin = a
    }

    setId(num){
        this._id = num
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

    get userId() {
        return this._id
    }

    get isAdmin(){
        return this._isAdmin
    }
}

export default UserStore
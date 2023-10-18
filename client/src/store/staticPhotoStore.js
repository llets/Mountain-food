import {makeAutoObservable} from 'mobx'

class StaticPhotoStore {

    _photo_list=[
    ]
    constructor() {
        this._photo_list = []
        makeAutoObservable(this)
    }
    setPhotoList(a) {
        this._photo_list = a
    }
    get PhotoList() {
        return this._photo_list
    }
    getPhotoName(id){
        console.log(this._photo_list)
        return this._photo_list.filter(item => item.id === id)[0].name
    }
}

export default StaticPhotoStore
import {makeAutoObservable} from 'mobx'

class CategoryStore {

    _category_list=[
    ]
    constructor() {
        this._category_list = []
        makeAutoObservable(this)
    }
    setCategory(a) {
        this._category_list = a
    }
    get CategoryList() {
        return this._category_list
    }
    getCategoryId(name){
        return this._category_list.filter(item => item.name === name)[0].id
    }
}

export default CategoryStore
import {makeAutoObservable} from 'mobx'

class CategoryStore {
    constructor() {
        this._category_list = []
        makeAutoObservable(this)
    }
    _category_list=[
    ]
    setCategory(a) {
        this._category_list = a
    }
    get CategoryList() {
        return this._category_list
    }
}

export default CategoryStore
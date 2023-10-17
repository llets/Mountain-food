const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    total: {type: DataTypes.INTEGER, allowNull: false}
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER, allowNull: false}
})
const Food = sequelize.define('food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // category: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    additional: {type: DataTypes.STRING}
})

const Category = sequelize.define('category',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    type: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Food.hasMany(CartItem)
CartItem.belongsTo(Food)

Category.hasMany(Food)
Food.belongsTo(Category)

module.exports = {
    User,
    Food,
    Cart,
    CartItem,
    Category
}
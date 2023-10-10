const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    username: {type: DataTypes.STRING, unique: true}
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER, allowNull: false}
})

const Meal = sequelize.define('meal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    photo: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: true, allowNull: false},
    // price: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    additional: {type: DataTypes.STRING}
    // additional: {type: DataTypes.STRING, allowNull: false}
})

const Drink = sequelize.define('drink', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    // price: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Meal.hasMany(CartItem)
CartItem.belongsTo(Meal)

// Drink.hasMany(CartItem)
// CartItem.belongsTo(Drink)

module.exports = {
    User,
    Meal,
    Drink,
    Cart,
    CartItem
}
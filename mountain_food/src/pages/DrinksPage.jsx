import React, { useContext } from 'react'
import {Context} from '../index'
import DrinkCard from '../component/DrinkCard'

const DrinksPage = () => {
  const {drinks} = useContext(Context)
  return <>
      <DrinkCard 
      drinks={drinks._drink_list.filter((drink) => drink.category=='alcohol')} 
      category='Алкогольные'/>
      <DrinkCard 
      drinks={drinks._drink_list.filter((drink) => drink.category=='cool')} 
      category='Прохладительные'/>
  </>
}

export default DrinksPage
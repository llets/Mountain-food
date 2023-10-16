import React from 'react'
import MainInfo from '../component/MainInfo'
import {observer} from "mobx-react-lite";

const IndexPage = observer(() => {
  return (<div style={{
      overflow: 'auto'
  }}>
      <MainInfo/>
    </div>)
})

export default IndexPage
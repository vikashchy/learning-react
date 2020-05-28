import React from 'react'

import MyFooter from './MyFooter'
import MyHeader from './MyHeader'
import MainContent from './MainContent'

function App(){
    return (
           <div>
               <MyHeader></MyHeader>
               <MainContent/>
               <MyFooter></MyFooter>
           </div> 
    )
}

export default App
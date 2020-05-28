import React from 'react'

// function MyFooter(){
    // return <footer><h3> This is my footer </h3></footer>
// }
const firstName='Vikash'

// This is consise way to define a function. An arrow function defines the return statement of the function
const MyFooter=() => <footer><h3> This is my footer {timeOfDay() + firstName} </h3></footer>
//  in the above statement firstName will be interpreted as a variable

function timeOfDay(){
    const date=new Date()
    const hours=date.getHours()
    let timeOfDay
    if (hours < 12){
        timeOfDay = 'morning'
    }
    else if (hours > 12 && hours < 17){
        timeOfDay = 'afternoon'
    }
    else{
        timeOfDay='night'
    }
    return timeOfDay
}

export default MyFooter
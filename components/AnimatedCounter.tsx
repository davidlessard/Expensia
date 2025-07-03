import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }:{ amount: number }) => {
  return (
    <div className="w-full">
        <CountUp 
            duration={1} 
            separator=" " 
            decimals={2} 
            decimal="," 
            suffix =" $" 
            end={amount}  
        />
    </div>
  )
}

export default AnimatedCounter
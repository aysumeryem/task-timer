import React from 'react'
import { useState } from 'react';
const Hour = () => {
    const [totalHour,setTotalHour]=useState('');
    const [hour,setHour]=useState();
    const [minute,setMinute]=useState();
    const [second,setSecond]=useState();

        setInterval(() => {
            let now = new Date();
            let current_hours = now.getHours();
            let current_minutes = now.getMinutes();
            let current_seconds = now.getSeconds();
            setHour(current_hours);
            setMinute(current_minutes);
            setSecond(current_seconds);
          },1000)
return(
    <div className='hour'>
      <h1>
        {hour} {minute} {second}
      </h1>
</div>
  )
}

export default Hour

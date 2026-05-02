import React, {useState, useEffect} from 'react';

function MyComponent() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

      const intervalId = setInterval(() => {
          setTime(new Date())
      }, 1000);

      
      
    
    return () => clearInterval(intervalId)
    
  }, []);

  function formatTimes() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)} ${meridiem}`
  }



  function padTime(number) {
    return number >= 10 ? number : ("0" + number)
  }

  return(
          <>
            <h1>Hollow Knight Clock</h1>
            
            <div className='clock-container'>
              <div className='my-img'>
                <img  src="./assets/hollow-knight-silksong.gif" alt="" />
              </div>
              <div className='clock'>
                <span>{formatTimes()}</span>
              </div>
            </div>
          </> 
          );
}

export default MyComponent
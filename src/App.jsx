import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const[count, setCount] = useState(0)

  const incrementer = () => {
    setCount ( (count) => count + 1)
  }

  const decrementer = () => {
    if (count > 0){
      setCount( (count) => count - 1)
    } else {
      setTimeout(() => {
        setCount(1)
        console.log('count', count)
      }, 1000)
    }
    
  }

  return (
    <>
      <div className='w-100'>
        <div className='p-3 mt-5 mx-auto w-25 shadow'>
          {count <=0 && <div className="alert alert danger">attention</div>}
          
          <p>{count}</p>
          <div className=''>
            <button className='btn btn-danger w-50'onClick={decrementer}> decrementer </button>
            <button className='btn btn-danger w-50'onClick={incrementer}> incrementer </button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App

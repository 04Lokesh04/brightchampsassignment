import './App.css';
import {useState} from 'react'
import Introscreen1 from './components/Introscreen1'
import Introscreen2 from './components/Introscreen2'
import Instructions from './components/Instructions'
import Activity from './components/Activity'
import Result from './components/Result'

const App=()=>{
  const [currentscreen, setcurrentscreen]=useState('intro1')
  const [bananacount, setbananacount]=useState(0)

  const handleintro1=()=>{
    setcurrentscreen('intro2')
  }

  const handleintro2=()=>{
    setcurrentscreen('instruction')
  }

  const handleinstruction=()=>{
    setcurrentscreen('Activity')
  }

  const handlegameover=(bananas)=>{
    setbananacount(bananas)
    setcurrentscreen('Final')
  }

  const handleplayagain=()=>{
    setbananacount(0)
    setcurrentscreen('intro1')
  }
  return (
    <div className='app'>
      {currentscreen==='intro1' && <Introscreen1 handleintro1={handleintro1} />}
      {currentscreen==='intro2' && <Introscreen2 handleintro2={handleintro2} />}
      {currentscreen==='instruction' && <Instructions handleinstruction={handleinstruction} />}
      {currentscreen==='Activity' && <Activity handlegameover={handlegameover} />}
      {currentscreen==='Final' && <Result bananacount={bananacount} handleplayagain={handleplayagain} />}
    </div>
  )
}

export default App;

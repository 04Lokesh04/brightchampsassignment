import './index.css'

const Result=(props)=>{
    const {bananacount,handleplayagain}=props
    return (
        <div className='resultcard'>
            <img className='image3' src="C:\Users\Admin\Downloads\Group 156.png" alt='back'/>
            <button className='scorebutton' onClick={handleplayagain}>
               <img className='monkeyimage' src="C:\Users\Admin\Downloads\Group 665.png" alt='score'/>
              {bananacount}
            </button>
        </div>
    )
}

export default Result
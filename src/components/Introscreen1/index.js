import './index.css'

const Introscreen1=(props)=>{
    const {handleintro1}=props
    return (
       <div className='introcard'>
            <div className='message'>
                <p className='para1'>Welcome Kiddo!</p>
            </div>
            <img className='image1' src="C:\Users\Admin\Downloads\Group 153.png"  alt='monkey'/>
            <button className='buttonnext' onClick={handleintro1}>
                <img className='image2' src="C:\Users\Admin\Downloads\Group 123.png" alt='button'/>
            </button>
       </div> 
    )
}

export default Introscreen1
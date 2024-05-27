import './index.css'

const Introscreen2=(props)=>{
    const {handleintro2}=props
    return (
       <div className='introcard'>
                <img className='image3' src="C:\Users\Admin\Downloads\Group 156.png" alt='back'/>

            <div className='message'>
                <p className='para1'>Hi I am Mizo and i love bananas ,
                can you help me to get some?</p>
            </div>
            <img className='image1' src="C:\Users\Admin\Downloads\Group 153.png"  alt='monkey'/>
            <button className='buttonnext' onClick={handleintro2}>
                <img className='image2' src="C:\Users\Admin\Downloads\Group 123.png" alt='button'/>
            </button>
       </div> 
    )
}

export default Introscreen2
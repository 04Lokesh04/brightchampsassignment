import './index.css'

const Introscreen2=(props)=>{
    const {handleinstruction}=props
    return (
       <div className='introcard'>
            <div className='header'>
                <img className='image3' src="C:\Users\Admin\Downloads\Group 156.png" alt='back'/>
                <img className='image4' src="C:\Users\Admin\Downloads\Group 148.png" alt='bar' />
            </div>
            <div className='instructs'>
                <div className='instructcard'>
                    <img className='instructimage' src="C:\Users\Admin\Downloads\card.png" alt='cardimage'/>
                    <p className='instructpara1'>1.Select a pink card.</p>
                    <p className='instrctpara2'>It has images.</p>
                </div>
                <div className='instructcard'>
                <img className='instructimage' src="C:\Users\Admin\Downloads\card (1).png" alt='cardimage'/>
                    <p className='instructpara1'>2.Select a blue card</p>
                    <p className='instrctpara2'>It has alphabet</p>
                </div>
                <div className='instructcard'>
                <img className='instructimage' src="C:\Users\Admin\Downloads\Group 157.png" alt='cardimage'/>
                    <p className='instrctpara2'>If its same</p>
                    <p className='instructpara1'>its a match!</p>
                    <p className='instrctpara2'>otherwisae retry</p>
                </div>
            </div>
            <button className='buttonnext' onClick={handleinstruction}>
                <img className='image2' src="C:\Users\Admin\Downloads\Group 123 (1).png" alt='button'/>
            </button>
       </div> 
    )
}

export default Introscreen2
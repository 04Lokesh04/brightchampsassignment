import './index.css'

const BlueCard=(props)=>{
    const {index, card, isflipped,handlecard }=props
    return (
        <button className = 'cardcontent2' onClick={()=>handlecard(index)}>
            {isflipped? (<img className='contentcard' src={card.content} alt='' />):(<img className='blankcard' src="C:\Users\Admin\Downloads\card (3).png"/>)}
        </button>
    )
}

export default BlueCard
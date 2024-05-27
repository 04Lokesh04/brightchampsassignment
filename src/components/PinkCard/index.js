import './index.css'

const PinkCard=(props)=>{
    const {index, card, isflipped,handlecard }=props
    return (
        <button className = 'cardcontent' onClick={()=>handlecard(index)}>
            {isflipped? (<img className='contentcard' src={card.content} alt=""/>):(<img className='blankcard' src="C:\Users\Admin\Downloads\card (2).png"/>)}
        </button>
    )
}

export default PinkCard
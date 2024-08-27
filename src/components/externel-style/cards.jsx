import './cards.css'

import style from './cards.module.css'


export const Card=()=>{
    return(
        <div className={style.card} >
            <h3 className='cards'>hello world</h3>

            <h4>hello jsx world</h4>
        </div>
    )
}
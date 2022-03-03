import React from 'react'
import './Page.css'
import goretro from "../image/goretro.svg"
import gonext from "../image/gonext.svg"
function Page() {
    const chosePages = document.querySelectorAll('.PageItem')
    
    chosePages.forEach( (item:any) => {
        item.onclick = (e:any) =>{
            const error =  document.querySelector<HTMLElement>('.Page--active')!
            error.classList.remove('Page--active')
                
                e.target.classList.add('Page--active')
        }
    })
    return (
        <div className="Page">
                <div className="ChosePage__preArrow">
                    <img src={goretro} alt="goretro" />
                </div>
                <div className="PageItem Page--active">1</div>
                <div className="PageItem">2</div>
                <div className="PageItem">3</div>
                <div className="PageItem">4</div>
                <div className="PageItem">5</div>
                <div className="PageItem--more">...</div>
                <div className="PageItem">10</div>
                <div className="PageItem__preArrow">
                    <img src={gonext} alt="" />
                </div> 
        </div>
    )
}
export default Page;
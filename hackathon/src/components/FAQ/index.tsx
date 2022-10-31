import React from 'react'
import './FAQ.scss'
import loadMyScript from './script'

const FAQ: React.FC = () => {
    React.useEffect(()=>{
        loadMyScript()
    },[])
    return (
        <div className="main_faq">
            <div className="faq_title">FAQ</div>
            <div className="block__item">
                <div className="block__title _anim-items"> What Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa!</div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">What Lorem ipsum Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">What Lorem ipsum Lorem ipsum Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam. 
                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items"> What Lorem ipsum lorem?</div>
                <div className="block__text">
                    Lorem</div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">Lorem ipsum Lorem ipsum Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">Lorem ipsum Lorem ipsum?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.

                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">Lorem ipsumy.</div>
                <div className="block__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.

                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">Will the room generate passive income?</div>
                <div className="block__text">
                    Yes, even ordinary rooms will generate passive income after the release of our token. 
                    We are also already working on a room upgrade system that will allow room owners to earn even more income.

                </div>
            </div>
            <div className="block__item">
                <div className="block__title _anim-items">What is a lounge zone?</div>
                <div className="block__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias asperiores nihil 
                    incidunt vitae tenetur labore culpa! Totam vitae beatae eum, nam eaque fugit maiores reiciendis nisi consequuntur deleniti esse quisquam.
                </div>
            </div>
        </div>
    )
}

export default FAQ

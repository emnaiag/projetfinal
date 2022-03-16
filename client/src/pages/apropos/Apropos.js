import React from 'react'
import "./apropos.css"

const Apropos = () => {
  return (
    <div className='about'>
        <img src='mains-famille.jpg' alt='mainsfamille' width={800} height={600}/>
        <div className='text-apropos'>
        <span>Vivre en famille : le bonheur, le bazar… et tout le reste !</span>
        <p> La famille est un thème qui inspire de nombreux blogueurs. Vous appréciez sûrement de suivre les conseils de ses parents, toujours heureux de partager leur bonheur familial et de vous faire part de leurs découvertes et de leurs coups de cœur. Ici on aborde la famille de manière décomplexée, que le sujet soit grave, pratique ou carrément futile. Notre objectif : <b>une vie de famille fun, créative, et surtout sereine !</b></p>
        </div>
    </div>
  )
}

export default Apropos
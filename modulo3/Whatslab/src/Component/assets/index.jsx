import React from 'react'
import ImgFundo from './Imagens/fundoWhats.png'
import styled from 'styled-components'

const Img = styled.img`
width:100% ;
height: 90vh;
border-radius: 40px;
`

export const Imagemback = () => {
  return (
    <div>
        <Img src={ImgFundo} alt="logo" />
    </div>
  )
}


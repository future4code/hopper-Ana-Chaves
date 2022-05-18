import React from 'react'
import styled from 'styled-components'

const MessageCard = styled.p`

 
  
`
const MessageCard2 = styled.p`
 
  
`
const MessageCard3 = styled.p`
 
  
`
const CardMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  bottom: 80vh;
 

`


export const Card = (props) => {
  return (
    <CardMessage >
       
        <MessageCard> {props.name} :</MessageCard> 
        <MessageCard2> {props.menssagem}</MessageCard2>
        <MessageCard3> {props.time} </MessageCard3>
     
    </CardMessage>
  )
}


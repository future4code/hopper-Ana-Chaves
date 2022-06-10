import React from 'react'
import styles from 'styled-components'
import { Container } from './styles'


export default function Card(props) {
  return (
    <Container>
      <p>{props.titulo}</p>
    </Container>
  )
}

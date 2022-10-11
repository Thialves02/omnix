import React from 'react'
import FormConponent from '../../components/Form/Form'
import { HomeContainer } from './style'

export default function Home() {
    return (
        <HomeContainer>
            <h2>Consulte as opções disponíveis no seu endereço</h2>
            <FormConponent />
        </HomeContainer>
    )
}

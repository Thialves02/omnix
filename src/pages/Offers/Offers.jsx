import React, { useContext, useEffect, useState } from 'react'
import { Api } from '../../api/Api'
import Offer from '../../components/Offer/Offer'
import offers from '../../api/offers.json'
import { OffersContainer, Offerss } from './style'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/CtxApp'

export default function Offers() {
    const { endereco } = useContext(Context)
    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/');
    }

    return (
        <>
            <OffersContainer>
                <span>Ofertas disponíveis no endereço : {endereco}</span>
                <Offers>
                    {
                        offers?.map((offer, index) =>
                            <Offer
                                key={index}
                                title={offer.title}
                                image={offer.image}
                                text={offer.text}
                            />
                        )
                    }
                </Offers>
            </OffersContainer>
            <Button
                label="Ops, errei meu CEP!"
                name="voltaHome"
                onClick={redirectHome}
            />
        </>
    )
}

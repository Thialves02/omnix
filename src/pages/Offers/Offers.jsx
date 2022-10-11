import React, { useContext, useEffect, useState } from 'react'
import Offer from '../../components/Offer/Offer'
import offers from '../../api/offers.json'
import { AllOffers, OffersContainer } from './style'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/CtxApp'

export default function OffersComponent() {
    const { endereco } = useContext(Context)
    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/');
    }

    return (
        <>
            <OffersContainer>
                <span>Ofertas disponíveis no endereço : {endereco}</span>
                <AllOffers>
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
                </AllOffers>
            </OffersContainer>
            <Button
                label="Ops, errei meu CEP!"
                name="voltaHome"
                onClick={redirectHome}
                className="fixed"
            />
        </>
    )
}

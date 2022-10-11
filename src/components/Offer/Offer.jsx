import React from 'react'
import PropTypes from 'prop-types'
import { OfferContainer } from './style'

export default function Offer({ title, image, text }) {
    return (
        <OfferContainer>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <span>{text}</span>
        </OfferContainer>
    )
}


Offer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

Offer.defaultProps = {
    title: "Empresarial",
    text: 'Ideal para empresas',
}
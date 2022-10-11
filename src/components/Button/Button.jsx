import React from 'react'
import { ButtonContainer } from './style'
import PropTypes from 'prop-types'

export default function Button({ label, ...rest }) {
    return (
        <ButtonContainer {...rest}>{label}</ButtonContainer>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
}

Button.defaultProps = {
    label: 'Omnix',
}
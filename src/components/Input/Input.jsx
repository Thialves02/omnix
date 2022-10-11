import React from 'react'
import { InputContainer } from './style'
import { Field } from 'formik'
import PropTypes from 'prop-types'

export default function Input({ name, label, mask, ...rest }) {
    return (
        <InputContainer >
            <Field name={name} {...rest} />
            <label htmlFor={name}>{label}</label>
        </InputContainer>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mask: PropTypes.string,
}

Input.defaultProps = {
    label: 'Omnix',
    name: 'omnix',
}

import { Form, Formik } from 'formik'
import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { FormContainer } from './style'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/CtxApp'

export default function FormConponent() {
    const { setEndereco } = useContext(Context)
    const [estadoBtn, setEstadoBtn] = useState(true)
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const navigate = useNavigate();

    //Verifica se o Cep está no padrão correto e se o nome esta preenchido
    //Habilita ou desabilita o botão
    const habilitaBotao = () => {
        cep.length === 8 && nome !== '' ? setEstadoBtn(false) : setEstadoBtn(true)
    }

    //Função que faz requisição para Api e verifica se o CEP é valido
    const enviaDados = () => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                if (data.logradouro) {
                    setEndereco(data.bairro)
                    navigate('/offers');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Nenhum CEP encontrado com o valor digitado!',
                    })
                }
            })
    }

    //Função para limitar a quantidade máxima de caracteres no input de type number
    const maxLen = (input) => {
        if (input.target.value.length > 8) {
            input.target.value = input.target.value.slice(0, 8);
        }
    }

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    nome: '',
                    cep: ''
                }}
                onSubmit={(dados, { resetForm }) => {
                    enviaDados(dados)
                    resetForm({ dados: '' }, setEstadoBtn(true))
                }}
            >
                <Form>
                    <Input
                        label={'Nome'}
                        name={'nome'}
                        onBlur={habilitaBotao}
                        onKeyUp={e => setNome(e.target.value)}
                    />
                    <Input
                        label={'CEP'}
                        name={'cep'}
                        maxLength='8'
                        onBlur={habilitaBotao}
                        onKeyUp={e => setCep(e.target.value)}
                        onInput={maxLen}
                        type='number'
                    />
                    <Button
                        label='Consultar'
                        name='consultar'
                        disabled={estadoBtn}
                        type='submit'
                    />
                </Form>
            </Formik>
        </FormContainer>
    )
}

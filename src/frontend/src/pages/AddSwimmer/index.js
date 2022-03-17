import React, { useEffect } from 'react'
import { SwimmerBackgroundImage } from 'resources/css/common'
import { Body, Button, CancelButton, Content, Form, FormView } from './style'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSwimmers } from 'hooks';
import toast from 'react-hot-toast';
const FIELDS = {
    firstName: "firstName",
    lastName: "lastName",
}
const schema = yup.object({
    [FIELDS.firstName]: yup.string().required("Nome é obrigatório"),
    [FIELDS.lastName]: yup.string().required("Sobrenome é obrigatório"),
}).required();

function AddSwimmerPage({
    history
}) {
    const {
        addSwimmer
    } = useSwimmers();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async ({
        firstName,
        lastName
    }) => {
        await addSwimmer({
            firstName,
            lastName
        });
        toast.success("Nadador adicionado com sucesso!")
        history.goBack()
    }
    return (
        <Body>
            <Content>
                <FormView
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h4>Adicionar nadador</h4>
                    <Form  >
                        <p>Nome</p>
                        <input
                            {...register(FIELDS.firstName, { required: true })}
                            placeholder='Fulano' />
                        {errors.firstName && <label>{errors.firstName.message}</label>}
                        <p>Sobrenome</p>
                        <input
                            {...register(FIELDS.lastName, { required: true })}
                            placeholder='De tal' />
                        {errors.lastName && <label>{errors.lastName.message}</label>}
                        <div>
                            <Button>Cadastrar</Button>
                            <CancelButton
                                href='#/nadadores'
                            >
                                Cancelar
                            </CancelButton>
                        </div>
                    </Form>
                </FormView>
            </Content>
            <SwimmerBackgroundImage />
        </Body>
    )
}

export default AddSwimmerPage
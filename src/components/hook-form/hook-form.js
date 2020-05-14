import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'

function HookFormComponent(props) {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }
    const info =
        Object.entries(props.inputs).map((answer) =>
            <Fragment>
                <label>{answer[0]}</label>
                <input
                    className="form-control mb-2"
                    name={answer[0]}
                    defaultValue={answer[1]}
                    ref={register({
                        required: {
                            value: true,
                            message: `${answer[0]} es requerido`
                        }
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors[answer[0]] && errors[answer[0]].message}
                </span>
            </Fragment>
        )
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {info}
            <button type="submit" className="btn btn-primary">
                Enviar
        </button>
        </form>
    )
}

export default HookFormComponent
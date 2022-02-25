import React from 'react'
import swimmerBackground from 'resources/img/nadador.svg'
function AddSwimmerPage({
    navigation
}) {

    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 40,
            }}
        >

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    padding: 15,
                    borderRadius: 14,
                    flexDirection: "column",
                    backgroundColor: "#0B4C55",
                }}>


                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 15,
                        flexDirection: "column"
                    }}>

                    <h4>Adicionar nadador</h4>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: 1,
                    }}>
                        <p>Nome</p>
                        <input placeholder='Fulano' />
                        <p>Sobrenome</p>
                        <input placeholder='De tal' />
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <button>Cadastrar</button>
                            <a href='#/nadadores'>Cancelar</a>
                        </div>
                    </form>
                </div>

            </div>
            <div
                style={{
                    position: "absolute",
                    left: "10.13%",
                    right: "10.4%",
                    top: "81.41%",
                    bottom: "5.4%",
                    backgroundImage: `url(${swimmerBackground})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
            />
        </div>
    )
}

export default AddSwimmerPage
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

                    <h4 style={{
                        color: "white",
                        fontSize: 25,
                        margin: 0,
                    }}>Adicionar nadador</h4>
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: 1,
                        width: "100%"
                    }}>
                        <p style={{
                            marginBottom: 5,
                            color: "#fff"
                        }}>Nome</p>
                        <input style={{
                            padding: 10,
                            borderRadius: 12,
                            borderColor: "transparent",
                        }} placeholder='Fulano' />
                        <p style={{
                            marginBottom: 5,
                            color: "#fff"
                        }}>Sobrenome</p>
                        <input style={{
                            padding: 10,
                            borderRadius: 12,
                            borderColor: "transparent",
                        }} placeholder='De tal' />
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: 10
                            }}>
                            <button style={{
                                padding: 10,
                                display: "flex",
                                flex: 1,
                                width: "100%",
                                justifyContent: "center",
                                borderRadius: 12,
                                borderColor: "transparent",
                                color: "white",
                                background: "#50BBCA",
                                margin: "10px 0",
                                fontSize: 14,
                            }}>Cadastrar</button>
                            <a
                                style={{
                                    color: "#8CE6F5",
                                    fontSize: 14,
                                }}
                                href='#/nadadores'>Cancelar</a>
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
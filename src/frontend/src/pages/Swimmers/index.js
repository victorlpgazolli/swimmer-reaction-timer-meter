import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSwimmers } from 'hooks';
import swimmerBackground from 'resources/img/nadador.svg'
function SwimmersPage({
    navigation
}) {
    const dispatch = useDispatch();
    const {
        swimmers,
        loadSwimmers
    } = useSwimmers();

    useEffect(() => {
        loadSwimmers()
    }, [])
    useEffect(() => {
        console.log(swimmers);
    }, [swimmers])
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
                    flexDirection: "column",
                    backgroundColor: "#fff",
                }}>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 15,
                        flexDirection: "row",
                        backgroundColor: "#fff",
                    }}>
                    <a
                        style={{
                            padding: "10px",
                            background: "#50BBCA",
                            borderRadius: "30px",
                            color: "#fff",
                            textDecoration: "none",
                            boxShadow: "1px 1px 2px #16363a",
                            fontSize: "14px",
                        }}
                        href='#/nadadores/adicionar'
                    > Adicionar </a>
                    <input
                        style={{
                            padding: "10px",
                            margin: "0 10px",
                            borderRadius: "23px",
                            borderWidth: "2px",
                            borderColor: "#50BBCA",
                        }}
                        placeholder='Procurar nadador' />
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        padding: 15,
                        flexDirection: "column",
                        backgroundColor: "#fff",
                    }}>
                    <div style={{
                        padding: 15,
                        backgroundColor: "#8CE6F5",
                        margin: "10px 0px",
                        flex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "12px"
                    }}>
                        <div style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            nome
                        </div>
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            toggle
                        </div>
                    </div>
                    <div style={{
                        padding: 15,
                        backgroundColor: "#0B4C55",
                        margin: "10px 0px",
                        flex: 1,
                        display: "flex",
                        borderRadius: "12px",
                        flexDirection: "column"
                    }}>
                        <div style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#fff"
                            }}>
                                nome
                            </div>
                            <div style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                toggle
                            </div>
                        </div>
                        <div style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                paddingBottom: 0
                            }}>
                                <div style={{
                                    flexDirection: "row",
                                    display: "flex",
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: "#8CE6F5",
                                    borderRadius: 15
                                }}>
                                    <div style={{
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        display: "flex",
                                        flex: 1,
                                        padding: 8,
                                    }}>
                                        Salto 1
                                    </div>
                                    <div style={{
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        display: "flex",
                                        flex: 1,
                                        padding: 8,
                                    }}>
                                        00:030
                                    </div>
                                </div>
                                <div style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex"
                                }}>
                                    Ver mais
                                </div>
                            </div>
                        </div>
                    </div>

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

export default SwimmersPage
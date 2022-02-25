import React from 'react'
import swimmerBackground from 'resources/img/nadador.svg'
function SwimmersPage({
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
                        href='#/nadadores/adicionar'
                    > Adicionar </a>
                    <input placeholder='Procurar nadador' />
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
                        backgroundColor: "#00000020",
                        margin: "10px 0px",
                        flex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <div style={{
                            padding: "4px 8px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            foto
                        </div>
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
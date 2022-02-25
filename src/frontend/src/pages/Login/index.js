import React from 'react'
import background_login from 'resources/img/background_login.svg';

function LoginPage({
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
                // backgroundColor: "#fff0f0",
                backgroundImage: `url(${background_login})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div

                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    borderRadius: 14,
                    backgroundColor: "#fff",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 15,
                        flexDirection: "column"
                    }}>

                    <p>Ja tem uma conta?</p>
                    <a href='#/nadadores'>
                        Login com google
                    </a>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
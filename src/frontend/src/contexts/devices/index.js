import { WEBSOCKET_URL } from "config/environment";
import { createContext, useEffect, useState } from "react";
import { websocket } from "services/websocket";
import socket from "socket.io-client";

const defaultValues = {
    devicesConnected: []
}
export const DevicesContext = createContext(defaultValues)

export const DevicesProvider = ({ children }) => {
    const [devicesProps, setDevicesProps] = useState(defaultValues);
    useEffect(() => {
        websocket.connect()
    }, [])
    // const {
    //     readyState
    // } = useWebSocket(WEBSOCKET_URL, {
    //     onOpen: console.log,
    //     onError: console.error,
    //     onClose: console.log,
    // });
    // console.log(readyState);
    return (
        <DevicesContext.Provider value={{
            ...devicesProps,
        }}>
            {children}
        </DevicesContext.Provider>
    )
}

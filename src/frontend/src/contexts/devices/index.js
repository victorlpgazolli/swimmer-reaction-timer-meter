import { WEBSOCKET_URL } from "config/environment";
import { createContext, useState } from "react";
import useWebSocket from "react-use-websocket";

const defaultValues = {
    devicesConnected: []
}
export const DevicesContext = createContext(defaultValues)

export const DevicesProvider = ({ children }) => {
    const [devicesProps, setDevicesProps] = useState(defaultValues);
    const {
        readyState
    } = useWebSocket(WEBSOCKET_URL, {
        onOpen: console.log,
        onError: console.error,
        onClose: console.log,
    });
    console.log(readyState);
    return (
        <DevicesContext.Provider value={{
            ...devicesProps,
        }}>
            {children}
        </DevicesContext.Provider>
    )
}

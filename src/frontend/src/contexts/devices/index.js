import { WEBSOCKET_URL } from "config/environment";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { websocket } from "services/websocket";
import socket from "socket.io-client";

const defaultValues = {
    devicesConnected: new Set()
}
export const DevicesContext = createContext(defaultValues)

export const DevicesProvider = ({ children }) => {
    const [devicesProps, setDevicesProps] = useState(defaultValues);
    const socket = useRef(null)
    useEffect(() => {
        socket.current = websocket.connect();
        socket.current.emit("turnClientToSubscriber");

        return () => {
            socket.current.disconnect();
        }
    }, [])
    const updateDevicesConnected = ({ devices }) => {
        const hasDevices = Array.isArray(devices);
        if (!hasDevices) return;
        setDevicesProps(oldValues => ({
            ...oldValues,
            devicesConnected: new Set(devices)
        }))
    }

    useEffect(() => {
        const client = socket.current;

        client.on("devicesLength", updateDevicesConnected);
    }, [])

    return (
        <DevicesContext.Provider value={{
            ...devicesProps,
        }}>
            {children}
        </DevicesContext.Provider>
    )
}

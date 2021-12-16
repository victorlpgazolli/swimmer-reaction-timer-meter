import { useContext } from "react";
import { DevicesContext } from "contexts";

export const useConnectedDevices = () => {
    const context = useContext(DevicesContext);
    const hasDevicesConnected = Array.isArray(context?.devicesConnected) && context.devicesConnected.length > 0;

    if (!hasDevicesConnected) return []

    return context.devicesConnected
}
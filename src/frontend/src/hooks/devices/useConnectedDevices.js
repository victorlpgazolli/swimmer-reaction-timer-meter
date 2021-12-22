import { useContext } from "react";
import { DevicesContext } from "contexts";

export const useConnectedDevices = () => {
    const context = useContext(DevicesContext);

    const devicesConnected = Array.from(context?.devicesConnected || [])
    const hasDevicesConnected = Array.isArray(devicesConnected) && devicesConnected.length > 0;

    if (!hasDevicesConnected) return []

    return devicesConnected
}
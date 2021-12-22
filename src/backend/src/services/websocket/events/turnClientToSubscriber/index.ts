import { ROOMS_NAMES } from "..";

export default ({
    client,
}) => {
    client.join(ROOMS_NAMES.devices_listeners)
}
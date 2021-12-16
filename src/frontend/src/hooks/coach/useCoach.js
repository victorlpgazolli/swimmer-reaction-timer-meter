import { useContext } from "react";
import { CoachContext } from "contexts";

export const useCoach = () => {
    const context = useContext(CoachContext);

    return context
}
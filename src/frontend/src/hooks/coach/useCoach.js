import { useSelector } from "react-redux";
import { coachSelector } from "store/features/coach/selectors";

export const useCoach = () => {
    const coach = useSelector(coachSelector)

    return coach
}
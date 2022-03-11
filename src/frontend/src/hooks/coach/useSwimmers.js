import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSwimmer, fetchSwimmers } from "store/features/coach/actions";
import { coachSelector, swimmersSelector } from "store/features/coach/selectors";

export const useSwimmers = () => {
    const coach = useSelector(coachSelector);
    const swimmers = useSelector(swimmersSelector);
    const dispatch = useDispatch();

    const addSwimmer = useCallback((...swimmer) => {
        return dispatch(createSwimmer({
            ...swimmer,
            coachId: coach.id
        }))
    }, [coach]);

    const loadSwimmers = useCallback(() => {
        return dispatch(fetchSwimmers({
            coachId: coach.id
        }))
    }, [coach]);

    return {
        swimmers,
        loadSwimmers,
        addSwimmer
    }
}
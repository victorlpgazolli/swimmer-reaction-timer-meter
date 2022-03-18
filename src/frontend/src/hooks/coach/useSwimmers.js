import { useMemo } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSwimmer, fetchSwimmers, setSwimmerAsCurrent, updateSwimmer } from "store/features/coach/actions";
import { coachSelector, swimmersSelector } from "store/features/coach/selectors";

export const useSwimmers = () => {
    const coach = useSelector(coachSelector);
    const swimmers = useSelector(swimmersSelector);
    const dispatch = useDispatch();

    const currentSwimmerIndex = useMemo(() => {
        return swimmers.findIndex(({ isCurrent }) => !!isCurrent)
    }, [swimmers])

    const addSwimmer = useCallback(({
        firstName,
        lastName
    }) => {
        return dispatch(createSwimmer({
            name: [firstName, lastName].join(" "),
            coachId: coach.id
        }))
    }, [coach]);

    const loadSwimmers = useCallback(() => {
        return dispatch(fetchSwimmers({
            coachId: coach.id
        }))
    }, [coach]);

    const startTrainingForSwimmer = useCallback(({ swimmerId }) => {
        return dispatch(setSwimmerAsCurrent({
            swimmerId
        }))
    }, []);
    const stopTrainingForSwimmer = useCallback(({ swimmerId }) => {
        return dispatch(updateSwimmer({
            swimmerId,
            isCurrent: false
        }))
    }, []);

    return {
        swimmers,
        loadSwimmers,
        addSwimmer,
        startTrainingForSwimmer,
        stopTrainingForSwimmer,
        currentSwimmerIndex,
    }
}
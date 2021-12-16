import { createContext, useState, useCallback } from "react";
import { createCoach as createCoachRemote } from "utils";


const defaultValues = {
    name: null,
    email: null,
}
export const CoachContext = createContext(defaultValues)

export const CoachProvider = ({ children }) => {
    const [coachProps, setCoachProps] = useState(defaultValues);

    const createCoach = useCallback(({ email, name }) => {

        setCoachProps({ email, name });

        return createCoachRemote({ email, name }).catch(e => { setCoachProps(defaultValues); return e })

    }, [setCoachProps])

    return (
        <CoachContext.Provider value={{
            ...coachProps,
            createCoach
        }}>
            {children}
        </CoachContext.Provider>
    )
}

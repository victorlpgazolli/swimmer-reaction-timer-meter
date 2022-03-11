import styled from 'styled-components'

export const Body = styled.div(({ props }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
}))

export const Content = styled.div(({ props }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 15,
    borderRadius: 14,
    flexDirection: "column",
    backgroundColor: "#0B4C55",
}))

export const FormView = styled.div(({ props }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "column",
    "& > h4": {
        color: "white",
        fontSize: 25,
        margin: 0,
    }
}))

export const Form = styled.form(({ props }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    "& > p": {
        marginBottom: 5,
        color: "#fff"
    },
    "& > label": {
        marginBottom: 5,
        color: "#fb4848",
        fontWeight: "bold"
    },
    "& > input": {
        padding: 10,
        borderRadius: 12,
        borderColor: "transparent",
    },
    "& > div": {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10
    }
}))

export const Button = styled.button(({ props }) => ({
    padding: 10,
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    borderRadius: 12,
    borderColor: "transparent",
    color: "white",
    background: "#50BBCA",
    margin: "10px 0",
    fontSize: 14,
}))
export const CancelButton = styled.a(({ props }) => ({
    color: "#8CE6F5",
    fontSize: 14,
}))
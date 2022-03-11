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
    flexDirection: "column",
    backgroundColor: "#fff",
}))

export const Header = styled.div(({ props }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
}))

export const AddButton = styled.a(({ props }) => ({
    padding: "10px",
    background: "#50BBCA",
    borderRadius: "30px",
    color: "#fff",
    textDecoration: "none",
    boxShadow: "1px 1px 2px #16363a",
    fontSize: "14px",
}))

export const SearchInput = styled.input(({ props }) => ({
    padding: "10px",
    margin: "0 10px",
    borderRadius: "23px",
    borderWidth: "2px",
    borderColor: "#50BBCA",
}))

export const SwimmerContent = styled.div(({ props }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    flexDirection: "column",
    backgroundColor: "#fff",
}))

export const SwimmerCollapsed = styled.div(({ props }) => ({
    padding: 15,
    backgroundColor: "#8CE6F5",
    margin: "10px 0px",
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "12px"
}))

export const SwimmerName = styled.div(({ props }) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
}))

export const SwimmerToggle = styled.div(({ props }) => ({
    justifyContent: "center",
    alignItems: "center",
}))
export const SwimmerOpen = styled.div(({ props }) => ({
    padding: 15,
    backgroundColor: "#0B4C55",
    margin: "10px 0px",
    flex: 1,
    display: "flex",
    borderRadius: "12px",
    flexDirection: "column",
    "& > div": {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}))

export const SwimmerNameOpen = styled(SwimmerName)(({ props }) => ({
    color: "#fff"
}))


export const SwimmerJumpBody = styled.div(({ props }) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    paddingBottom: 0
}))

export const SwimmerJumpContent = styled.div(({ props }) => ({
    flexDirection: "row",
    display: "flex",
    flex: 1,
    borderWidth: 1,
    borderColor: "#8CE6F5",
    borderRadius: 15
}))
export const SwimmerJumpName = styled.div(({ props }) => ({
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flex: 1,
    padding: 8,
}))
export const SwimmerJumpTime = styled(SwimmerJumpName)(({ props }) => ({
    justifyContent: "flex-end",
}))
export const LoadMore = styled.div(({ props }) => ({
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
}))

import styled from 'styled-components'
import swimmerBackground from 'resources/img/nadador.svg';

export const SwimmerBackgroundImage = styled.div(({ props }) => ({
    position: "absolute",
    left: "10.13%",
    right: "10.4%",
    top: "81.41%",
    bottom: "5.4%",
    backgroundImage: `url(${swimmerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
}))
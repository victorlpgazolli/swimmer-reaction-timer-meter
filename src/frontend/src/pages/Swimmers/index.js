import React, { useEffect } from 'react'
import { useSwimmers } from 'hooks';
import { SwimmerBackgroundImage } from 'resources/css/common';
import {
    AddButton,
    Body,
    Content,
    Header,
    LoadMore,
    SearchInput,
    SwimmerCollapsed,
    SwimmerContent,
    SwimmerName,
    SwimmerNameOpen,
    SwimmerOpen,
    SwimmerToggle,
    SwimmerJumpBody,
    SwimmerJumpContent,
    SwimmerJumpName,
    SwimmerJumpTime,
} from './style';
function SwimmersPage({
    navigation
}) {
    const {
        swimmers,
        loadSwimmers
    } = useSwimmers();

    useEffect(() => {
        loadSwimmers()
    }, [])
    useEffect(() => {
        console.log(swimmers);
    }, [swimmers])
    return (
        <Body>

            <Content>

                <Header>
                    <AddButton
                        href='#/nadadores/adicionar'
                    > Adicionar
                    </AddButton>
                    <SearchInput
                        placeholder='Procurar nadador' />
                </Header>
                <SwimmerContent>
                    <SwimmerCollapsed>
                        <SwimmerName>
                            nome
                        </SwimmerName>
                        <SwimmerToggle>
                            toggle
                        </SwimmerToggle>
                    </SwimmerCollapsed>
                    <SwimmerOpen>
                        <div>
                            <SwimmerNameOpen>
                                nome
                            </SwimmerNameOpen>
                            <SwimmerToggle>
                                toggle
                            </SwimmerToggle>
                        </div>
                        <div>
                            <SwimmerJumpBody>
                                <SwimmerJumpContent>
                                    <SwimmerJumpName >
                                        Salto 1
                                    </SwimmerJumpName>
                                    <SwimmerJumpTime>
                                        00:030
                                    </SwimmerJumpTime>
                                </SwimmerJumpContent>
                                <LoadMore>
                                    Ver mais
                                </LoadMore>
                            </SwimmerJumpBody>
                        </div>
                    </SwimmerOpen>

                </SwimmerContent>
            </Content>
            <SwimmerBackgroundImage />
        </Body>
    )
}

export default SwimmersPage
import React, { useEffect } from 'react'
import { useSwimmers } from 'hooks';
import { SwimmerBackgroundImage } from 'resources/css/common';
import {
    AddButton,
    Body,
    Content,
    Header,
    SearchInput,
    SwimmerContent,
    SwimmerName,
} from './style';
import Toggle from './toggle';
import SwimmerTraining from './SwimmerTraining';
import SwimmerCollapsed from './SwimmerCollapsed';
import SwimmersList from './SwimmersList';
function SwimmersPage({
    navigation
}) {
    const {
        swimmers,
        loadSwimmers,
        startTrainingForSwimmer,
        stopTrainingForSwimmer,
        currentSwimmerIndex
    } = useSwimmers();

    useEffect(() => {
        loadSwimmers()
    }, [])
    useEffect(() => {
        console.log(swimmers);
    }, [swimmers]);

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
                    <SwimmersList
                        swimmers={swimmers}
                        onToggle={({ _id: swimmerId, isCurrent }) => {
                            if (isCurrent) return stopTrainingForSwimmer({ swimmerId });
                            startTrainingForSwimmer({ swimmerId })
                        }}
                        currentSwimmerIndex={currentSwimmerIndex}
                    />
                </SwimmerContent>
            </Content>
            <SwimmerBackgroundImage />
        </Body>
    )
}

export default SwimmersPage
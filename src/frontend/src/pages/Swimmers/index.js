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
import toast from 'react-hot-toast';
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
                        onToggle={async ({ _id: swimmerId, isCurrent }) => {
                            try {
                                const actionPerStatus = {
                                    [true]: () => stopTrainingForSwimmer({ swimmerId }),
                                    [false]: () => startTrainingForSwimmer({ swimmerId }),
                                };
                                const action = actionPerStatus[isCurrent];
                                await action();
                                const actionTranslated = isCurrent
                                    ? "pausado"
                                    : "iniciado"
                                toast.success(`O treinamento do nadador foi ${actionTranslated}`);
                            } catch (error) {
                                toast.error(`Ocorreu um erro, tente novamente mais tarde`);
                                console.log(error);
                            }
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
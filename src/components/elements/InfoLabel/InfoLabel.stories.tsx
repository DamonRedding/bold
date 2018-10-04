import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { InfoLabel } from './InfoLabel'

storiesOf('Components', module)
    .add('InfoLabel', () => (
        <>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')}>
                João da Silva
            </InfoLabel>
            <InfoLabel title={text('title', 'Nome')} placeholder={text('placeholder', '-')} />
        </>
    ))

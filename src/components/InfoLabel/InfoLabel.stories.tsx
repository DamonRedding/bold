import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { VFlow } from '../VFlow'

import { InfoLabel } from './InfoLabel'

storiesOf('Components|InfoLabel', module).add('default', () => (
  <VFlow vSpacing={0.5}>
    <InfoLabel title={text('title', 'Name')} placeholder={text('placeholder', '-')}>
      João da Silva
    </InfoLabel>
    <InfoLabel title={text('title', 'Text')} placeholder={text('placeholder', '-')}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quasi ullam eos, fuga earum molestiae cum
      odit, modi exercitationem quis hic quae. Excepturi quia neque expedita explicabo facere corporis dolore?
    </InfoLabel>
    <InfoLabel title={text('title', 'Name')} placeholder={text('placeholder', '-')} />
  </VFlow>
))

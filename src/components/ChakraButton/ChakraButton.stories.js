import React from 'react'
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'Chakra/Button',
  component: Button,
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
}

export const Success = () => (
  <Button onClick={action('Click Handler')} variantColor='green'>
    Success
  </Button>
)
export const Danger = () => (
  <Button {...actions('onClick', 'onMouseOver')} variantColor='red'>
    Danger
  </Button>
)

// const Template = (args) => <Button {...args} />

// export const Success = Template.bind({})
// Success.args = {
//   variantColor: 'green',
//   children: 'Success',
// }

// export const Danger = Template.bind({})
// Danger.args = {
//   variantColor: 'red',
//   children: 'Danger',
// }

export const Log = () => (
  <Button variantColor='blue' onClick={() => console.log('Button Clicked')}>
    Log
  </Button>
)

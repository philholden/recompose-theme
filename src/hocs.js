import { mapProps } from 'recompose'

export const addStyle = style => mapProps(props => ({
  ...props,
  style: [
    style,
    props.style,
  ]
}))

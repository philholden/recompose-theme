import {
  mapProps,
  getContext,
} from 'recompose'

import { PropTypes } from 'react'

export const getTheme = getContext({
  theme: PropTypes.object,
})

export const getButtonGroup = getContext({
  buttonGroup: PropTypes.bool,
})

export const themeStyle = mapThemeToStyle => mapProps(
  props => {
    const { theme, style } = props

    return {
      ...props,
      style: [
        mapThemeToStyle(theme, props),
        style
      ]
    }
  }
)

export const addStyle = style => mapProps(props => ({
  ...props,
  style: [
    style,
    props.style,
  ]
}))

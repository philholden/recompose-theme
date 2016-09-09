import React from 'react'
import {
  compose,
  defaultProps,
  setDisplayName,
  componentFromProp,
  mapProps,
} from 'recompose'

import Radium from 'radium'
import {
  addStyle,
  getTheme,
  themeStyle,
} from './hocs'

const mapThemeToStyle = ({
  color,
  number,
  string
}) => ({
  ...(color.keyColor &&
    {backgroundColor: color.keyColor} || {}
  ),
  color: color.textLight,
  borderRadius: number.buttonRadius,
  fontFamily: string.mainFontFamily,
})

const style = {
  backgroundColor: 'purple',
  borderWidth: 0,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  fontFamily: 'sans-serif',
  fontSize: 18,
  borderRadius: 3,
  padding: 12,
  fontWeight: 100,
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  flex: 1,
  ':hover': {
    backgroundColor: 'pink'
  }
}

const enhance = compose(
  getTheme,
  themeStyle(mapThemeToStyle),
  addStyle(style),
  setDisplayName('Button'),
  defaultProps({element: 'button'}),
  Radium,
)

export default enhance(componentFromProp('element'))

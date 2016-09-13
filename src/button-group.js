import React, { PropTypes } from 'react'
import Radium from 'radium'

import {
  compose,
  setDisplayName,
  withContext,
} from 'recompose'

import {
  getTheme,
  addStyle,
  themeStyle,
} from './hocs'

const mapThemeToStyle = (
  {number},
  {isVertical}
) => ({
  padding: (number.buttonGroupSpace || 6) * 1,
  flexDirection: isVertical ?
    'column' :
    'row',
})

const ButtonGroup = ({children, ...rest}) =>
  <div {...rest}>{children}</div>

const enhance = compose(
  setDisplayName('ButtonGroup'),
  withContext(
    { buttonGroup: PropTypes.bool },
    () => ({ buttonGroup: true })
  ),
  getTheme,
  themeStyle(mapThemeToStyle),
  addStyle({
    padding: 6,
    display: 'flex',
  }),
  Radium
)

export default enhance(ButtonGroup)

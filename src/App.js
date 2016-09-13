import React, { Component } from 'react'
import Button from './button'
import ButtonGroup from './button-group'
import theme from './my-theme'

import {
  compose,
  withState,
  withHandlers,
} from 'recompose'

class App extends Component {

  static childContextTypes = {
    theme: React.PropTypes.object,
  };

  getChildContext() {
    return { theme: this.props.theme }
  }

  render() {
    const {theme, updateTheme} = this.props
    return (
      <div className="App">
        <Button
          element={'a'}
          href="http://google.com"
        >
          Click me
        </Button>
        <div style={{background: 'white'}}>
          <ButtonGroup isVertical>
            <Button>Click me</Button>
            <Button>Click me</Button>
            <Button>Click me</Button>
          </ButtonGroup>
        </div>
        <label>keyColor</label>
        {' '}
        <input
          value={theme.color.keyColor}
          onChange={(e) => {
            updateTheme({
              ...theme,
              color: {
                ...theme.color,
                keyColor: e.target.value
              }
            })
          }}
        /><br/>
        <label>textLight</label>
        {' '}
        <input
          value={theme.color.textLight}
          onChange={(e) => {
            updateTheme({
              ...theme,
              color: {
                ...theme.color,
                textLight: e.target.value
              }
            })
          }}
        /><br/>
        <label>buttonRadius</label>
        {' '}
        <input
          type="number"
          value={theme.number.buttonRadius}
          onChange={(e) => {
            updateTheme({
              ...theme,
              number: {
                ...theme.number,
                buttonRadius: e.target.value
              }
            })
          }}
        /><br/>

        <label>buttonGroupSpace</label>
        {' '}
        <input
          type="number"
          value={theme.number.buttonGroupSpace}
          onChange={(e) => {
            updateTheme({
              ...theme,
              number: {
                ...theme.number,
                buttonGroupSpace: e.target.value
              }
            })
          }}
        /><br/>
        <label>mainFontFamily</label>
        {' '}
        <input
          value={theme.string.mainFontFamily}
          onChange={(e) => {
            updateTheme({
              ...theme,
              string: {
                ...theme.string,
                mainFontFamily: e.target.value
              }
            })
          }}
        />
        <pre>{JSON.stringify(theme, null, 2)}</pre>
      </div>
    );
  }
}

const enhance = compose(
  withState('theme', 'updateTheme', theme),
)

export default enhance(App)

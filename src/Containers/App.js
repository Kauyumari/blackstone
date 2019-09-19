import React, { Component, Fragment } from 'react';
import Cookies from '../../node_modules/js-cookie/src/js.cookie';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './home';
import ThemeButton from '../Components/themeButton';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

class App extends Component {
  state = {  
    theme: false
  }

  componentDidMount() {
    this.setState({
      theme: Cookies.getJSON('profile').theme
    })
  }

  toogleTheme = () => {
    Cookies.set('profile', {theme: !this.state.theme})
    this.setState({
      theme: !this.state.theme
    })
  }

  render() {
    var { theme } = this.state

    const lightTheme = createMuiTheme({
      palette: {
        primary: {
          main: "#765D69",
        },
        secondary: {
          main: "#F1828D",
        },
        background: {
          default: "#FEFAD4"
        }
      },
      typography: {
        fontFamily: `"Segoe UI", "Arial", "Oxygen"`
      },
    }) 
    const darkTheme = createMuiTheme({
      palette: {
        primary: {
          main: "#8FB9A8",
        },
        secondary: {
          main: grey[800],
          contrastText: grey[100]
        },
        text: {
          primary: grey[50],
          secondary: grey[200]
        },
        background: {
          default: grey[900],
          paper: grey[700]
        }
      },
      typography: {
        fontFamily: `"Segoe UI", "Arial", "Oxygen"`
      },
    })

    return ( 
      <Fragment>
        <ThemeProvider theme = {theme ? darkTheme : lightTheme}>
          <CssBaseline />
          <Home />
          <ThemeButton clickHandler={this.toogleTheme} dataHandler={theme} />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;

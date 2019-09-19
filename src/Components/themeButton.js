import React, { Fragment } from 'react';
import { Portal, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const ThemeButton = (props) => {
  const container = React.useRef(null)
  const useStyles = makeStyles(theme => ({
    button: {
      position: "absolute",
      bottom: "10%",
      left: "5%",
      [theme.breakpoints.down('sm')]: {
        bottom: "2%",
        left: "auto",
        right: "2%"
      }
    }
  }))
  const classes = useStyles()
  return (  
    <Fragment>
      <Portal container={container.current}>
        <Fab 
          onClick={props.clickHandler}
          color="primary" 
          className={classes.button} 
          size={isWidthDown('sm', props.width) ? "medium" : "large"}>
          <WbIncandescentOutlinedIcon/>
        </Fab>
      </Portal>
    </Fragment>
  );
}

export default withWidth()(ThemeButton);
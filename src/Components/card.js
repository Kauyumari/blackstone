import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, CardActions, IconButton, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Slide = (props) => {
  const useStyles = makeStyles(theme => ({
    card: {
      width: 550,
      maxHeight: 500,
      margin: "0 auto",
      [theme.breakpoints.down('sm')]: {
        width: "85%",
      }
    },
    media: {
      height: 0,
      paddingTop: "40%",
      [theme.breakpoints.down('sm')]: {
        paddingTop: "90%"
      }
    },
    content: {
      backgroundColor: "primary.main"
    },
    paragraph: {
      maxHeight: "4em",
      overflow:"hidden",
      textOverflow:"ellipsis",
    }
  }))
  const classes = useStyles()

  return (  
    <Fragment>
      <Card className={classes.card} raised onMouseOver={props.beginHover} onMouseOut={props.stopHover}>
        <CardMedia 
          className={classes.media}
          image={props.url}
        />
        <Box bgcolor="secondary.light">
          <CardContent className={classes.content}>
            <Typography
              variant="h5"
              display="block"
              color="textPrimary"
              paragraph
              style={{ fontWeight: 700, }} >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className=""
              >
                <div className={classes.paragraph}>{props.description}</div>                  
            </Typography>            
          </CardContent>
        </Box>
        <Box bgcolor="secondary.dark">
          <CardActions disableSpacing>
            <IconButton 
              aria-label="likes"
              size="small"
              color="inherit" >
              <FavoriteIcon />
            </IconButton>
            <Typography variant="caption">
              {props.likes}
            </Typography>
            <IconButton 
              aria-label="share"
              size="small"
              color="inherit" >
                <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="options"
              size="small"
              color="inherit"
              style={{marginLeft: "auto"}} >
              <MoreVertIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Fragment>
  );
}

export default Slide;
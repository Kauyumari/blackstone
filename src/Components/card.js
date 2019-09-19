import React, { Fragment } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, CardActions, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Slide = () => {
  const useStyles = makeStyles(theme => ({
    card: {
      width: 550
    },
    media: {
      height: 0,
      paddingTop: "40%"
    },
    content: {
      backgroundColor: "primary.main"
    }
  }))
  const classes = useStyles()

  return (  
    <Fragment>
      <Card className={classes.card} raised>
        <CardMedia 
          className={classes.media}
          image="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <Box bgcolor="secondary.light">
          <CardContent className={classes.content}>
            <Typography
              variant="h5"
              display="block"
              color="textPrimary"
              paragraph
              style={{ fontWeight: 700, }} >
              Hi, I'm a title
            </Typography>
            <Typography
              variant="body2"
              display="inline"
              color="textSecondary" >
              Hi, I'm a paragraph
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
              175
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
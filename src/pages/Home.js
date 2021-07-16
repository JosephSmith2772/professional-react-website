import React from "react"
import { makeStyles, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core/'
import ProfileCard from '../components/ProfileCard'
const drawerWidth = 175

const useStyles = makeStyles((theme) => ({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundImage: 'url("https://thumbs.dreamstime.com/z/green-summer-nature-sunny-day-summer-background-trees-green-meadow-warm-sunlight-trees-leaves-branchy-trees-117670614.jpg")',
    height: '100vh',
    overflow: 'hidden',
  },
}));

export default function Home() {
  const classes = useStyles()
  return (

    <div className={classes.root}>
      <Grid container spacing={2} justifyContent="center" >
        <Grid item>
          <Typography variant="h1" color="textPrimary">
            This is my site
          </Typography>
          <ProfileCard/>
        </Grid>

      </Grid>
    </div>
  )
}
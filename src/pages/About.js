import React from "react"
import { makeStyles } from '@material-ui/core'

const drawerWidth = 175

const useStyles = makeStyles((theme) => ({
    root: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}));

export default function About()  {
    const classes = useStyles()
    return <h1 className={classes.root}>About page</h1>
}
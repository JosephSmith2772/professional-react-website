import React from "react"
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';



const drawerWidth = 175


const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
}));

const pages = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/'

  },
  {
    title: 'About',
    icon: <InfoIcon />,
    link: '/about'
  },
  {
    title: 'Projects',
    icon: <AssignmentIcon />,
    link: '/projects'
  }

]

export default function NavDrawer() {

  const classes = useStyles()

  const list = () => (
    <div>
      <List>
        {pages.map((page, index) => (
          <ListItem button key={page.title} component={NavLink} to={page.link}>
            <ListItemIcon>{page.icon} </ListItemIcon>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
       
      </List>
    </div>
  )
  
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      {list()}
    </Drawer>
  );
}
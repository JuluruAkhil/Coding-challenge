import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
// import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import test_user2 from '../images/test_user2.png'
import test_user3 from '../images/test_user3.png'
import test_user4 from '../images/test_user4.png'
// import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import MyTheme from './MyTheme'
import { Button } from 'react-bootstrap'
import { logout } from '../slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import profileImg from '../images/profile.png'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
  },
  profileImage: {
    width: '50%',
    borderRadius: '100%',
  },
  content: {
    justifyContent: 'left',
    textAlign: 'left',
  },
  details: {
    marginTop: '-20px',
  },
  chip: {
    padding: '0 5px',
    margin: '2px 5px',
  },
  about: {
    margin: '10px 0',
    alignItems: 'left',
    textAlign: 'left',
  },
}))

export default function ProfileColour() {
  const classes = useStyles()
  const dispatch = useDispatch()
  let history = useHistory()
  const user = useSelector((state) => state.user)

  return (
    <React.Fragment>
      <div container>
        <img className={classes.profileImage} alt="User" src={profileImg} />
        <div className={classes.content}>
          <Typography component="h1" variant="h4" align="center">
            {user.name}
          </Typography>
          <h4 align="center">Graduate Analyst, Technology Infrastructure</h4>
          <p></p>

          <Grid container justify="space-between">
            <Grid item>
              <p></p>
              <p></p>
            </Grid>
            <Grid item>
              <p></p>
            </Grid>
          </Grid>

          <div>
            <Chip
              className={classes.chip}
              style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              label="Fast Starter"
              size="medium"
            />
            <Chip
              className={classes.chip}
              style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              label="Collaborator"
              size="medium"
            />
            <Chip
              className={classes.chip}
              style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              label="Achiever"
              size="medium"
            />
            <Chip
              className={classes.chip}
              style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              label="Legendary"
              size="medium"
            />
          </div>
          <br></br>
          <div className={classes.about}>
            <h4 align="center">Testimonials</h4>
            <Box
              display="flex"
              flexWrap="nowrap"
              p={1}
              m={1}
              bgcolor="background.paper"
              sx={{ maxWidth: 300 }}
            >
              <Box
                p={2}
                borderRadius="5%"
                style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              >
                <Grid item xs={12} align="center">
                  <Avatar src={test_user2} />
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center">Ankit Mishra </Typography>
                </Grid>
                <Grid item xs={12}>
                  Kudos to you for the new role! Way to go!
                </Grid>
              </Box>
            </Box>
            <Box
              display="flex"
              flexWrap="nowrap"
              p={1}
              m={1}
              bgcolor="background.paper"
              sx={{ maxWidth: 300 }}
            >
              <Box
                p={2}
                borderRadius="5%"
                style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              >
                <Grid item xs={12} align="center">
                  <Avatar src={test_user3} />
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center">Akhil Juluru </Typography>
                </Grid>
                <Grid item xs={12}>
                  Great work with the Induction program!
                </Grid>
              </Box>
            </Box>

            <Box
              display="flex"
              flexWrap="nowrap"
              p={1}
              m={1}
              bgcolor="background.paper"
              sx={{ maxWidth: 300 }}
            >
              <Box
                p={2}
                borderRadius="5%"
                style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              >
                <Grid item xs={12} align="center">
                  <Avatar src={test_user4} />
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center">Aishwarya Pharande </Typography>
                </Grid>
                <Grid item xs={12}>
                  Your work will bring a lot of insights into solving our next
                  problem. Godspeed
                </Grid>
              </Box>
            </Box>
          </div>
        </div>
      </div>
      <Button
        align="right"
        variant="danger"
        onClick={() => {
          dispatch(logout())
          history.push('/')
        }}
      >
        Logout
      </Button>
    </React.Fragment>
  )
}

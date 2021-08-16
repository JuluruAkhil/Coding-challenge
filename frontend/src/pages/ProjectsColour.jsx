import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
//import Link from "@material-ui/core/Link";
// import Profile from './Profile.jsx'
import { useSelector } from 'react-redux'
import ProfileColour from './ProfileColour.jsx'

//api
// import UserService from './service/UserService'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
  },
  paper1: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '86.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Department', 'Technology Infrastructure'),
  createData('Contact', +919820532805),
  createData('Location', 'Pune, India'),
]

// function createData2(rank, name, points) {
//   return { rank, name, points }
// }

// const rows2 = [
//   createData2(1, 'prod1', 't1'),
//   createData2(2, 'prod2', 't2'),
//   createData2(3, 'prod3', 't3'),
//   createData2(4, 'prod4', 't4'),
//   createData2(5, 'prod5', 't5'),
// ]

export default function Login() {
  const classes = useStyles()

  // class UserComponent extends React.Component {
  //   // constructor(props) {
  //   //   super(props);
  //   //   this.state = {
  //   //     users: []
  //   //   };
  //   // }

  //   // componentDidMount() {
  //   //   UserService.getUsers().then((response) => {
  //   //     this.setState({ users: response.data });
  //   //     console.log(this.state.users);
  //   //   });
  //   // }

  //   render() {

  const [orders, setOrders] = useState([])
  const [table, setTable] = useState([])
  const USERS_REST_API_URL = 'http://localhost:8081'
  const user = useSelector((state) => state.user)
  const { emojis } = useSelector((state) => state.emojis)

  useEffect(() => {
    async function fetchMyData() {
      axios
        .get(`${USERS_REST_API_URL}/dbkudos/orders/${user.id}`)
        .then((res) => {
          setOrders(res.data)
        })
    }

    fetchMyData()
  }, [])

  function getProducts() {
    let products = {}
    for (let index = 0; index < orders.length; index++) {
      const order = orders[index]
      if (products[order['product']['id']]) {
        products[order['product']['id']] += order['quantity']
        console.log(order['quantity'])
      } else {
        products[order['product']['id']] = order['quantity']
      }
    }
    return products
  }

  function generateTable() {
    let products = getProducts()
    let tableData = []
    console.log(products)
    const keys = Object.keys(products)
    keys.forEach((key) => {
      tableData.push({
        id: key,
        name: emojis[key - 1]['name'],
        quantity: products[key],
      })
    })
    setTable(tableData)
    console.log(tableData)
  }

  return (
    <React.Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={3}
          component={Paper}
          elevation={6}
          square
          style={{ backgroundColor: '#fce4ec' }}
        >
          <div className={classes.paper}>
            <ProfileColour />
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={9}>
          <main>
            {/* Hero unit */}

            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow key={user.name}>
                            <TableCell component="th" scope="row">
                              Name
                            </TableCell>
                            <TableCell align="right">{user.name}</TableCell>
                          </TableRow>
                          <TableRow key={user.email}>
                            <TableCell component="th" scope="row">
                              Email
                            </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                          </TableRow>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid></Grid>
                  <Grid item xs={12}>
                    <br></br>
                    <Box fontWeight="fontWeightBold">Transaction history</Box>

                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">id</TableCell>
                            <TableCell align="center">Emoji Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {table.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.id}
                              </TableCell>
                              <TableCell align="center">{row.name}</TableCell>
                              <TableCell align="right">
                                {row.quantity}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </main>
          <Button variant="primary" onClick={generateTable}>
            Click
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

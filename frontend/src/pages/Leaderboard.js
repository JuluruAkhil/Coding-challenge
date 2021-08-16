import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(rank, name, points) {
  return { rank, name, points };
}

const rows = [
  createData(1, "Shreya Oak", 4),
  createData(2, "Akhil Juluru", 3),
  createData(3, "Ankit Mishra", 2),
  createData(4, "Kshitij Shah", 1),
  createData(5, "Kushagra Tiwari", 0)
];
export default function BasicTable() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={5}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <br></br>
            <Box fontWeight="fontWeightBold" align="center">
              {" "}
              Badges collected
            </Box>
            <br></br>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell align="center">Employee</TableCell>
                    <TableCell align="right">Badges</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.rank}>
                      <TableCell component="th" scope="row">
                        {row.rank}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="right">{row.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

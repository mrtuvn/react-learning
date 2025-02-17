import React from "react";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "@/hooks";
import DescriptionIcon from "@mui/icons-material/Description";
import { CSVLink } from "react-csv";
import { IRootState } from "@/types";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import { getDatetimeToString } from "@/lib/utils";
import { paths } from "@/routes/path";
import { ILeaderboards } from "@/types/leaderboard";

const csvHeaders = ["ID", "First Name", "Last Name", "Email", "Score"];
const HeaderBoard = ["First Name", "Last Name", "Email", "Score"];
const LeaderBoard = () => {
  const navigate = useNavigate();
  const leaderboards = useAppSelector(
    (state: IRootState) => state.leaderboard.leaderboards
  );

  const csvData = React.useMemo(() => {
    const data = leaderboards.map((item: ILeaderboards) => {
      return [item.id, item.first_name, item.last_name, item.email, item.score];
    });

    return [csvHeaders, ...data];
  }, [leaderboards]);

  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" align="center" gutterBottom>
          Leaderboard
        </Typography>
      </Box>

      <Box sx={{ textAlign: "right", mb: 3 }}>
        <CSVLink
          data={csvData}
          filename={getDatetimeToString("leaderboard") + ".csv"}
        >
          <Button
            size="small"
            variant="contained"
            startIcon={<DescriptionIcon />}
            sx={{ mr: 2 }}
          >
            Export CSV
          </Button>
        </CSVLink>

        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(paths.PATH_HOME)}
        >
          Go Home
        </Button>
      </Box>

      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {HeaderBoard.map((title) => (
                  <TableCell>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboards.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default LeaderBoard;

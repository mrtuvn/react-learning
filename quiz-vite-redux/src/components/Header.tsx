import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/path";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(paths.PATH_HOME);
  };

  const goToLeaderboard = () => {
    navigate(paths.PATH_LEADER_BOARD);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={goToHome}
          >
            Quiz App
          </Typography>
          <Button color="inherit" onClick={goToLeaderboard}>
            LEADER BOARD
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

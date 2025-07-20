import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E2F", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          რეგისტრაცია
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/register/admin"
            variant="contained"
            sx={{
              backgroundColor: "#6A1B9A",
              '&:hover': { backgroundColor: "#4A148C" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600
            }}
          >
            როგორც ადმინი
          </Button>
          <Button
            component={Link}
            to="/registeration"
            variant="contained"
            sx={{
              backgroundColor: "#0277BD",
              '&:hover': { backgroundColor: "#01579B" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600
            }}
          >
            როგორც იუზერი
          </Button>
          <Button
            component={Link}
            to="/courierRegistration"
            variant="contained"
            sx={{
              backgroundColor: "#2E7D32",
              '&:hover': { backgroundColor: "#1B5E20" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600
            }}
          >
            როგორც კურიერი
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

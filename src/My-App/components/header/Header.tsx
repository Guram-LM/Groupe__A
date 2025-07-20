import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E2F", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* მარცხენა - ლოგო ან რეგისტრაციის ლინკი */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
              '&:hover': { color: "#B39DDB" },
            }}
          >
            რეგისტრაცია
          </Typography>
        </Box>
        {/* შუა ღილაკები - Users/Couriers list */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/adminList"
            variant="text"
            sx={{
              color: "#BBDEFB",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Users List
          </Button>
          <Button
            component={Link}
            to="/couriersList"
            variant="text"
            sx={{
              color: "#C8E6C9",
              '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Couriers List
          </Button>
        </Box>
        {/* მარჯვენა ღილაკები - რეგისტრაცია */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/adminRegistration"
            variant="contained"
            sx={{
              backgroundColor: "#6A1B9A",
              '&:hover': { backgroundColor: "#4A148C" },
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
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
              fontWeight: 600,
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
              fontWeight: 600,
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
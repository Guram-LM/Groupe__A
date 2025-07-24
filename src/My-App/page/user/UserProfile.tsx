import { Link } from "react-router-dom"
import type { UserResponseType } from "./UserInterface"
import deliverImg from "../../../assets/deliver.jpg"
import {
  Box,
  Avatar,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material"

const UserProfile = () => {
  const getProfile = localStorage.getItem("geste")
  const gestProfile: UserResponseType | null = getProfile ? JSON.parse(getProfile) : null

  if (!gestProfile)
    return (
      <Typography variant="h5" textAlign="center" mt={4}>
        მომხმარებლის პროფილი არ მოიძებნა
      </Typography>
    )

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 8, px: 3 }}>
      
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 4,
          borderRadius: 3,
          backgroundColor: "#1e1e1e",
          alignItems: "center",
          gap: 4,
          color: "#fff",
        }}
      >
        <Avatar
          src={gestProfile.profileImage}
          alt={`${gestProfile.firstName} ${gestProfile.lastName}`}
          sx={{
            width: { xs: 200, md: 250 },
            height: { xs: 200, md: 250 },
            border: "6px solid #1565c0",
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {gestProfile.firstName} {gestProfile.lastName}
          </Typography>

          <Box sx={{ mb: 1 }}>
            <Typography><strong>პირადი ნომერი:</strong> {gestProfile.pid}</Typography>
            <Typography><strong>ქვეყანა:</strong> {gestProfile.country}</Typography>
            <Typography><strong>ქალაქი:</strong> {gestProfile.city}</Typography>
            <Typography><strong>ქუჩა:</strong> {gestProfile.street}</Typography>
            <Typography><strong>ტელეფონი:</strong> {gestProfile.phoneNumber}</Typography>
            <Typography><strong>იმეილი:</strong> {gestProfile.email}</Typography>
          </Box>
        </Box>
      </Paper>

   
      <Box sx={{ mt: 6 }}>
        <Card
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "#1e1e1e",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: { sm: 300 },
              height: 300,
              flexShrink: 0,
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#1e1e1e",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "6px solid #1565c0",
              }}
            >
              <CardMedia
                component="img"
                image={deliverImg}
                alt="Delivery Service"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              სწრაფი და საიმედო კურიერული მომსახურება
            </Typography>

            <Typography variant="body1" color="inherit" mb={3}>
              ჩვენი კურიერები უზრუნველყოფენ სწრაფ და უსაფრთხო მიტანას თქვენს საჭირო ადგილზე.
              აირჩიე წონა, მისამართი და დანარჩენს ჩვენ მივხედავთ.
            </Typography>

            <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/user/deliverRequest"
                size="large"
              >
                ჩვენი სერვისით სარგებლობა
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default UserProfile

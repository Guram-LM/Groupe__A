import { Link } from "react-router-dom"
import type { CourierResponseType } from "./CourierInterface"
import {
  Box,
  Avatar,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material"

const CouriersProfile = () => {
  const getProfile = localStorage.getItem("geste")
  const gestProfile: CourierResponseType | null = getProfile ? JSON.parse(getProfile) : null

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
          p: 4,
          borderRadius: 3,
          backgroundColor: "#1e1e1e",
          color: "#fff",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
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
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {gestProfile.firstName} {gestProfile.lastName}
          </Typography>
          <Typography><strong>პირადი ნომერი:</strong> {gestProfile.pid}</Typography>
          <Typography><strong>ტრანსპორტი:</strong> {gestProfile.vehicle}</Typography>
          <Typography><strong>ტელეფონი:</strong> {gestProfile.phoneNumber}</Typography>
          <Typography><strong>იმეილი:</strong> {gestProfile.email}</Typography>

          <Divider sx={{ my: 2, borderColor: "#444" }} />

          <Box>
            <Typography variant="h6" gutterBottom>
              სამუშაო განრიგი:
            </Typography>
            {gestProfile.workingDays.map((tag, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                <Typography>
                  <strong>{tag.tag}:</strong> {tag.startHour}:{tag.startMinute} - {tag.endHour}:{tag.endMinute}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          component={Link}
          to="/courier/couriersList"
          variant="contained"
          color="primary"
          size="large"
        >
          კურიერები და მათი სამუშაო განრიგები
        </Button>
      </Box>
    </Box>
  )
}

export default CouriersProfile

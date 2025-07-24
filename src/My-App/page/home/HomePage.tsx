
import { Box, Typography, Button } from "@mui/material"
import { useGetCouriersQuery } from "../../store/RT_query/query"
import CourierSlider from "./slider"
import MehrInfo from "./MehrInfo"


const HomePage = () => {
  const { data: couriers, isLoading, error } = useGetCouriersQuery()

  if (isLoading) return <Typography textAlign="center">იტვირთება...</Typography>
  if (error) return <Typography textAlign="center">შეცდომაა მონაცემების ჩატვირთვაში</Typography>
  if (!couriers || couriers.length === 0)
    return <Typography textAlign="center">კურიერები არ მოიძებნა</Typography>

  return (
    <Box
      sx={{
        bgcolor: "#f1eaea",
        minHeight: "100vh",
        color: "#ffd700",
        p: 4,
      }}
    >
      <Typography variant="h2" textAlign="center" mb={5} color="#222">
        ჩვენი კურიერები
      </Typography>

      <Box display="flex" justifyContent="center" mb={6}>
        <CourierSlider couriers={couriers} />
      </Box>

      <Box textAlign="center" mb={6}>
        <Button variant="contained" color="warning" size="large" sx={{ mr: 3 }}>
          დარეგისტრირდი კურიერად
        </Button>
        <Button variant="outlined" color="warning" size="large">
          დაუკავშირდი ჩვენ
        </Button>
      </Box>

      <MehrInfo />

      <Box textAlign="center" color="#222" mt={10} sx={{ opacity: 0.5 }}>
        <Typography variant="body2">© 2025 თქვენი კომპანია. ყველა უფლება დაცულია.</Typography>
      </Box>
    </Box>
  )
}

export default HomePage

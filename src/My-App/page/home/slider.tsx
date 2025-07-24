import React, { useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"

interface Courier {
  id: string
  firstName: string
  lastName: string
  profileImage: string
  vehicle?: string
}

interface CourierSliderProps {
  couriers: Courier[]
}

const CourierSlider: React.FC<CourierSliderProps> = ({ couriers }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!couriers || couriers.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === couriers.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [couriers])

  if (!couriers || couriers.length === 0) return null

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? couriers.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === couriers.length - 1 ? 0 : prev + 1
    )
  }

  const courier = couriers[currentIndex]

  return (
    <Box
      sx={{
        maxWidth: 1100,
        height: 500,
        mx: "auto",
        mt: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        userSelect: "none",
        bgcolor: "#121212",
        borderRadius: 3,
        p: 3,
        boxShadow: "0 0 30px 10px rgba(255, 215, 0, 0.3)",
      }}
    >
      {/* Prev Button */}
      <Button
        onClick={handlePrev}
        variant="outlined"
        sx={{
          borderColor: "#ffd700",
          color: "#ffd700",
          fontSize: 28,
          fontWeight: "bold",
          minWidth: 64,
          height: 64,
          "&:hover": {
            bgcolor: "#333",
            borderColor: "#ffd700",
          },
        }}
        aria-label="წინა კურიერი"
      >
        &#8592;
      </Button>

      {/* კურიერის ინფორმაცია */}
      <Box
        sx={{
          border: "3px solid #ffd700",
          borderRadius: 3,
          p: 4,
          width: 600,
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(255, 215, 0, 0.7)",
          color: "#ffd700",
        }}
      >
        <Box
          component="img"
          src={courier.profileImage}
          alt={`${courier.firstName} ${courier.lastName}`}
          sx={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            objectFit: "cover",
            mb: 3,
            border: "5px solid #ffd700",
            boxShadow: "0 0 15px 5px rgba(255, 215, 0, 0.7)",
            mx: "auto",
            display: "block",
          }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {courier.firstName} {courier.lastName}
        </Typography>
        <Typography variant="h6">
          {courier.vehicle || "ტრანსპორტი არ არის მითითებული"}
        </Typography>
      </Box>

      {/* Next Button */}
      <Button
        onClick={handleNext}
        variant="outlined"
        sx={{
          borderColor: "#ffd700",
          color: "#ffd700",
          fontSize: 28,
          fontWeight: "bold",
          minWidth: 64,
          height: 64,
          "&:hover": {
            bgcolor: "#333",
            borderColor: "#ffd700",
          },
        }}
        aria-label="შემდეგი კურიერი"
      >
        &#8594;
      </Button>
    </Box>
  )
}

export default CourierSlider

import { Box, Typography } from "@mui/material"

const Info = [
  {
    title: "სწრაფი მიწოდება",
    description: "გთავაზობთ უმოკლეს დროში თქვენი პაკეტების მიწოდებას.",
  },
  {
    title: "უსაფრთხოება",
    description: "თქვენი ინფორმაცია და პაკეტები დაცულია ყველა დონეზე.",
  },
  {
    title: "პროფესიონალიზმი",
    description: "ჩვენი კურიერები არიან გამოცდილი და მეგობრულები.",
  },
]

const MehrInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        mb: 8,
        flexWrap: "wrap",
      }}
    >
      {Info.map(({ title, description }) => (
        <Box
          key={title}
          sx={{
            bgcolor: "#222",
            borderRadius: 2,
            p: 3,
            boxShadow: "0 0 10px 2px rgba(255, 215, 0, 0.4)",
            minWidth: 280,
            flex: "1 1 280px",
            color: "#ffd700",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>{description}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default MehrInfo

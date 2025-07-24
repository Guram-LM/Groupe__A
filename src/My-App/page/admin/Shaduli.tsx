import { useGetBeschtelenQuery } from "../../store/RT_query/query"
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Paper,
  Stack,
} from "@mui/material"

const Shaduli = () => {
  const { data } = useGetBeschtelenQuery()

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Stack spacing={5} maxWidth={700} margin="0 auto">
        {data?.map((item) => (
          <Paper
            key={item.id}
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: "rgba(25, 118, 210, 0.25)", 
              boxShadow:
                "0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)",
              width: "100%",
              maxWidth: 600,
            }}
          >
            {/* კლიენტი */}
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{ color: "#bfa24a" }}
            >
              კლიენტი
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" mb={3}>
              <Avatar
                src={item.kunde.profileImage}
                alt={`${item.kunde.firstName} ${item.kunde.lastName}`}
                sx={{ width: 130, height: 130, borderRadius: 3 }}
                variant="rounded"
              />
              <Box>
                <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#bfa24a" }}>
                  {item.kunde.firstName} {item.kunde.lastName}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  {item.kunde.country}, {item.kunde.city}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  {item.kunde.street}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  📞 {item.kunde.phoneNumber}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  ✉️ {item.kunde.email}
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 3, borderColor: "#bfa24a" }} />

           
           
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{ color: "#bfa24a" }}
            >
              კურიერი
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center" mb={3}>
              <Avatar
                src={item.courier.profileImage}
                alt={`${item.courier.firstName} ${item.courier.lastName}`}
                sx={{ width: 130, height: 130, borderRadius: 3 }}
                variant="rounded"
              />
              <Box>
                <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#bfa24a" }}>
                  {item.courier.firstName} {item.courier.lastName}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  პირადი ID: {item.courier.pid}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  📞 {item.courier.phoneNumber}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  ✉️ {item.courier.email}
                </Typography>
                <Typography sx={{ mt: 0.5, color: "#f0d96f" }}>
                  დასაქმების თარიღი: {item.courier.Beschäftigtyeit}
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 3, borderColor: "#bfa24a" }} />

           
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{ color: "#bfa24a" }}
            >
              შეკვეთის დეტალები
            </Typography>
            <Box sx={{ ml: 1, mt: 1 }}>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>აღების მისამართი:</strong> {item.abholAdresse}
              </Typography>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>მიტანის მისამართი:</strong> {item.zustellAdresse}
              </Typography>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>გადახდის მეთოდი:</strong> {item.bezhalen}
              </Typography>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>წონა:</strong> {item.gewicht} კგ
              </Typography>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>ღირებულება:</strong> {item.preis} ₾
              </Typography>
              <Typography variant="body1" mb={0.5} sx={{ color: "#f0d96f" }}>
                <strong>მიტანის სავარაუდო დრო:</strong> {item.voraussichtlicheLieferzeit} წთ
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}

export default Shaduli

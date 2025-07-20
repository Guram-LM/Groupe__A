import { useGetCouriersQuery } from '../../store/RT_query/query'
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Box,
  Divider,
} from '@mui/material'


const CourierList = () => {

  const { data } = useGetCouriersQuery()
  
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {data?.map((courier) => (
          <Grid item xs={12} md={6} lg={4} key={courier.id}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={courier.profileImage}
                    alt={`${courier.firstName} ${courier.lastName}`}
                    sx={{ width: 64, height: 64 }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {courier.firstName} {courier.lastName}
                    </Typography>
                    <Typography color="text.secondary">{courier.email}</Typography>
                    <Typography color="text.secondary">{courier.phoneNumber}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={500}>
                    პირადი ნომერი: {courier.pid}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={500}>
                    სატრანსპორტო საშუალება: {courier.vehicle}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  სამუშაო დღეები:
                </Typography>
                {courier.workingDays.map((tag, index) => (
                  <Box key={index} sx={{ mt: 1, pl: 1 }}>
                    <Typography variant="body2" fontWeight={500}>
                      {tag.tag}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tag.startHour}:{tag.startMinute} - {tag.endHour}:{tag.endMinute}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default CourierList
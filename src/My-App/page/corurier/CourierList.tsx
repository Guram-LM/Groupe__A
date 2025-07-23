import { useGetCouriersQuery } from '../../store/RT_query/query'
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
} from '@mui/material'

const CourierList = () => {
  const { data } = useGetCouriersQuery()

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {data?.map((courier) => (
          <Box
            key={courier.id}
            sx={{
              width: {
                xs: '100%',     
                sm: '47%',       
                md: '30%',       
              },
              display: 'flex',
            }}
          >
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                backgroundColor: '#1e1e1e',
                color: '#fff',
                width: '100%',
                minHeight: 430,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Avatar
                    src={courier.profileImage}
                    alt={`${courier.firstName} ${courier.lastName}`}
                    sx={{ width: 64, height: 64, border: '2px solid #1565c0' }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {courier.firstName} {courier.lastName}
                    </Typography>
                    <Typography color="gray">{courier.email}</Typography>
                    <Typography color="gray">{courier.phoneNumber}</Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: '#444', my: 2 }} />

                <Box>
                  <Typography variant="subtitle1" fontWeight={500}>
                    პირადი ნომერი: {courier.pid}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={500}>
                    სატრანსპორტო საშუალება: {courier.vehicle}
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: '#444', my: 2 }} />

                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    სამუშაო დღეები:
                  </Typography>
                  {courier.workingDays.map((tag, index) => (
                    <Box key={index} sx={{ mt: 1, pl: 1 }}>
                      <Typography variant="body2" fontWeight={500}>
                        {tag.tag}
                      </Typography>
                      <Typography variant="body2" color="gray">
                        {tag.startHour}:{tag.startMinute} - {tag.endHour}:{tag.endMinute}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CourierList

import { useGetAdminQuery } from '../../store/RT_query/query'
import {
  Box,
  Card,
  Avatar,
  Typography,
  CardContent,
  Stack,
} from '@mui/material'

const AdminList = () => {
  const { data } = useGetAdminQuery()

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {data?.map((admin) => (
        <Card
          key={admin.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 3,
            borderRadius: 3,
            backgroundColor: '#1e1e1e',
            color: '#fff',
            boxShadow: 5,
            gap: 4,
          }}
        >
          <Avatar
            src={admin.profileImage}
            alt={`${admin.firstName} ${admin.lastName}`}
            sx={{
              width: 200,
              height: 200,
              border: '4px solid #1976d2',
              boxShadow: '0 0 20px rgba(25, 118, 210, 0.6)',
            }}
          />

          <CardContent sx={{ padding: 0 }}>
            <Typography variant="h5" fontWeight={600}>
              {admin.firstName} {admin.lastName}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              პირადი ნომერი: {admin.pid}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              ელ-ფოსტა: {admin.email}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              ტელეფონი: {admin.phoneNumber}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default AdminList

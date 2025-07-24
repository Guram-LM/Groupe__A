import { Card, Typography, Avatar, Box } from '@mui/material'
import type { AdminResponseType } from './AdminInterface'

const AdminProfile = () => {
  const getProfile = localStorage.getItem('geste')
  const guestProfile: AdminResponseType | null = getProfile ? JSON.parse(getProfile) : null

  if (!guestProfile) return <h1>მომხმარებლის პროფილი არ მოიძებნა</h1>

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Card
        sx={{
          maxWidth: 800,
          width: '100%',
          padding: 4,
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: '#1e1e1e',
          color: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Avatar
            src={guestProfile.profileImage}
            alt={`${guestProfile.firstName} ${guestProfile.lastName}`}
            sx={{
              width: 200,
              height: 200,
              border: '4px solid #1976d2',
              boxShadow: '0 0 20px rgba(25, 118, 210, 0.6)',
            }}
          />

          <Box>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {guestProfile.firstName} {guestProfile.lastName}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              პირადი ნომერი: {guestProfile.pid}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              ტელეფონი: {guestProfile.phoneNumber}
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              ელ-ფოსტა: {guestProfile.email}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default AdminProfile

import {
  Avatar, Box, Card, CardContent, Divider, Typography
} from '@mui/material'
import React from 'react'
import type { CourierResponseType } from '../corurier/CourierInterface'
import {
  containerStyle,
  cardWrapperStyle,
  cardStyle,
  avatarBoxStyle,
  avatarStyle,
  dividerStyle,
  workingDayBoxStyle,
} from './DeliverStyle'
interface CouriersProps {
  couriers: CourierResponseType[]
}
const CouriersPage: React.FC<CouriersProps> = ({ couriers }) => {
  return (
    <Box sx={containerStyle}>
      {couriers?.map((courier) => (
        <Box key={courier.id} sx={cardWrapperStyle}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box sx={avatarBoxStyle}>
                <Avatar
                  src={courier.profileImage}
                  alt={`${courier.firstName} ${courier.lastName}`}
                  sx={avatarStyle}
                />
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {courier.firstName} {courier.lastName}
                  </Typography>
                  <Typography color="text.secondary">{courier.email}</Typography>
                  <Typography color="text.secondary">{courier.phoneNumber}</Typography>
                </Box>
              </Box>
              <Divider sx={dividerStyle} />
              <Box>
                <Typography variant="subtitle1" fontWeight={500}>
                  პირადი ნომერი: {courier.pid}
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  სატრანსპორტო საშუალება: {courier.vehicle}
                </Typography>
              </Box>
              <Divider sx={dividerStyle} />
              <Typography variant="subtitle1" fontWeight={600}>
                სამუშაო დღეები:
              </Typography>
              {courier.workingDays.map((tag, index) => (
                <Box key={index} sx={workingDayBoxStyle}>
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
        </Box>
      ))}
    </Box>
  )
}
export default CouriersPage
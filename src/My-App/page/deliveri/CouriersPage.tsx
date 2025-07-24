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
import type { BeschtelunType } from './DeliverRequest'
import { useNavigate } from 'react-router-dom'

interface CouriersProps {
  couriers: CourierResponseType[]
  beschtelungData: BeschtelunType
}

const CouriersPage: React.FC<CouriersProps> = ({ couriers, beschtelungData }) => {
  const navigate = useNavigate()
  const now = new Date()

  const goToBezahlenPage = (courier: CourierResponseType) => {
    navigate(`/user/bezahlenPage/${courier.id}`, {
      state: {
        courier,
        beschtelungData,
      }
    })
  }

  return (
    <Box sx={containerStyle}>
      {couriers.map((courier) => {
        const busyUntil = courier.Beschäftigtyeit ? new Date(courier.Beschäftigtyeit) : null
        const isBusy = busyUntil ? busyUntil > now : false

        return (
          <Box key={courier.id} sx={cardWrapperStyle}>
            <Card
              sx={{
                ...cardStyle,
                cursor: isBusy ? 'not-allowed' : 'pointer',
                opacity: isBusy ? 0.5 : 1,
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onClick={() => {
                if (!isBusy) {
                  goToBezahlenPage(courier)
                }
              }}
            >
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
        )
      })}
    </Box>
  )
}

export default CouriersPage

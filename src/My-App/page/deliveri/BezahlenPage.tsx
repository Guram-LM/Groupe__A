import { useState } from 'react'
import BezahlMetode from './BezahlMetode'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import type { CourierResponseType } from '../corurier/CourierInterface'
import type { BeschtelunType } from './DeliverRequest'
import { useAppDispatch } from '../../store/ReduxHook'
import { createUser } from '../../store/thanks/post/Post-Thamk'
import { Box, Typography, Paper } from '@mui/material'
import { updateThankh } from '../../store/thanks/update/updata-Thants'

export interface BeschtelenType extends BeschtelunType {
  courier: CourierResponseType;
  bezhalen: string;
  Beschäftigtyeit: string;
}

const BezahlenPage = () => {
  const [bezahlMetode, setBezahlMetode] = useState("")
  const lokation = useLocation()
  const { beschtelungData, courier } = lokation.state as {
    courier: CourierResponseType,
    beschtelungData: BeschtelunType
  }
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const sendData = async () => {
    if (!bezahlMetode) {
      toast.error("გთხოვ აირჩიე გადახდის მეთოდი")
      return
    }

    const Beschäftigtyeit = new Date(
      Date.now() + (beschtelungData.voraussichtlicheLieferzeit ?? 15) * 60 * 1000
    ).toISOString()

    const sendData: BeschtelenType = {
      ...beschtelungData,
      courier,
      bezhalen: bezahlMetode,
      Beschäftigtyeit
    }

    // 🔹 ჯერ ვაცნობებთ რომ კურიერი დაკავებულია
    await dispatch(updateThankh({
      role: "courier",
      sendData: {
        ...courier,
        id: courier.id,
        Beschäftigt: true
      }
    }))

    // 🔹 შემდეგ ვაგზავნით შეკვეთას
    const action = await dispatch(createUser({ role: "beschtelen", sendData }))
    if (createUser.fulfilled.match(action)) {
      toast.success("შეკვეთა მიღებულია")
      navigate("/user/userProfile")

      // 🔹 გათავისუფლების დრო ვითვლით Beschäftigtyeit-ზე დაყრდნობით
      const busyUntil = new Date(Beschäftigtyeit).getTime()
      const now = Date.now()
      const timeoutMs = Math.max(busyUntil - now, 0)

      setTimeout(() => {
        dispatch(updateThankh({
          role: "courier",
          sendData: {
            ...courier,
            id: courier.id,
            Beschäftigt: false
          }
        }))
      }, timeoutMs)

    } else {
      toast.error("შეკვეთის გაგზავნა ვერ მოხერხდა")
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#0f172a',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 650,
          width: '100%',
          bgcolor: '#1e3a8a',
          p: 4,
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          mb: 4
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: '#FFD700', fontWeight: 'bold', textAlign: 'center', mb: 3 }}
        >
          გადახდის გვერდი
        </Typography>

        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>კურიერი:</strong> {courier.firstName} {courier.lastName}
        </Typography>
        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>წონა:</strong> {beschtelungData.gewicht} კგ
        </Typography>
        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>მიტანის დრო:</strong> {beschtelungData.voraussichtlicheLieferzeit} წთ
        </Typography>
        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>ღირებულება:</strong> {beschtelungData.preis} ₾
        </Typography>
        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>აღების მისამართი:</strong> {beschtelungData.abholAdresse}
        </Typography>
        <Typography sx={{ color: '#FFD700', mb: 1 }}>
          <strong>მიტანის მისამართი:</strong> {beschtelungData.zustellAdresse}
        </Typography>
      </Paper>

      <Typography variant="h6" sx={{ mb: 2, color: '#FFD700' }}>
        გადახდის მეთოდი
      </Typography>

      <BezahlMetode bezahlMetode={bezahlMetode} setBezahlMetode={setBezahlMetode} sendData={sendData} />
    </Box>
  )
}

export default BezahlenPage

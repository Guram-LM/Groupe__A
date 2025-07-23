import type { SxProps, Theme } from "@mui/material"
export const containerStyle: SxProps<Theme> = {
  padding: 4,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,                
  justifyContent: 'center', 
}
export const cardWrapperStyle: SxProps<Theme> = {
  flexGrow: 1,
  minWidth: 320,       // მინიმუმი სიგანე, რომ 2 მოაჯდეს გვერდზე (350-ს ნაცვლად)
  maxWidth: 360,       // მაქსიმუმი სიგანე
  // width: 'calc(50% - 16px)',  // ალტერნატივად შეიძლება პროცენტული
}
export const cardStyle: SxProps<Theme> = {
  boxShadow: 4,
  borderRadius: 3,
}
export const avatarBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
}
export const avatarStyle: SxProps<Theme> = {
  width: 64,
  height: 64,
}
export const dividerStyle: SxProps<Theme> = {
  my: 2,
}
export const workingDayBoxStyle: SxProps<Theme> = {
  mt: 1,
  pl: 1,
}
export const wrapperStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}
export const labelStyle: SxProps<Theme> = {
  mb: 1,
  fontWeight: 500,
}
export const inputStyle: SxProps<Theme> = {
  width: '100%',
}
export const delcontainerStyle: SxProps<Theme> = {
  mt: 3,
  p: 2,
  borderRadius: 2,
  backgroundColor: '#F5F7FA',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}
export const timeTextStyle: SxProps<Theme> = {
  color: '#1976D2',
  fontWeight: 600,
  mb: 1,
}
export const priceTextStyle: SxProps<Theme> = {
  color: '#388E3C',
  fontWeight: 600,
}
export const delreqestcontainerStyle: SxProps<Theme> = {
  maxWidth: 720,
  margin: '0 auto',
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  bgcolor: '#FAFAFA',
  borderRadius: 2,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
}
export const buttonStyle: SxProps<Theme> = {
  bgcolor: '#1976D2',
  color: 'white',
  fontWeight: 600,
  px: 3,
  py: 1.5,
  borderRadius: 1,
  cursor: 'pointer',
  '&:hover': {
    bgcolor: '#1565C0',
  },
  alignSelf: 'flex-start',
  transition: 'background-color 0.3s ease',
}
export const sectionStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

interface HeaderButtonType {
  url: string
  name: string
}

const headerButt: HeaderButtonType[] = [
  { name: 'შესვლა', url: '/validationPage' },
  { name: 'რეგისტრაცია', url: '/wehlenRegisterStatus' },
]

const HeaderButton = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {headerButt.map((item) => (
        <Button
          key={item.url}
          component={Link}
          to={item.url}
          variant="outlined"
          color="inherit"
          size="small"
          sx={{ textTransform: 'none' }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  )
}

export default HeaderButton
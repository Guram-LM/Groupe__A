import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material'

const ContactPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 8,
        color: '#ffffff',
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            mb={3}
            textAlign="center"
            sx={{
              color: '#e0d4fd',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            დაგვიკავშირდი
          </Typography>

          <form>
            <TextField
              fullWidth
              label="სახელი"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#e0d4fd' } }}
              sx={{
                input: { color: '#ffffff' },
                fieldset: { borderColor: '#d5ccff' },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: '#ffffff',
                },
              }}
            />
            <TextField
              fullWidth
              label="ელ. ფოსტა"
              type="email"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#e0d4fd' } }}
              sx={{
                input: { color: '#ffffff' },
                fieldset: { borderColor: '#d5ccff' },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: '#ffffff',
                },
              }}
            />
            <TextField
              fullWidth
              label="შეტყობინება"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: '#e0d4fd' } }}
              sx={{
                textarea: { color: '#ffffff' },
                fieldset: { borderColor: '#d5ccff' },
                '& .MuiOutlinedInput-root:hover fieldset': {
                  borderColor: '#ffffff',
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.4,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
                color: '#ffffff',
                boxShadow: '0 6px 16px rgba(138, 43, 226, 0.5)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #9f3fe7, #5317ea)',
                  boxShadow: '0 8px 20px rgba(100, 20, 255, 0.6)',
                },
              }}
            >
              გაგზავნა
            </Button>
          </form>

          <Box mt={4} textAlign="center">
            <Typography variant="subtitle1" sx={{ color: '#f3e9ff' }}>
              📞 <strong>+995 595 000 123</strong>
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#f3e9ff' }}>
              📍 თბილისი, კურიერის ქუჩა №11
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#f3e9ff' }}>
              ✉️ contact@courier.ge
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ContactPage

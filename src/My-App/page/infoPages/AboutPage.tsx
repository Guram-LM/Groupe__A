import { Box, Container, Typography, Card, CardContent, Divider } from '@mui/material';

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80'; 
// ეს არის ნატურალური საკურიერის ფოტო Unsplash-დან, შეგიძლია შეცვალო

const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        py: 12,
      }}
    >
      {/* მუქი ოვერლეი ფონზე ტექსტის გასარკვევად */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 1,
        }}
      />

      {/* მთავარი კონტეინერი ტექსტისთვის */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'common.white',
          textShadow: '0 2px 6px rgba(0,0,0,0.8)',
        }}
      >
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
            sx={{
              letterSpacing: 2,
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            ჩვენი ისტორია
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontStyle: 'italic', maxWidth: 600, mx: 'auto', lineHeight: 1.5 }}
          >
            სწრაფი, უსაფრთხო და პროფესიონალური საკურიერო მომსახურება — ტექნოლოგიით გამდიდრებული გამოცდილება.
          </Typography>
        </Box>

        {/* ბარათები ჩრდილით და მკაფიო ფონით */}
        <Box mb={8} display="grid" gap={6} sx={{ gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.9)',
              color: 'text.primary',
              borderRadius: 3,
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              p: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={700} gutterBottom color="primary.dark" sx={{ letterSpacing: 1 }}>
                როგორ დავიწყეთ
              </Typography>
              <Typography sx={{ lineHeight: 1.7, fontSize: 16 }}>
                ჩვენი კომპანია დაარსდა 2023 წელს, ხედვით — გაგვერთიანებინა ტექნოლოგია და ლოგისტიკა, რათა მომხმარებელს მიტანილი სერვისი იყოს მაქსიმალურად სწრაფი და ეფექტური.
                პირველი 100 შეკვეთა მივაწოდეთ თბილისში, ორი კურიერითა და ერთი ველოსიპედით.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.9)',
              color: 'text.primary',
              borderRadius: 3,
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              p: 3,
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={700} gutterBottom color="primary.dark" sx={{ letterSpacing: 1 }}>
                ჩვენი მიღწევები
              </Typography>
              <Typography sx={{ lineHeight: 1.7, fontSize: 16 }}>
                დღეს გვაქვს 300+ აქტიური კურიერი, ვმუშაობთ საქართველოს მასშტაბით და ყოველდღიურად ვამუშავებთ ათასობით შეკვეთას.
                მომხმარებელთა კმაყოფილების მაჩვენებელი 98%-ს აჭარბებს, რაც ჩვენი გუნდის შრომისა და თავდადების შედეგია.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* მისია */}
        <Box textAlign="center" sx={{ mb: 2 }}>
          <Divider
            sx={{
              maxWidth: 80,
              mx: 'auto',
              mb: 3,
              borderColor: 'primary.light',
              borderWidth: 3,
              borderRadius: 2,
              bgcolor: 'primary.light',
            }}
          />
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: 'primary.light', letterSpacing: 1.5 }}
          >
            ჩვენი მისია
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontStyle: 'italic', lineHeight: 1.6, fontSize: 18, maxWidth: 700, mx: 'auto' }}
          >
            გავხადოთ მიტანის სერვისი ისეთივე მარტივი, სანდო და სწრაფი, როგორიც ღილაკზე თითის დაჭერაა.
            ჩვენი პლატფორმა ყოველდღიურად აუმჯობესებს ადამიანების ცხოვრებას.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;

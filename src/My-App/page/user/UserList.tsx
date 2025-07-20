import { useGetUserQuery } from "../../store/RT_query/query"
import { Box, Typography, Avatar, Paper, CircularProgress, Alert } from "@mui/material";
import { Grid } from "@mui/material"; 


const UserList = () => {
  const { data, isLoading, isError } = useGetUserQuery()

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Alert severity="error">მონაცემების ჩატვირთვა ვერ მოხერხდა!</Alert>
      </Box>
    );
  }
  return (
      <Box p={4}>
      <Grid container spacing={4} justifyContent="center">
        {data?.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Paper
              elevation={3}
              sx={{
                width: 320,
                height: 280,
                padding: 3,
                borderRadius: 2,
                bgcolor: "#fafafa",
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                <Avatar
                  src={user.profileImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  sx={{ width: 80, height: 80 }}
                />
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
              </Box>

              <Box mt={2}>
                <Typography variant="body2"><strong>PID:</strong> {user.pid}</Typography>
                <Typography variant="body2"><strong>Country:</strong> {user.country}</Typography>
                <Typography variant="body2"><strong>City:</strong> {user.city}</Typography>
                <Typography variant="body2"><strong>Street:</strong> {user.street}</Typography>
                <Typography variant="body2"><strong>Email:</strong> {user.email}</Typography>
                <Typography variant="body2"><strong>Phone:</strong> {user.phoneNumber}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UserList
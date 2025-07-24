import { useAppDispatch } from "../../store/ReduxHook";
import { useGetUserQuery } from "../../store/RT_query/query";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { deleteThank } from "../../store/thanks/delete/delete-Thanks";
import type { UserResponseType } from "./UserInterface";

const UserList = () => {
  const { data, isLoading, isError, refetch } = useGetUserQuery();

 

const dispatch = useAppDispatch();

const handleDelete = async (user:UserResponseType) => {
    const action = await dispatch(deleteThank({ role: "user", sendData: user }));
    if (deleteThank.fulfilled.match(action)) {
      refetch(); 
    } else {
      alert("წაშლა ვერ განხორციელდა");
    }
  };

  if (isLoading) return <div>იტვირთება...</div>;
  if (isError) return <div>დაფიქსირდა შეცდომა!</div>;


  return (
    <Box p={4}>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
      >
        {data?.map((user) => (
          <Card
            key={user.id}
            sx={{
              width: 320,
              display: 'flex',
              flexDirection: "column",
              alignItems: 'center',
              padding: 3,
              borderRadius: 3,
              backgroundColor: '#1e1e1e',
              color: '#fff',
              boxShadow: 5,
              flexShrink: 0,
            }}
          >
            <Avatar
              src={user.profileImage}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{
                width: 200,
                height: 200,
                border: '4px solid #1976d2',
                boxShadow: '0 0 20px rgba(25, 118, 210, 0.6)',
                mb: 2,
              }}
            />

            <CardContent sx={{ padding: 0, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2"><strong>პირადი ნომერი:</strong> {user.pid}</Typography>
              <Typography variant="body2"><strong>ქვეყანა:</strong> {user.country}</Typography>
              <Typography variant="body2"><strong>ქალაქი:</strong> {user.city}</Typography>
              <Typography variant="body2"><strong>ქუჩა:</strong> {user.street}</Typography>
              <Typography variant="body2"><strong>ელ-ფოსტა:</strong> {user.email}</Typography>
              <Typography variant="body2"><strong>ტელეფონი:</strong> {user.phoneNumber}</Typography>
              <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(user)}
              sx={{ mt: 2 }}
            >
              წაშლა
            </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default UserList;

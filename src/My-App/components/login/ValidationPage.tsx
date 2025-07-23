import { useEffect } from 'react';
import { useGetAdminQuery, useGetCouriersQuery, useGetUserQuery } from '../../store/RT_query/query';
import LogonPage from './LogonPage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/ReduxHook';
import { setUser } from '../../store/autorisation/Autorisation';

const ValidationPage = () => {
  const { data: users = [], isLoading: usersLoading } = useGetUserQuery();
  const { data: couriers = [], isLoading: couriersLoading } = useGetCouriersQuery();
  const { data: admins = [], isLoading: adminsLoading } = useGetAdminQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useAppSelector(state => state.autorisation.user);


  useEffect(() => {
    if (user) {
      if (user.role === 'user') navigate('/user/userProfile');
      else if (user.role === 'courier') navigate('/courier/CouriersProfile');
      else if (user.role === 'admin') navigate('/admin/adminProfile');
    }
  }, [user, navigate]);


  const handleLogin = (userData: typeof user) => {
    dispatch(setUser(userData)); 
  };

  if (usersLoading || couriersLoading || adminsLoading) return <h1>Loading...</h1>;

  return (
    <LogonPage
      admins={admins}
      couriers={couriers}
      users={users}
      identificiren={handleLogin} 
    />
  );
};

export default ValidationPage;

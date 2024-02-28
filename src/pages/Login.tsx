import { Button, Row } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/Form/PHForm';
import PHInput from '../components/Form/PHInput';
const Login = () => {
  const Navigate = useNavigate()
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   },
  // });
  const defaultValues = {
    userId: 'A-0002',
    password: 'admin123',
  };
  const [login, ] = useLoginMutation();
  const onSubmit = async (data :FieldValues) => {
   const toastId = toast.loading('loading in')
    try{
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken )as TUser;
      
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Login success',{id:toastId, duration:2000})
      Navigate(`/${user.role}/dashboard`)
    }catch(err){
      toast.error('Something went wrong',{id:toastId, duration:2000})
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;

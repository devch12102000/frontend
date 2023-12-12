import { useNavigate } from "react-router-dom";
import { appActions } from "../../../../store";
import Grid from '@mui/material/Grid';
import { Button, Form, Input} from 'antd';
import "../UserLogin/style.scss"

const Register = () => {

    const navigate = useNavigate();
    const register = appActions((actions: any) => actions.UserAuthModel.register);

    const onFinish = (values: any) => {
        register(values).then((res:any)=>{
            if(res != "error"){
                navigate('/login');
            }

        }).catch((error:any)=>{
            console.log(error);
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className='login-main-conatiner'>
            <Grid container className='form-container' xs={12} sm={12} md={3} lg={3} xl={3}>
                <Form
                    name="register"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='form-element-conatiner'>
                        {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='logo-container'>
                            <img className='img-size' src={logo} alt="Logo" />
                        </Grid> */}
                        <Grid className='login-heading'>
                            <span>Register</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input valid Username!' }]}
                            >
                                <Input placeholder='Username' />
                            </Form.Item>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input valid email!' }]}
                            >
                                <Input placeholder='Email' />
                            </Form.Item>
                        </Grid>
                        <Grid className='margin-top'>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input valid password!' }]}
                                >
                                    <Input.Password placeholder='Password' />
                                </Form.Item>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Button className='submit-btn' type="primary" htmlType="submit"  >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Form>
            </Grid>
        </div>
    )

}

export default Register;
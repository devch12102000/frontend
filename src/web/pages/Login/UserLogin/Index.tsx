import { useNavigate } from "react-router-dom";
import { appActions } from "../../../../store";
import Grid from '@mui/material/Grid';
import { Button, Checkbox, Form, Input} from 'antd';
import "./style.scss";



const Index = () => {
    const navigate = useNavigate();
    const login = appActions((actions: any) => actions.UserAuthModel.login);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        login(values).then(()=>{
            navigate('/welcome');

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
                    name="basic"
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
                            <span>LOGIN</span>
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
                            <Grid className='action-conatainer'>
                                <Checkbox><span>Remember me</span></Checkbox>
                                {/* <Link><span>Forgot Password?</span></Link> */}
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Button className='submit-btn' type="primary" htmlType="submit"  >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Form>
            </Grid>
        </div>
    );
}

export default Index;
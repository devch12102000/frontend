import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { appActions } from "../../../store";
import { Button, Form, Input } from 'antd';
// import "./style.scss";
import { cloneDeep } from 'lodash';


const CreateAwards = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    const url = window.location.pathname;
    const [form] = Form.useForm();
    let editRecord:any = {};
    const getContactByID = appActions((action: any) => action.ContactsModel.getContactByID);
    const createContact = appActions((action: any) => action.ContactsModel.createContact);
    const updateContact = appActions((action: any) => action.ContactsModel.updateContact);
    // const saveAward = appActions((actions: any) => actions.AwardModel.saveAward);
    // const updateAward = appActions((actions: any) => actions.AwardModel.updateAward);

    const onFinish = (values: any) => {
        let formObj = cloneDeep(values);
        if(id){
            updateContact({...formObj, "id":id}).then((res:any)=>{
                if(res != "error"){
                    navigate('/contacts');
                }
                }) 
        }else{
            createContact(formObj).then((res:any)=>{
                if(res != "error"){
                    navigate('/contacts');
                }
                })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if(id != undefined){
            getContactByID(id).then((res: any) => {
                const {data} = res;
                console.log("res", data)
                form.setFieldsValue(data);
            })
        } 
    },[])
    

    return (
        <div className='add-case-study-section'>
            <Grid container className='align-item-center headingSection'>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className='heading'>
                        <h6>{url.includes("edit") ? 'Update Contact' : 'Create Contact'}</h6>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="form-elements-wrapper">
                    <Form
                        name="basic"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    initialValue={editRecord && editRecord.title ? editRecord.title : ''}
                                    rules={[{ required: true, message: 'Please input name!' }]}
                                >
                                    <Input placeholder='Name' />
                                </Form.Item>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    initialValue={editRecord && editRecord.title ? editRecord.title : ''}
                                    rules={[{ required: true, message: 'Please input email!' }]}
                                >
                                    <Input placeholder='Email' />
                                </Form.Item>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    initialValue={editRecord && editRecord.title ? editRecord.title : ''}
                                    rules={[{ required: true, message: 'Please input phone!' }]}
                                >
                                    <Input placeholder='Phone' />
                                </Form.Item>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item >
                                         <Button className='submit-btn' type="primary" htmlType="submit"  >
                                         {url.includes("edit") ? "Update" : "Create" }
                                     </Button>
                                     <span>  </span>
                                    <Button className='submit-btn' type="primary" onClick={() => navigate('/contacts')}  >
                                            Cancel
                                        </Button>
                                </Form.Item>
                                <Button  type="primary"  >
                                    Proceed to payment
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </div>
            </Grid>
        </div>
    );
}

export default CreateAwards;
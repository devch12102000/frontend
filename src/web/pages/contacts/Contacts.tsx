import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, Form, Input, Modal, Table } from "antd";
import { appActions } from "../../../store";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../widgets/loader/Loader";
// import "./style.scss";
import moment from "moment";

const Awards = () => {
  const [form] = Form.useForm();
  const [showActionList, setShowActionList] = useState("");
  const [loadChanges, setLoadChanges] = useState(true);
  const [searchFeature, setSearchFeature] = useState(false);

  const getAllContacts = appActions(
    (actions: any) => actions.ContactsModel.getAllContacts
  );
  const userCreds = appActions((state: any) => state.UserAuthModel.userCreds);
  // const searchAwards = appActions((actions: any) => actions.AwardModel.searchAwards);
  // const deleteAwards = appActions((actions: any) => actions.AwardModel.deleteAward);
  // const updateAward = appActions((actions: any) => actions.AwardModel.updateAward);
  // const setStage = appActions((actions: any) => actions.AppModel.setAward);
  // const fetchStage = appState((state: any) => state.AppModel.award)
  const [dataSource, setDataSource] = useState<any>({});
  const [pageNo, setPageNo] = useState(1);

  let Status = "";

  useEffect(() => {
    getAllContacts().then((res: any) => {
        console.log("res", res.data)
      setDataSource(res);
    });
    setTimeout(() => {
      setLoadChanges(false);
    }, 1000);
  }, []);

  const handlePaginationChange = (
    pagination: any,
    filters: any,
    sorter: any
  ) => {
    // setStage(pagination.current)
    if (searchFeature) {
      let param = {
        page: pagination.current,
        pageSize: pagination.pageSize,
        title: form.getFieldValue("search_news_title"),
        status: form.getFieldValue("search_news_status"),
      };
      // searchAwards(param)
      setPageNo(pagination.current);
    } else {
      let param = {
        page: pagination.current,
        pageSize: pagination.pageSize,
      };
      // fetchAwards(param);
      setPageNo(pagination.current);
    }
  };
  const updateStatus = (status: string) => {
    Status = status;
  };
  const updaterecord = (record: any) => {
    if (Status != "") {
      record.status = Status;
      // updateAward(record).then(() => {
      //     let param ={'page': fetchStage};
      //     searchAwards(param);
      // });
    }
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = (id: string) => {
    setLoadChanges(true);
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure want to delete",
      // onOk: () => { deleteAwards(id)},
      onOk: () => {},

      okText: "confirm",
      cancelText: "cancel",
    });
    setLoadChanges(false);
  };
  const handleSubmit = (pagination: any) => {
    let param = {
      page: pagination.current,
      pageSize: pagination.pageSize,
      title: form.getFieldValue("title"),
      status: form.getFieldValue("status"),
    };
    console.log(param);
    setSearchFeature(true);
    // searchAwards(param);
  };

  const handleClear = (pagination: any) => {
    let param = {
      page: 1,
      pageSize: pagination.pageSize,
    };
    form.resetFields();
    setSearchFeature(false);
    // fetchAwards(param);
  };
  const handleSearchStatus = (status: string) => {
    form.setFieldsValue({ status: status });
  };
  const handleSearchTitle = (e: any) => {
    form.setFieldsValue({ title: e.target.value });
  };

  // const dataSource = [
  //     {
  //         key: '1',
  //         logo: 'bikes24',
  //         status: "Publish",
  //         dataPublished: '2022-06-12'
  //     }
  // ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact no.",
      dataIndex: "phone",
      key: "phone",
    },
    // {
    //     title: 'Award Logo',
    //     dataIndex: 'logo_cdn',
    //     key: 'logo_cdn',
    //     render: (name: any, record: any) => {
    //         return (
    //             <div className='action'>
    //                 <img className='imageTable' src={record.logo_cdn} />
    //             </div>
    //         )
    //     },
    // },
    // {
    //     title: 'Status',
    //     dataIndex: 'status',
    //     key: 'status',
    //     render: (name: any, record: any) => {
    //         return (
    //             <div className='action'>
    //                 <Select className='statusTable' value={record.status} options={} onChange={updateStatus} onSelect={()=>{updaterecord(record)}} >
    //                     <Option value={Statuses?.Publish}>Publish</Option>
    //                     <Option value={Statuses?.Pending}>Pending</Option>
    //                     <Option value={Statuses?.Draft}>Draft</Option>
    //                 </Select>
    //             </div>
    //         )
    //     }
    // },
    {
      title: "Data Published",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (record: any) => {
        return (
          <div>{moment(record.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (name: any, record: any) => {
        return (
          <div className="action">
            <MoreVertIcon
              className="icon"
              onClick={() => openActionList(record)}
            />
            <div
              className={`popover-menu ${
                showActionList === record["_id"] ? "show" : ""
              }`}
            >
              <div className="popover-item">
                <Link
                  to={`/edit/contact/${record["_id"]}`}
                  state={{ editRecord: record }}
                >
                  <EditIcon className="EditIcon icons" />
                  Edit
                </Link>
              </div>
              <div
                className="popover-item"
                onClick={() => handleDelete(record["_id"])}
              >
                <DeleteIcon
                  className="deleteIcon icons"
                  style={{ cursor: "pointer" }}
                />
                Delete
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  const openActionList = (record: any) => {
    if (showActionList === record["_id"]) {
      console.log("if");
      setShowActionList("");
    } else {
      console.log("else");

      setShowActionList(record["_id"]);
    }
  };

  return (
    <div className="case-study-section">
      <Grid container className="align-item-center headingSection">
        <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
          <div className="heading">
            <h6>Award List</h6>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
          <div className="btnGroup">
            <Button className="submit-btn" type="primary">
              <Link to="/create/contact" style={{ textDecoration: "none" }}>
                CREATE
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="form-elements-wrapper">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="customRow"
              style={{ marginTop: "4px" }}
            >
              <Grid item xs={12} sm={12} md={9.8} lg={9.8} xl={9.8}>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: false,
                      message: "Please input your full name!",
                    },
                  ]}
                >
                  <Input placeholder="Title" onChange={handleSearchTitle} />
                </Form.Item>
              </Grid>
              {/* <Grid item xs={12} sm={12} md={4.5} lg={4.5} xl={4.5}>
                                <Form.Item
                                    name="status"
                                    rules={[{ required: false }]}
                                >
                                    <Select className='statusTable' placeholder='Search Status' onChange={handleSearchStatus} >
                                        <Option value={Statuses?.Publish}>Publish</Option>
                                        <Option value={Statuses?.Pending}>Pending</Option>
                                        <Option value={Statuses?.Draft}>Draft</Option>
                                    </Select>
                                </Form.Item>
                            </Grid> */}

              <Grid item xs={12} sm={12} md={1.2} lg={1.2} xl={1.2}>
                <Form.Item>
                  <Button type="primary" onClick={handleSubmit}>
                    SEARCH
                  </Button>
                </Form.Item>
              </Grid>
              <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                <Form.Item>
                  <Button type="primary" onClick={handleClear}>
                    CLEAR
                  </Button>
                </Form.Item>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="table-elements-wrapper">
          {loadChanges ? (
            <Loader />
          ) : (
            <Table
              loading={{ indicator: <Loader />, spinning: loadChanges }}
              dataSource={dataSource?.data}
              columns={columns}
              className="table"
              pagination={{
                position: ["bottomCenter"],
                defaultCurrent: 1,
                total: dataSource?.total,
                showTotal: (total) => `Total : ${total}`,
              }}
              onChange={handlePaginationChange}
            />
          )}
        </div>
      </Grid>
    </div>
  );
};

export default Awards;

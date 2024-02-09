import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, Modal, Table, TablePaginationConfig, TableProps } from "antd";
import { appActions } from "../../../store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../widgets/loader/Loader";
import moment from "moment";
// import "./style.scss";

const Awards = () => {
  const [loadChanges, setLoadChanges] = useState(true);

  const getAllContacts = appActions(
    (actions: any) => actions.ContactsModel.getAllContacts
  );
  const deleteContact = appActions(
    (actions: any) => actions.ContactsModel.deleteContact
  );
  const [dataSource, setDataSource] = useState<any>({});
  const [pageSize, _setPageSize] = useState(2);
  const [pageNo, setPageNo] = useState(1);
  let getAllContactsParams = { pageNo, pageSize }

  useEffect(() => {

    getAllContacts(getAllContactsParams).then((res: any) => {
      setDataSource(res);
      setLoadChanges(false);
    });
    // setTimeout(() => {
    //   setLoadChanges(false);
    // }, 1000);
  }, []);

  const handlePaginationChange: TableProps<any>['onChange'] = (
    pagination: any,
  ) => {
      const current = (pagination as TablePaginationConfig).current || pageNo;
      setPageNo(current);
      getAllContactsParams = { "pageNo": current, pageSize }

      getAllContacts(getAllContactsParams).then((res: any) => {
        setDataSource(res);
        // setLoadChanges(false);
      });
    // }
  };

  const handleDelete = (id: string) => {
    setLoadChanges(true);
    Modal.confirm({
      title: "Confirm",
      content: "Are you sure want to delete",
      onOk: () => { 
        deleteContact(id).then(() => {
          getAllContacts().then((res: any) => {
          setDataSource(res);
          setLoadChanges(false);
        });        })
        console.log(id)
      },
      okText: "confirm",
      cancelText: "cancel",
    });
    setLoadChanges(false);
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
      render: (record: any) => {
        return (
          <div className="action">
            
            <div
              className={`popover-menu`}
            >
              <div className="popover-item">
                <Link
                  to={`/edit/contact/${record["_id"]}`}
                  state={{ editRecord: record }}
                >
                  <EditIcon className="EditIcon icons" />
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
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="case-study-section">
      <Grid container className="align-item-center headingSection">
        <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
          <div className="heading">
            <h6>Contact List</h6>
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
      {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
      </Grid> */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: "4px"}}>
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
                pageSize: pageSize,
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

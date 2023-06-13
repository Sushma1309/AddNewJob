
import React, { useState ,useEffect  } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Avatar_04, Avatar_03,PlaceHolder} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import Offcanvas from '../../../Entryfile/offcanvance';

const Expenses = () => {
  const [data, setData] = useState([
    {id:1,item:"Dell Laptop",purchasefrom:"Amazon",purchasedate:"5 Jan 2019",image:Avatar_04,name:"John Doe",amount:"1215",paidby:"Cash",status:"Active"},
         {id:2,item:"Mac System",purchasefrom:"Amazon",purchasedate:"5 Jan 2019",image:Avatar_03,name:"Richard Miles",amount:"1215",paidby:"Cheque",status:"Inactive"},
  ]);
  useEffect( ()=>{
    if($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
      });
    }
  });  
  
    const columns = [
           
      {
        title: 'Item',
        dataIndex: 'item',
        render: (text, record) => (            
        <strong>{text}</strong>
          ), 
        sorter: (a, b) => a.item.length - b.item.length,
      },     
      {
        title: 'Purchase From',
        dataIndex: 'purchasefrom',
        sorter: (a, b) => a.purchasefrom.length - b.purchasefrom.length,
      },     
      {
        title: 'Purchase Date',
        dataIndex: 'purchasedate',
        sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
      },
      {
        title: 'Purchased By',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
              <Link to="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></Link>
              <Link to="/app/profile/employee-profile">{text} <span>{record.role}</span></Link>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },      
      {
        title: 'Amount',
        dataIndex: 'amount',
        render: (text, record) => (
        <span>$ {text}</span>
          ),
        sorter: (a, b) => a.amount.length - b.amount.length,
      },

      {
        title: 'Paid By',
        dataIndex: 'paidby', 
        sorter: (a, b) => a.paidby.length - b.paidby.length,
      },  
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className={text==="Pending" ?"fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-success"} /> {text}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
              </div>
          </div>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
                  <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_expense"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_expense"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
            </div>
          ),
      },
    ]
      return (
        <>
        <div className="page-wrapper">
            <Helmet>
                <title>Expenses - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Expenses</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Expenses</li>
                </ul>
              </div>
              <div className="col-auto float-end ms-auto">
                <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_expense"><i className="fa fa-plus" /> Add Expense</a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Search Filter */}
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Item Name</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div className="form-group form-focus select-focus">
                <select className="select floating"> 
                  <option> -- Select -- </option>
                  <option>Loren Gatlin</option>
                  <option>Tarah Shropshire</option>
                </select>
                <label className="focus-label">Purchased By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
              <div className="form-group form-focus select-focus">
                <select className="select floating"> 
                  <option> -- Select -- </option>
                  <option> Cash </option>
                  <option> Cheque </option>
                </select>
                <label className="focus-label">Paid By</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div className="form-group form-focus select-focus">
                <div>
                  <input className="form-control floating datetimepicker" type="date" />
                </div>
                <label className="focus-label">From</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div className="form-group form-focus select-focus">
                <div>
                  <input className="form-control floating datetimepicker" type="date" />
                </div>
                <label className="focus-label">To</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <a href="#" className="btn btn-success btn-block w-100"> Search </a>  
            </div>     
          </div>
          {/* /Search Filter */}
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
               <Table className="table-striped"
                  pagination= { {total : data.length,
                    showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                  style = {{overflowX : 'auto'}}
                  columns={columns}                 
                  // bordered
                  dataSource={data}
                  rowKey={record => record.id}
                  // onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Add Expense Modal */}
        <div id="add_expense" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Expense</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Item Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchase From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchase Date</label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchased By </label>
                        <select className="select">
                          <option>Daniel Porter</option>
                          <option>Roger Dixon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Amount</label>
                        <input placeholder="$50" className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Paid By</label>
                        <select className="select">
                          <option>Cash</option>
                          <option>Cheque</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="select">
                          <option>Pending</option>
                          <option>Approved</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Attachments</label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="attach-files">
                    <ul>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <a href="#" className="fa fa-close file-remove" />
                      </li>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <a href="#" className="fa fa-close file-remove" />
                      </li>
                    </ul>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Expense Modal */}
        {/* Edit Expense Modal */}
        <div id="edit_expense" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Expense</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Item Name</label>
                        <input className="form-control" defaultValue="Dell Laptop" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchase From</label>
                        <input className="form-control" defaultValue="Amazon" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchase Date</label>
                        <div><input className="form-control datetimepicker" type="date" /></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Purchased By </label>
                        <select className="select">
                          <option>Daniel Porter</option>
                          <option>Roger Dixon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Amount</label>
                        <input placeholder="$50" className="form-control" defaultValue="$10000" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Paid By</label>
                        <select className="select">
                          <option>Cash</option>
                          <option>Cheque</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="select">
                          <option>Pending</option>
                          <option>Approved</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Attachments</label>
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="attach-files">
                    <ul>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <a href="#" className="fa fa-close file-remove" />
                      </li>
                      <li>
                        <img src={PlaceHolder} alt="" />
                        <a href="#" className="fa fa-close file-remove" />
                      </li>
                    </ul>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Expense Modal */}
        {/* Delete Expense Modal */}
        <div className="modal custom-modal fade" id="delete_expense" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Expense</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <a href="" className="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div className="col-6">
                      <a href="" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Delete Expense Modal */}
      </div>
      <Offcanvas/>
        </>
        
      );
   
}

export default Expenses;

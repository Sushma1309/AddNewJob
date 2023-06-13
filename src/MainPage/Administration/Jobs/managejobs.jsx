/**
 * Signin Firebase
 */

import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import Offcanvas from '../../../Entryfile/offcanvance';

const Managedjobs = () => {

  const [data, setData] = useState([
    {id:1,jobtitle:"Web Designer",preferredindustry:"Development",joblocation:"Bangalore",jobtype:"Full Time",companyname:"Resource Mojo",gender:"Male",experience:"3",salary:"10k",startdate:"",enddate:"",status:"Open",workingtime:"",applicants:"3 Candidates"},
    {id:2,jobtitle:"Web Developer",preferredindustry:"Designing",joblocation:"Mangalore",jobtype:"Part Time",companyname:"Resource Mojo",gender:"Female",experience:"2",salary:"20k",startdate:"",enddate:"",status:"Closed",workingtime:"",applicants:"2 Candidates"},
    {id:3,jobtitle:"Android Developer",preferredindustry:"Android",joblocation:"Other",jobtype:"Other",companyname:"Resource Mojo",gender:"Any",experience:"1",salary:"30k",startdate:"",enddate:"",status:"Cancelled",workingtime:"",applicants:"1 Candidates"},
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
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: 'Job Title',
        dataIndex: 'jobtitle',
        render: (text, record) => (            
            <Link to="/app/administrator/job-details">{text}</Link>
          ), 
          sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
      },
    
      {
        title: 'Preferred Industry',
        dataIndex: 'preferredindustry',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="Web Development" ? "fa fa-dot-circle-o text-info" : text==="Application Development" ?
               "fa fa-dot-circle-o text-success" : text==="IT Management" ? "fa fa-dot-circle-o text-danger" : 
               text==="Accounts Management" ? "fa fa-dot-circle-o text-danger" : text==="Support Management" ? "fa fa-dot-circle-o text-danger" :
               text==="Marketing" ? "fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Web Development</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Application Development</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> IT Management</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Accounts Management</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Support Management</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Marketing</a>
            </div>
        </div>
          ),
        sorter: (a, b) => a.preferredindustry.length - b.preferredindustry.length,
      },
      {
        title: 'Job Location',
        dataIndex: 'joblocation',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="Mangalore" ? "fa fa-dot-circle-o text-info" : text==="Bangalore" ?
               "fa fa-dot-circle-o text-success" : text==="Other" ? "fa fa-dot-circle-o text-danger" : 
                "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Bangalore</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Mangalore</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
            </div>
        </div>
          ),
        sorter: (a, b) => a.joblocation.length - b.joblocation.length,
      },
      {
        title: 'Job Type',
        dataIndex: 'jobtype',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="Full Time" ? "fa fa-dot-circle-o text-info" : text==="Part Time" ?
               "fa fa-dot-circle-o text-success" : text==="Internship" ? "fa fa-dot-circle-o text-danger" : 
                "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
            </div>
        </div>
          ),
        sorter: (a, b) => a.jobtype.length - b.jobtype.length,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyname',
        sorter: (a, b) => a.companyname.length - b.companyname.length,
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <i className={text==="Male" ? "fa fa-dot-circle-o text-info" : text==="Female" ?
               "fa fa-dot-circle-o text-success" : text==="Any" ? "fa fa-dot-circle-o text-danger" : 
                "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Male</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Female</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Any</a>
            </div>
        </div>
          ),
        sorter: (a, b) => a.gender.length - b.gender.length,
      },
      {
        title: 'Experience',
        dataIndex: 'experience',
        sorter: (a, b) => a.experience.length - b.experience.length,
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        sorter: (a, b) => a.salary.length - b.salary.length,
      },
      {
        title: 'Start Date',
        dataIndex: 'startdate',
        sorter: (a, b) => a.startdate.length - b.startdate.length,
      },
    
      {
        title: 'End Date',
        dataIndex: 'enddate',
        sorter: (a, b) => a.enddate.length - b.enddate.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
          <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
               "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
          </div>
        </div>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Working Time',
        dataIndex: 'workingtime',
        sorter: (a, b) => a.workingtime.length - b.workingtime.length,
      },
      {
        title: 'Applicants',
        dataIndex: 'applicants',
        render: (text, record) => (
          <Link to="/app/administrator/job-applicants" className="btn btn-sm btn-primary">{text}</Link>
          ),
        sorter: (a, b) => a.applicants.length - b.applicants.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-end">
              <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
      }
    ]
      return (
        <>
        <div className="page-wrapper">
        <Helmet>
            <title>Jobs - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Jobs</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">Jobs</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_job"><i className="fa fa-plus" /> Add Job</a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
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
      {/* Add Job Modal */}
      <div id="add_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Job</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Title</label>
                       <input className="form-control" type="text" defaultValue="Web Developer" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Preferred Industry</label>
                       <select className="select">
                         <option>-</option>
                         <option >Web Development</option>
                         <option>Application Development</option>
                         <option>IT Management</option>
                         <option>Accounts Management</option>
                         <option>Support Management</option>
                         <option>Marketing</option>
                       </select>
                     </div>
                   </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Location</label>
                       <select className="select">
                         <option>-</option>
                         <option >Mangalore</option>
                         <option>Bangalore</option>
                         <option>Other</option>
                       </select>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Type</label>
                       <select className="select">
                         <option >Full Time</option>
                         <option>Part Time</option>
                         <option>Internship</option>
                         <option>Temporary</option>
                         <option>Remote</option>
                         <option>Others</option>
                       </select>
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Company name</label>
                       <input className="form-control" type="text" defaultValue="California" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Gender</label>
                       <select className="select">
                         <option>-</option>
                         <option >Male</option>
                         <option>Female</option>
                         <option>Any</option>
                       </select>
                     </div>
                   </div>
                   </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Experience</label><br />
                       <input type="text" className="form-control" defaultValue="" />
                     </div>
                   </div>
                   <div className="col-md-6">
                   <div className="form-group">
                       <label>Salary</label>
                       <input type="text" className="form-control" defaultValue="" />
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Start date</label>
                       <input type="date" className="form-control" defaultValue="" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>End date</label>
                       <input type="date" className="form-control" defaultValue="" />
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                     <label>Status</label>
                       <select className="select">
                         <option >Open</option>
                         <option>Closed</option>
                         <option>Cancelled</option>
                       </select>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Working time</label>
                       <input type="text" className="form-control datetimepicker" defaultValue="" />
                     </div>
                   </div>
                 </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Job Modal */}
      {/* Edit Job Modal */}
      <div id="edit_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <button type="button" className="close" data-bs-dismiss="modal">×</button>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Title</label>
                       <input className="form-control" type="text" defaultValue="Web Developer" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Preferred Industry</label>
                       <select className="select">
                         <option>-</option>
                         <option >Web Development</option>
                         <option>Application Development</option>
                         <option>IT Management</option>
                         <option>Accounts Management</option>
                         <option>Support Management</option>
                         <option>Marketing</option>
                       </select>
                     </div>
                   </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Location</label>
                       <select className="select">
                         <option>-</option>
                         <option >Mangalore</option>
                         <option>Bangalore</option>
                         <option>Other</option>
                       </select>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Job Type</label>
                       <select className="select">
                         <option >Full Time</option>
                         <option>Part Time</option>
                         <option>Internship</option>
                         <option>Temporary</option>
                         <option>Remote</option>
                         <option>Others</option>
                       </select>
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Company name</label>
                       <input className="form-control" type="text" defaultValue="California" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Gender</label>
                       <select className="select">
                         <option>-</option>
                         <option >Male</option>
                         <option>Female</option>
                         <option>Any</option>
                       </select>
                     </div>
                   </div>
                   </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Experience</label><br />
                       <input type="text" className="form-control" defaultValue="" />
                     </div>
                   </div>
                   <div className="col-md-6">
                   <div className="form-group">
                       <label>Salary</label>
                       <input type="text" className="form-control" defaultValue="" />
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Start date</label>
                       <input type="date" className="form-control" defaultValue="" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>End date</label>
                       <input type="date" className="form-control" defaultValue="" />
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-6">
                     <div className="form-group">
                     <label>Status</label>
                       <select className="select">
                         <option >Open</option>
                         <option>Closed</option>
                         <option>Cancelled</option>
                       </select>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="form-group">
                       <label>Working time</label>
                       <input type="text" className="form-control datetimepicker" defaultValue="" />
                     </div>
                   </div>
                 </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Job Modal */}
      {/* Delete Job Modal */}
      <div className="modal custom-modal fade" id="delete_job" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Job</h3>
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
      {/* /Delete Job Modal */}
    </div>
    <Offcanvas/>
        </> 
        
      );
}

export default Managedjobs;

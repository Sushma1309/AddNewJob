/**
 * Blank Page
 */
import React, { useState,useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Rate from "/skill";

import { Table } from 'antd';
import 'antd/dist/antd.css';
// import {switch} from 'antd';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import Offcanvas from '../../../Entryfile/offcanvance';
import JoditEditor from 'jodit-react';
import {Multiselect} from 'multiselect-react-dropdown';

const userData = [
	{ name: "NodeJS" },
	{ name: "React" },
	{ name: "MongoDB" },
	{ name: "Express" },
	{ name: "HTML" }
  ];

const Blank = () => {
	
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
	useEffect( ()=>{
		if($('.select').length > 0) {
		  $('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		  });
		}
	  });  
	return (
		<>
		
		<div className="page-wrapper">
		<Helmet>
			<title>AddJobs - HRMS Admin Template</title>
			<meta name="description" content="Login page"/>					
		</Helmet>
	  {/* Page Content */}
	  <div className="content container-fluid">
		{/* Page Header */}
		<div className="page-header">
		  <div className="row align-items-center">
			<div className="col">
			  <h3 className="page-title">Add Job</h3>
			  <ul className="breadcrumb">
				<li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
				<li className="breadcrumb-item active">Add Jobs</li>
			  </ul>
			</div>
		  </div>
		  </div>
		  </div>
		
	  {/* /Page Content */}
	  {/* Add Job Modal */}
			<div className="modal-body">
			<form>
				 <div className="row">
				   <div className="col-md-6">
					 <div className="form-group">
					   <label>Job Title</label>
					   <input className="form-control" type="text" placeholder="Enter the Job Title" defaultValue="" />
					 </div>
				   </div>
				   <div className="col-md-6">
					 <div className="form-group">
					   <label>Preferred Industry</label>
					   <select className="select">
						 <option>Select one</option>
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
					   <input className="form-control" type="text" placeholder='Enter the company name' defaultValue="" />
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
					   <select className="form-control select" name="select" id="select">
                    <option value="" disabled selected>
                            Min
                        </option>
                    <option value="1">opt1</option>
                            <option value="2">opt1</option>
                            <option value="3">opt1</option>
                            <option value="4">other</option>
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;
                    <select className="form-control select" name="select" id="select">
                    <option value="" disabled selected>
                            Max
                        </option>
                    <option value="1">opt1</option>
                            <option value="2">opt1</option>
                            <option value="3">opt1</option>
                            <option value="4">other</option>
                    </select>
					 </div>
				   </div>
				   <div className="col-md-6">
				   <div className="form-group">
					   <label>Salary</label><br></br>
					   <select className="form-control select col-md-3" name="select" id="select">
                    <option value="" disabled selected>
                            Min
                        </option>
                    <option value="1">opt1</option>
                            <option value="2">opt1</option>
                            <option value="3">opt1</option>
                            <option value="4">other</option>
                    </select>&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;
                    <select className="form-control select" name="select" id="select">
                    <option value="" disabled selected>
                            Max
                        </option>
                    <option value="1">opt1</option>
                            <option value="2">opt1</option>
                            <option value="3">opt1</option>
                            <option value="4">other</option>
                    </select>
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
						<option>Select one</option>
						 <option >Open</option>
						 <option>Closed</option>
						 <option>Cancelled</option>
					   </select>
					 </div>
				   </div>
				   <div className="col-md-6">
					 <div className="form-group">
					   <label>Working time</label>
					   <input type="text" className="form-control datetimepicker" placeholder='Enter the working time' defaultValue="" />
					 </div>
				   </div>
				 </div>
				 <div className="row">
				  <div className="col-md-12">
					<div className="form-group">
					
        <label>Key Skills</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
				  </div>
				</div>
				</div>
				<div className="row">
				  <div className="col-md-12">
					<div className="form-group">
					  <label>Description</label>
					  {/* <textarea className="form-control" defaultValue={""} /> */}
					  <div><JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => setContent(newContent)}
		/></div>
					</div>
				  </div>
				</div>
				<div className="submit-section">
				  <button className="btn btn-primary submit-btn">Submit</button>
				</div>
			  </form>
			</div>
		  </div>

	<Offcanvas/>
		</> 
		
	  );
}
export default Blank ;
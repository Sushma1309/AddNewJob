/**
 * Blank Page
 */
import React, { useState,useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import Offcanvas from '../../../Entryfile/offcanvance';

const Blank = () => {
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
		
	<Offcanvas/>
		</> 
		
	  );
}
export default Blank ;
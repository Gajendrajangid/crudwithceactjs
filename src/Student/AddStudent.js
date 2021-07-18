import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker'

import {NavLink} from 'react-router-dom'
export const AddStudent = () => {
    const [PalyerId, setPalyerId] = useState(0);
    const [PlayerName, setPlayerName] = useState('');
    const [Dob, setDob] = useState(new Date());
    const [Country, setCountry] = useState(0);
    const [PalyerType, setPalyerType] = useState(0);
    const [TotalRun, setTotalRun] = useState(0);
    const [TotalMatch, setTotalMatch] = useState(0);
    const [TotalFifty, setTotalFifty] = useState(0);
    const [TotalCentury, setTotalCentury] = useState(0);

    return (
        <div className="row col-md-8 mt-2">
            <div className="col-md-6 pl-0 mb-3">
                <h4>New Player</h4>
            </div>
            <div className="col-md-6 pr-0 mb-3 text-right">
                <NavLink type="button" className="btn btn-info ml-2 " exact to="/studentlist"><i className="fa fa-list mr-1" aria-hidden="true"></i>Player List</NavLink>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 mb-3">
                    <label htmlhtmlFor="PlayerName" className="form-label">Player Name</label>
                    <input type="text" value={PlayerName} onChange={(e) => setPlayerName(e.target.value)} className="form-control" placeholder="Player Name" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlhtmlFor="Dob" className="form-label">Date Of Birth</label>
                    <DatePicker className="form-control" 
                        value={Dob} onChange={setDob}
                    />
                    {/* <input type="text" value={Dob} onChange={(e) => setDob(e.target.value)} className="form-control" placeholder="Dob" /> */}
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlhtmlFor="Country" className="form-label">Country</label>
                    <select className="form-control form-select" value={Country} onChange={(e) => setCountry((e.target!=null?e.target.value:Country))} >
                        <option value="0">Please Select</option>
                        <option value="1">Afganisthan</option>
                        <option value="2">Australia</option>
                        <option value="3">Bangladesh</option>
                        <option value="4">England</option>
                        <option value="5">India</option>
                        <option value="6">Newzland</option>
                        <option value="7">Pakistan</option>
                        <option value="8">South Africa</option>
                        <option value="9">West Indies</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlhtmlFor="Country" className="form-label">Player Type</label>
                    <select className="form-control form-select" value={PalyerType} onChange={(e) => setPalyerType(e.target.value)} >
                        <option value="0">Please Select</option>
                        <option value="1">All-Rounder</option>
                        <option value="2">Betsman</option>
                        <option value="3">Bowler</option>
                        <option value="4">Wicket Keeper</option>
                    </select>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlhtmlFor="PlayerName" className="form-label">Total Match</label>
                    <input type="text" value={TotalMatch} onChange={(e) => setTotalMatch(e.target.value)} className="form-control" placeholder="Total Match" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlhtmlFor="PlayerName" className="form-label">Total Run</label>
                    <input type="text" value={TotalRun} onChange={(e) => setTotalRun(e.target.value)} className="form-control" placeholder="Total Run" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlhtmlFor="PlayerName" className="form-label">Total Century</label>
                    <input type="text" value={TotalCentury} onChange={(e) => setTotalCentury(e.target.value)} className="form-control" placeholder="Total Century" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlhtmlFor="PlayerName" className="form-label">Total Fifty</label>
                    <input type="text" value={TotalFifty} onChange={(e) => setTotalFifty(e.target.value)} className="form-control" placeholder="Total Fifty" />
                </div>
                <hr />
                <div className="col-md-12 mb-3 pr-0 text-right">
                    <button type="button" className="btn btn-primary mr-2">Save</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default AddStudent;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlayer } from "../actions/Players";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker'

import {NavLink} from 'react-router-dom'
export const AddPlayer = () => {
     const dispatch = useDispatch();
     const initialPlayersState = {
        PalyerId: 0,
        PlayerName: "as",
        Dob: new Date(),
        Country: 0,
        PalyerType: 0,
        TotalRun: 0,
        TotalMatch: 0,
        TotalFifty: 0,
        TotalCentury: 0
    };

  const [players, setplayer] = useState(initialPlayersState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setplayer({ ...players, [name]: value });
  };
  const handleDateInputChange = event => {
    setplayer({ ...players, ["Dob"]: event });
  };

  const savePlayer = (e) => {
    e.preventDefault();
    dispatch(createPlayer(players))
      .then(data => {
        setSubmitted(true);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const reset =(e) => {
    e.preventDefault();
    setplayer(initialPlayersState);
    setSubmitted(false);
  };
    return (
        <div className="row col-md-8 mt-2">
            <div className="col-md-6 pl-0 mb-3">
                <h4>New Player</h4>
            </div>
            <div className="col-md-6 pr-0 mb-3 text-right">
                <NavLink type="button" className="btn btn-info ml-2 " exact to="/playerlist"><i className="fa fa-list mr-1" aria-hidden="true"></i>Player List</NavLink>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 mb-3">
                    <label htmlFor="PlayerName" className="form-label">Player Name</label>
                    <input type="text"  required  value={players.PlayerName} onChange={handleInputChange}  name="PlayerName" className="form-control" placeholder="Player Name" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="players.Dob" className="form-label">Date Of Birth</label>
                    <DatePicker className="form-control"  name="Dob"  
                         required  value={players.Dob} onChange={handleDateInputChange}
                    />
                    {/* <input type="text" value={Dob} onChange={(e) => setDob(e.target.value)} className="form-control" placeholder="Dob" /> */}
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="players.Country" className="form-label">Country</label>
                    <select className="form-control form-select"   name="Country"  
                     required  value={players.Country} onChange={handleInputChange}
                     >
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
                    <label htmlFor="players.PalyerType" className="form-label">Player Type</label>
                    <select className="form-control form-select"  name="PalyerType"  
                     required  value={players.PalyerType} onChange={handleInputChange}>
                        <option value="0">Please Select</option>
                        <option value="1">All-Rounder</option>
                        <option value="2">Betsman</option>
                        <option value="3">Bowler</option>
                        <option value="4">Wicket Keeper</option>
                    </select>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="players.TotalMatch" className="form-label">Total Match</label>
                    <input type="text" required  name="TotalMatch"    value={players.TotalMatch} onChange={handleInputChange} className="form-control" placeholder="Total Match" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="players.TotalRun" className="form-label">Total Run</label>
                    <input type="text" required  name="TotalRun"    value={players.TotalRun} onChange={handleInputChange} className="form-control" placeholder="Total Run" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="players.TotalCentury" className="form-label">Total Century</label>
                    <input type="text" required  name="TotalCentury"    value={players.TotalCentury} onChange={handleInputChange} className="form-control" placeholder="Total Century" />
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="players.TotalFifty" className="form-label">Total Fifty</label>
                    <input type="text" required  name="TotalFifty"    value={players.TotalFifty} onChange={handleInputChange} className="form-control" placeholder="Total Fifty" />
                </div>
                <hr />
                <div className="col-md-12 mb-3 pr-0 text-right">
                    <button type="button" onClick={savePlayer} className="btn btn-primary mr-2">Save</button>
                    <button type="button" onClick={reset} className="btn btn-danger">Reset</button>
                </div>
            </div>
        </div>
    )
}
export default AddPlayer;

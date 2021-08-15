import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    retrievePlayer,
    findPlayerByName,
    deleteAllPlayer,
    deletePlayer
} from "../actions/Players";

import { NavLink } from 'react-router-dom'
export const PlayerList = () => {
    const players = useSelector(state => state.players);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrievePlayer());
    }, []);
    const removeAllPlayers = () => {
        dispatch(deleteAllPlayer())
            .then(response => {
                console.log(response);
                // refreshData();
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className="row mt-3">
            <div className="col-md-6 mb-3">
                <h4>Player List</h4>
            </div>
            <div className="col-md-6 mb-3 text-right">
                <NavLink type="button" className="btn btn-info ml-2 mr-2" exact to="/addPlayer"><i className="fa fa-plus mr-1" aria-hidden="true"></i>New Player</NavLink>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-danger">
                        <th scope="col">#</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Country</th>
                        <th scope="col">Palyer Type</th>
                        <th scope="col">Match</th>
                        <th scope="col">Run</th>
                        <th scope="col">Century</th>
                        <th scope="col">FIfty</th>
                    </tr>
                </thead>
                <tbody>
                    {players &&
                        players.map((player, index) => (
                            <tr key={index+1}>
                                <td scope="row">{index+1}</td>
                                <td scope="col">{player.PlayerName}</td>
                                <td scope="col">{player.Dob}</td>
                                <td scope="col">{player.CountryID}</td>
                                <td scope="col">{player.PlayerType}</td>
                                <td scope="col">{player.TotalMatch}</td>
                                <td scope="col">{player.TotalRun}</td>
                                <td scope="col">{player.TotalCentury}</td>
                                <td scope="col">{player.TotalFifty}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
export default PlayerList;

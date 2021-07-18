import React from 'react'

import {NavLink} from 'react-router-dom'
export const StudentList = () => {
    return (
        <div className="row mt-3">
            <div className="col-md-6 mb-3">
                <h4>Player List</h4>
            </div>
            <div className="col-md-6 mb-3 text-right">
                <NavLink type="button" className="btn btn-info ml-2 mr-2" exact to="/addstudent"><i className="fa fa-plus mr-1" aria-hidden="true"></i>New Player</NavLink>
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
                    <tr>
                        <td scope="row">1</td>
                        <td scope="col">Player Name</td>
                        <td scope="col">Date Of Birth</td>
                        <td scope="col">Country</td>
                        <td scope="col">Palyer Type</td>
                        <td scope="col">Match</td>
                        <td scope="col">Run</td>
                        <td scope="col">Century</td>
                        <td scope="col">FIfty</td>
                    </tr>
                    <tr>
                    <td scope="row">2</td>
                        <td scope="col">Player Name</td>
                        <td scope="col">Date Of Birth</td>
                        <td scope="col">Country</td>
                        <td scope="col">Palyer Type</td>
                        <td scope="col">Match</td>
                        <td scope="col">Run</td>
                        <td scope="col">Century</td>
                        <td scope="col">FIfty</td>
                    </tr>
                    <tr>
                    <td scope="row">3</td>
                        <td scope="col">Player Name</td>
                        <td scope="col">Date Of Birth</td>
                        <td scope="col">Country</td>
                        <td scope="col">Palyer Type</td>
                        <td scope="col">Match</td>
                        <td scope="col">Run</td>
                        <td scope="col">Century</td>
                        <td scope="col">FIfty</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default StudentList;

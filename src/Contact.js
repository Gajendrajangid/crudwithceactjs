import React from 'react'

export const Contact = () => {
    return (
        <div className="col-md-6">
            <h4>Contact Us:</h4><br />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br />
            <div className="col-md-12 mb-3 pr-0 text-right">
                    <button type="button" className="btn btn-primary ml-2">Send</button>
                </div>
        </div>
    )
}
export default Contact;

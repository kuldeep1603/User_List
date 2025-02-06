import React from 'react'

const Usercards = ({ user }) => {
    // destructring user 
    const { id, name, email, address, company } = user;
    return (
        <div>
            <div className="card post-card p-2 rounded-2">
                <div class="card-header bg-transparent d-flex justify-content-between align-content-center py-2 border-0">
                    <span className='fs-18 fw-500'>{name}</span>
                    <small className="text-muted">ID: {id}</small>
                </div>
                <div className="card-body py-1">
                    <div className='d-flex justify-content-start align-items-center mb-1'><strong className='fw-500 fs-15'>Email &nbsp;: &nbsp; </strong> <span className='text-muted fs-15'>{email}</span></div>
                    <div className='d-flex justify-content-start align-items-center mb-1'><strong className='fw-500 fs-15'>Company &nbsp;: &nbsp; </strong> <span className='text-muted fs-15'>{company.name}</span></div>
                    <div className='d-flex justify-content-start align-items-center '><strong className='fw-500 fs-15'>Address &nbsp;: &nbsp; </strong> <span className='text-muted fs-15'>{address.street} </span></div>
                </div>
            </div>
        </div>
    )
}

export default Usercards

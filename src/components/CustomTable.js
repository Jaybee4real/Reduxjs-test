import React from 'react'


export default function CustomTable({ data, headers, ...props }) {
    return (
        <div className="table-container">
            <div className="table-heading-container">
                <div className="table-heading">Role</div>
                <div className="table-heading">Company</div>
                <div className="table-heading">Date</div>
                <div className="table-heading">Salary</div>
                <div className="btn-spacing"></div>
            </div>
            {data.map((item, index) => {
                return <div className="table-row">
                    <input type="checkbox" className="table-checkbox" />
                    <div className="table-cell">{item.name}</div>
                    <div className="table-cell">{item?.company?.name}</div>
                    <div className="table-cell">{item.website}</div>
                    <div className="table-cell">{item.email}</div>
                    <div className="table-action-btn">Delete</div>
                </div>
            })}
        </div>
    )
}


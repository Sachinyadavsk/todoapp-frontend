import React from 'react'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            <h2>Dashboard</h2>

            {user ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>ID:</strong> {user._id}</p>
                </>
            ) : (
                <p>User not logged in.</p>
            )}
        </div>
    )
}

export default Dashboard

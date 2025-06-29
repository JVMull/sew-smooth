import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../css/ProfilePage.css';
import '../css/buttons.css';
import Order from '../Components/Order';
import ClaimedOrders from '../Components/AdminComponents/ClaimedOrders';

function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [orderIds, setOrderIds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = Cookies.get('user_id');
            const userRole = Cookies.get('user_role');

            if (!userId || !userRole) {
                alert('No user logged in. Redirecting to login.');
                window.location.href = '/login';
                return;
            }

            try {
                const response = await axios.get('https://sk8ts-shop.com/api/users');
                if (response.status === 200 && Array.isArray(response.data)) {
                    const user = response.data.find((u) => u.user_id === parseInt(userId));
                    if (user) {
                        setUserData(user);
                        if (user.user_role !== 'employee') {
                            fetchUserOrders(userId);
                        }
                    } else {
                        alert('User not found. Redirecting to login.');
                        window.location.href = '/login';
                    }
                } else {
                    alert('Error retrieving user data.');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('An error occurred while fetching user data.');
            }
        };

        fetchUserData();
    }, [navigate]);

    const fetchUserOrders = async (userId) => {
        try {
            const response = await axios.get(`https://sk8ts-shop.com/api/orders/user/${userId}`);
            
            if (response.status === 200 && Array.isArray(response.data)) {
                const uniqueOrderIds = [...new Set(response.data.map(order => order.order_id))];
                setOrderIds(uniqueOrderIds.sort((a, b) => b - a));
            } else {
                alert('Error retrieving orders.');
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
            alert('An error occurred while fetching orders.');
        }
    };

    const handleLogout = () => {
        Cookies.remove('user');
        Cookies.remove('user_role');
        Cookies.remove('user_id');
        window.location.href = '/';
    };

    if (!userData) {
        return <div>Loading user data...</div>;
    }

    const isEmployee = userData.user_role === 'employee';

    return (
        <div className="profile-page-container">
            <div className="profile-section">
                <div className="profile-header">
                    <img
                        src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-header-text">
                        <h1 className="profile-name">
                            {userData.first_name} {userData.last_name}
                        </h1>
                    </div>
                </div>
                <div className="profile-details">
                    <table>
                        <tbody>
                            <tr>
                                <td className="profile-details">Username</td>
                                <td>{userData.username}</td>
                            </tr>
                            <tr>
                                <td className="profile-details">First Name</td>
                                <td>{userData.first_name}</td>
                            </tr>
                            <tr>
                                <td className="profile-details">Last Name</td>
                                <td>{userData.last_name}</td>
                            </tr>
                            <tr>
                                <td className="profile-details">Email</td>
                                <td>{userData.email}</td>
                            </tr>
                            <tr>
                                <td className="profile-details">Shipping Address</td>
                                <td>{userData.shipping_address}</td>
                            </tr>
                            <tr>
                                <td className="profile-details">Role</td>
                                <td>{userData.user_role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button onClick={handleLogout} className="btn-logout">
                    Logout
                </button>
            </div>

            <div className="orders-section">
                {isEmployee ? (
                    <>
                        <h2>Your Claimed Orders</h2>
                        <ClaimedOrders />
                    </>
                ) : (
                    <>
                        <h2>Order History</h2>
                        <div className="orders-container">
                            {orderIds.length > 0 ? (
                                orderIds.map(orderId => (
                                    <Order 
                                        key={orderId} 
                                        orderId={orderId} 
                                        editable={false}
                                    />
                                ))
                            ) : (
                                <p className="no-orders">No orders found</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
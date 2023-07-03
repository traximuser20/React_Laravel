import React, { useState, useEffect } from "react";
import api from "../apis/api";
const View = () => {
    // const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    // useEffect(() => {
    //     api.get('/view').then((res) => {
    //         setData(res.data)
    //     })
    // }, [])

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        api.get("/users").then((res) => {
            setUser(res.data);
        });
    };

    return (
        <div>View</div>
    );
};

export default View;

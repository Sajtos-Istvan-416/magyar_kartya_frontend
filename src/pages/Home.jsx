import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { whoAmi } from "../api";

export default function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkUser() {
            try {
                const data = await whoAmi();
                if (!data.error) {
                    setUser(data);
                }
            } catch {
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 500);
            }
        }
        checkUser();
    }, []);

    if (loading) return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center flex-column">
            <div style={{ width: "4rem", height: "4rem" }} className=" m-3 spinner-border spinner-border-lg toltes"></div>
            <div style={{ fontSize: 25 }} className='toltes'>Betöltés...</div>
        </div>
    )

    if (user) {
        return <Navigate to="/menu" />;
    } else {
        return <Navigate to="/register" />;
    }
}
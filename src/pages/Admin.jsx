import 'bootstrap/dist/css/bootstrap.min.css' 
import { useState, useEffect } from "react";
import { whoAmi } from '../api';
import { Navigate } from "react-router-dom";
import { getAllUsers, userEdit, deleteUser } from "../admin"
import Table from '../components/Table';

export default function Admin() {

    const [uzenet, setUzenet] = useState('')
    const [hiba, setHiba] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [allUsers, setAllUsers] = useState(null)
    const [errorAllUsers, setErrorAllUsers] = useState('')

    const [selectedUser, setSelectedUser] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const [user_name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const [tema, setTema] = useState(
        localStorage.getItem("tema") || "theme-pink"
    );

    // THEME APPLY
    useEffect(() => {
        document.body.className = tema;
        localStorage.setItem("tema", tema);
    }, [tema]);

    useEffect(() => {
        async function loadData() {
            try {
                const userData = await whoAmi()

                if (!userData.error) {
                    setUser(userData)

                    const users = await getAllUsers()
                    if (!users.error) {
                        setAllUsers(users)
                    } else {
                        setErrorAllUsers(users.error)
                    }
                } else {
                    setHiba(userData.error)
                }

            } catch {
                setHiba("Hiba történt")
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    async function handleDelete(user) {
        setErrorAllUsers('')
        setSelectedUser(user)

        const confirmDelete = window.confirm(`Biztosan törölni akarod a ${user.user_name} felhasználót?`)

        if (!confirmDelete) {
            return
        }

        const data = await deleteUser(user.user_id)

        if (data.error) {
            setErrorAllUsers(data.error)
            return alert(errorAllUsers)
        }

        return alert('Sikeres módosítás')

    }

    if (!loading && (!user || user.role !== 'admin')) {
        return <Navigate to='/menu' />
    }

    function handleEdit(user) {
        setSelectedUser(user)
        setShowModal(true)
    }

    async function editUser(user_id, user_name, email, role) {
        setErrorAllUsers('')

        const data = await userEdit(user_id, user_name, email, role)

        if (data.error) {
            setErrorAllUsers(data.error)
            return alert(errorAllUsers)
        }

        return alert('Sikeres módosítás')
    }

    return (
        <div className="app">

            {hiba && <div className="hiba_uzi">{hiba}</div>}
            {uzenet && <div className="jo_uzi">{uzenet}</div>}

            <a href="/options">
                <button className="btn1" style={{ marginLeft: 50 }}>Vissza</button>
            </a>

            <h1 className='cim'>ADMIN PANEL!!!</h1>

            <Table allUsers={allUsers} onEdit={handleEdit} onDelete={handleDelete} />

            {showModal && selectedUser && (
                <div className='modal d-block' tabIndex='-1'>
                    <div className="modal-dialog">
                        <div className="modal-content p-3">
                            <h5>Szerkesztés</h5>

                            <label className="form-label fw-bold">Username: </label>
                            <input
                                type="text"
                                className='form-control border-dark'
                                defaultValue={selectedUser.user_name}
                                placeholder='John Doe'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label className="form-label fw-bold">Email: </label>
                            <input
                                type="email"
                                className='form-control border-dark'
                                defaultValue={selectedUser.email}
                                placeholder='example@example.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label className="form-label fw-bold">Role: </label>
                            <input
                                type="text"
                                className='form-control border-dark'
                                defaultValue={selectedUser.role}
                                placeholder='admin/user'
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <div className="d-flex justify-content-between">
                                <button type='button' className='btn btn-secondary m-1 text-black' onClick={() => setShowModal(false)}>Bezárás</button>

                                <button type='button' className='btn btn-primary m-1 text-black' onClick={() => editUser(selectedUser.user_id)}>Módosít</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
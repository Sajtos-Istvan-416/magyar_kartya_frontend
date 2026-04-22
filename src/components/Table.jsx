export default function Table({ allUsers, onEdit, onDelete }) {
    return (
        <table className="scoreboard table container table-dark" style={{ textAlign: 'center', visibility: 50 }}>
            <thead>
                <tr className="text-center">
                    <th>Id</th>
                    <th>FelhasználóNev</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Törlés</th>
                    <th>Szerkesztés</th>
                </tr>
            </thead>
            <tbody>
                {allUsers?.map(user => (
                    <tr className="text-center" key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.user_name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><button onClick={() => onDelete(user)} style={{ background: 'red', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Törlés</button></td>
                        <td><button  onClick={() => onEdit(user)} style={{ background: 'yellow', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Szerkesztés</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
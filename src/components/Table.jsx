import { deleteUser } from "../admin"

const [hiba, setHiba] = useState('')
const [uzenet, setUzenet] = useState('')

async function torles() {
    setUzenet('');
    setHiba('');

    try {
        const data = await deleteUser();

        if (data.error) return setHiba(data.error);

        setUzenet(data.message);

    } catch {
        setHiba('Nem sikerült kapcsolódni a backendhez.');
    }
}

export default function Table({ }) {
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
                <tr className="text-center" key={user.user_id}>
                    <td>{user.user_id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td><button onClick={{torles}} style={{ background: 'red', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Törlés</button></td>
                    <td><button style={{ background: 'yellow', border: 'none', padding: 10, width: 150, borderRadius: 30 }}>Szerkesztés</button></td>
                </tr>
            </tbody>
        </table>
    )
}
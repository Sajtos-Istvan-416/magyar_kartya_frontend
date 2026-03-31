const BACKEND_URL = '/api/admin'

// Törlés funkció
export async function deleteUser(user_id) {
    const res = await fetch(`${BACKEND_URL}/deleteUser`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id })
    });

    const data = await res.json();
    return data;
}
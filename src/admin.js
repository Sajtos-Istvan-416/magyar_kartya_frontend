const BACKEND_URL = '/'

// összes felhasználó lekérése
export async function getAllUsers() {
    const res = await fetch(`${BACKEND_URL}users/getAllUser`, {
        method: 'GET',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error}
    }

    return await res.json()
}

// egy felhasználó adatainak módosítása
export async function userEdit(user_id, username, email, role) {
    const res = await fetch(`${BACKEND_URL}users/admin/edit/${user_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, role }),
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()  
        return { error: data?.error }
    }

    return await res.json()
}

export async function deleteUser(user_id) {
    const res = await fetch(`${BACKEND_URL}users/admin/delete/${user_id}`,{
        method: 'DELETE',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error }
    }

    return await res.json()
}
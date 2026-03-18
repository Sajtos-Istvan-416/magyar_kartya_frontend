
const BACKEND_URL = '/users'


export async function profile(username, psw, email) {
    const res = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, psw, email })
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

//login
export async function login(email, psw) {
    const res = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, psw })
    })

    const data = await res.json()
    return data
}

export async function logout() {
    const res = await fetch(`${BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    })

    if (!res.ok) {
        const data = await res.json()
        return { error: data?.error }
    }

    return await res.json()
}

export async function whoAmi() {

    const res = await fetch(`${BACKEND_URL}/whoAmi`, {
        credentials: "include"
    });

    const data = await res.json();

    return data;

}
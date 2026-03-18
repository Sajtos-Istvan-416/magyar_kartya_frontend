const BACKEND_URL = '/api/game'

export async function startGame() {
    const res = await fetch(`${BACKEND_URL}/start`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
} 

export async function hit() {
    const res = await fetch(`${BACKEND_URL}/hit`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

export async function stand() {
    const res = await fetch(`${BACKEND_URL}/stand`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

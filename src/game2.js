const BACKEND_URL = '/api'

export async function fajerstart() {
    const res = await fetch(`${BACKEND_URL}/fajer/fajerStart`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

export async function playerswap(hanIndex,tableIndex) {
    const res = await fetch(`${BACKEND_URL}/fajer/player-swap`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ hanIndex, tableIndex })
    })
  

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

export async function botswap() {
    const res = await fetch(`${BACKEND_URL}/fajer/bot-swap`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}

export async function result() {
    const res = await fetch(`${BACKEND_URL}/fajer/result`, {
        method: 'GET',
        credentials: 'include'
    })

    const data = await res.json()

    if (data.error) {
        return data
    }
    return data
}
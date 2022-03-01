export const fetchService = async (url, option) => {
    let response = await fetch(url, option)
        .then(res => res.json())
        .then(resp => resp)
    return response
}
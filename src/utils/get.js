export async function get(url = '/new_hire.json'){
    const response = await fetch(url)
    return await response.json();
}
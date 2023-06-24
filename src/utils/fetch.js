export async function get(url = 'new_hire.json'){
    const response = await fetch(url,
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

    console.log(response);
    const data = await response.json();
    console.log(data)
    return data;
}
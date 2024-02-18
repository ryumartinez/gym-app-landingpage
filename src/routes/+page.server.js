export async function load({ setHeaders }) {
	setHeaders({
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
	});
    const response = await fetch('http://localhost:5136/api/menu-item');
    const menu = await response.json();

    return { 
        menuItems: menu.map(x=>({
        name: x.name,
        price: x.price
        }))
    }
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
        let name = data.get("name")
        let price = data.get("price")
        let description = data.get("description")
        
        const body = JSON.stringify({
            name,price,description
        })
        const response = await fetch('http://localhost:5136/api/menu-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        })
        console.log(data)
        console.log(response)
	},
};
export async function load({ setHeaders }) {
	setHeaders({
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
	});
    const response = await fetch('http://localhost:5136/api/menu-item');
    const menu = await response.json();
    return {menu}
}
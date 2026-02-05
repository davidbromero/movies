import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    
    const palabra = searchParams.get('query');

    if (!palabra) {
        return NextResponse.json({ error: 'No hay palabra', status: 400});
    }

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${palabra}`, {
           headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: 'application/json'
           }
    });

    const datos = await response.json();

    return NextResponse.json(datos);
    
}
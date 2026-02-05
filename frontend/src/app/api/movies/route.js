import { request } from "express";
import { NextResponse } from "next/server";

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const page = searchParams.get('page');
    const languaje = searchParams.get('languaje');

    let baseUrl = `https://api.themoviedb.org/3/discover/movie?page=${page ?? 1}&languaje=${languaje?? 'es-Es'}`;

   
    const response = await fetch(baseUrl, {
        headers: {
            Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
            accept: 'application/json'
        }
    });



    const data = await response.json();

    console.log('route data', data);

    return NextResponse.json(data);

}
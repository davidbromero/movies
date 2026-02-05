import Link from "next/link";
import { getMovieByID, getVideosByID } from "../../../utils/functions/movies";
import Image from "next/image";

export default async function page({ params }) {
    const { id } = await params;
    const { title, poster_path, backdrop_path, overview } = await getMovieByID(id);
    const trailer = await getVideosByID(id);

    return (
        <div>
            <div className="relative">
                <div className="blur-lg h-[70vh] z-10 absolute w-full ">
                    <Image
                        fill
                        sizes="100%"
                        objectFit="cover"
                        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    />
                </div>
                <div className="flex z-20 relative p-20 items-center gap-10">
                    <div className="relative w-[250px] z-20 h-112.5">
                        <Image
                            fill
                            sizes="100%"
                            objectFit="cover"
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        />
                    </div>
                    <div className=" space-y-2">
                        <h2 className="text-orange-600 text-4xl font-bold">{title}</h2>
                        <p className="text-3xl font-bold w-[900]">{overview}</p>
                    </div>                   
                </div>
            </div>
            <div className="p-35">
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encripted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[500px]"
                />
            </div>

        </div>
    )

}



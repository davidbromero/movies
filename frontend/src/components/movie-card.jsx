import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ info }) {

  const renderImage = (uri) => {
    if (uri) {
        return uri;
    }else {
      return 'https://blocks.astratic.com/img/general-img-landscape.png';
    }
  }
  return (
    
    <Link href={`/movie/${info.id}`} className="w-[20%]">
      <div className="h-[400px] relative">
        <Image
          alt={info.title}
          fill
          className="object-cover"
          src={`https://image.tmdb.org/t/p/w500${renderImage(info.poster_path)}`}
        />
      </div>

      <h2>{info.title}</h2>
    </Link>
    
  );
}

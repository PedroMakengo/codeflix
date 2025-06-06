import Image from 'next/image';

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div
      key={index}
      className='group relative h-28 min-w-[200px] 
                transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 
                md:h-36 md:min-w-[260px] 
                '
    >
      <Image
        src={`/movie/item_${index}.png`}
        fill={true}
        alt='MAID'
        className='rounded'
      />
    </div>
  );
};
export default MovieCard;

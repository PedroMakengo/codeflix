import Image from 'next/image';
import MovieCard from '../MovieCard';

type MovieRowProps = {
  sectionTitle: string;
};

export function MoviewRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-6 flex space-x-4 overflow-x-auto p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 2].map((i: number) => (
          <MovieCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

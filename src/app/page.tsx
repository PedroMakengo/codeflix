import Header from '@/app/components/Header';
import { Banner } from '@/app/components/Banner';
import { MoviewRow } from '@/app/components/MovieRow';

export default function Home() {
  return (
    <div className='relative h-[140vh] overflow-hidden bg-gradient-to-b'>
      <Header />

      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MoviewRow sectionTitle='Trending Now' />
        <MoviewRow sectionTitle='Top Rated' />
        <MoviewRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}

import { BlockRenderer } from '@/components/BlockRenderer';
import { getHomePage } from '@/data/loaders';
import { notFound } from 'next/navigation';

async function loader(){
  const data = await getHomePage()
  if(!data) notFound();
  console.log(data)
  return {...data.data};
}
export default async function HomePage() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks}/>;
}

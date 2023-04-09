import paths from '@/public/paths.json';
import { NextApiRequest } from 'next';

export async function getServerSideProps(props: NextApiRequest) {
  // get path from router and return if invalid
  const { path } = props.query;
  if (typeof path !== 'string' || !(paths as any)[path.toLowerCase()]) {
    return { notFound: true };
  }

  // return redirect to path
  return {
    redirect: {
      destination: (paths as any)[path.toLowerCase()],
      permanent: false
    }
  };
}

export default function Path() {
  return <></>;
}

import paths from '@/public/paths.json';

export async function getServerSideProps() {
  // return redirect to index path
  return {
    redirect: {
      destination: paths["/"],
      permanent: false
    }
  };
}

export default function Index() {
  return <></>;
}


import { GetServerSideProps, NextPage } from 'next';
import { Homepage } from "@/components";

interface HomeProps {
  // Define your props here
}

const Home: NextPage<HomeProps> = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Homepage />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  // Fetch data or perform any necessary server-side logic here

  // Return props
  return {
    props: {},
  };
};

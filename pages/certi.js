import { sanityClient } from "../sanity";
const Certification = (header) => {
  console.log("header", header);
  return <div>Certification</div>;
};

export const getServerSideProps = async () => {
  const query = '*[_type == "header"]';
  const header = await sanityClient.fetch(query);
  if (!header.length) {
    return {
      props: {
        header: [],
      },
    };
  } else {
    return {
      props: {
        header,
      },
    };
  }
};

export default Certification;

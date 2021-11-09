import { sanityClient } from "../sanity";
const Header = (header) => {
  console.log("header", header);
  return (
    <>
      <div className="name-hero">
        <div className="me-img"></div>

        <div className="name-text">
          <h1>
            Anthony <em>Adamski</em>
          </h1>
          <p>10 Iroquois St Boston, MA 02120</p>
          <p>adamskianthony@gmail.com</p>
          <p>(956) 500-5558</p>
        </div>
      </div>
    </>
  );
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

export default Header;

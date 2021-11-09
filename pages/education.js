import { sanityClient } from "../sanity";
const Education = (education) => {
  console.log("education", education);
  return (
    <div>
      Education
      <section>
        <h1>Employment</h1>
        <p>
          Winter 2015 - Present{" "}
          <em>Grand Interactive, llc. | Mobile App Developer</em>
        </p>
        <p>
          Raised $78,000 in early stage funding, created initial design
          concepts, and oversaw initial development. Currently oversee and
          maintain all front end code and server functionality.
        </p>
        <p>
          Spring 2012 - Winter 2015 | <em>PadMatcher Inc. | CTO, Co-Founder</em>
        </p>
        <p>
          Raised $78,000 in early stage funding, created initial design
          concepts, and oversaw initial development. Oversaw and maintained all
          front end code and server functionality.
        </p>
        <p>
          Fall 2011 - Fall 2013 |{" "}
          <em>Penrose Realty llc. | Desinger & Assistant</em>
        </p>
        <p>
          Responsible for all technical areas. Maintain servers, computers, and
          provide in office technical support. Rebranded company from ground up
          including a fully responsive website.{" "}
        </p>
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "educationexp"]';
  const education = await sanityClient.fetch(query);
  if (!education.length) {
    return {
      props: {
        education: [],
      },
    };
  } else {
    return {
      props: {
        education: education,
      },
    };
  }
};

export default Education;

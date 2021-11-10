import Header from "./header";
import WorkExp from "./workexp";
import Skills from "./skills";
import Education from "./education";
import Certification from "./certi";
import { sanityClient } from "../sanity";
const Home = ({ header, education, experience }) => {
  console.log("test", experience);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Open+Sans:300,400,500,700|Waiting+for+the+Sunrise|Shadows+Into+Light"
        rel="stylesheet"
        type="text/css"
      />
      <div className="wrapper clearfix">
        <div className="left">
          <div className="name-hero">
            <div className="me-img"></div>

            <div className="name-text">
              <h1>
                {header[0]?.name}
                {/* Anthony <em>Adamski</em> */}
              </h1>
              <p>{header[0]?.desc}</p>
              <p>{header[0]?.location}</p>
              <p>{header[0]?.email}</p>
              <p>{header[0]?.number}</p>
              <p>{header[0]?.website}</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="right">
        <div className="inner">
          <section>
            <h1>Work Experience</h1>
            {experience.map((ed) => (
              <div
                key={ed?._id}
                style={{
                  marginBottom: "7px",
                  padding: "7px",
                  backgroundColor: "ghostwhite",
                }}
              >
                <p>
                  <em>{ed?.name}</em>
                  <br />
                  {ed?.startdate} to {ed.enddate}
                  <br />
                  <em>{ed?.position}</em>
                </p>
                <p> {ed?.desc}</p>
              </div>
            ))}
          </section>
          <hr />
          <section>
            <h1>Education</h1>
            {education.map((ed) => (
              <div
                key={ed?._id}
                style={{
                  marginBottom: "7px",
                  padding: "7px",
                  backgroundColor: "aliceblue",
                }}
              >
                <p>
                  <em>{ed?.schoolname}</em> | <em>{ed?.degree}</em> |{" "}
                  {ed?.startdate} to {ed.enddate}
                </p>
                <p> {ed?.edudesc}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
      {/* <div>Home</div> */}

      {/* <WorkExp />
      <Skills />

      <Certification /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "header"]';
  const header = await sanityClient.fetch(query);
  const query1 = '*[_type == "educationexp"]';
  const education = await sanityClient.fetch(query1);
  const query2 = '*[_type == "workexp"]';
  const experience = await sanityClient.fetch(query2);
  if (!education.length) {
    return {
      props: {
        education: [],
      },
    };
  } else {
    return {
      props: {
        header,
        education,
        experience,
      },
    };
  }
};

export default Home;

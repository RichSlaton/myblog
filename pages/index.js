import TopBar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import AuthorIntro from "../components/AuthorIntro";
import CardItem from "../components/CardItem";
import CardListItem from "../components/CardListItem";
import { getAllBlogs } from "../lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />

      <hr />
      <div
        style={{ position: "relative", height: "500px" }}
        class="custom-shape-divider-top-1640978491 "
      >
        <div 
          style={{
            width: "150%",
            height: "100%",
            position: "absolute",
            top: "0%",
            left: "0",
            opacity: "0.8",
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>

          <div style={{ zIndex: "1" }}>
            <Row className="mb-5">
              {blogs.map((blog) => (
                <Col key={blog.slug} md="4">
                  <CardItem
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog.coverImage}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

//This function is called during the build(build time)
//Provides props to your page and create a static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

//getStaticProps is index.html page build and it will keep refreshing the page for any changes
//automatically generated as static HTML + JSON (uses getStaticProps)

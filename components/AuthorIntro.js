import { Row, Col, Media, Image } from "react-bootstrap";





const AuthorIntro = () => (
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={120}
          height={120}
          className="mr-3"
          src="/darbysmile.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h1 className="font-weight-bold mb-0">Hello Friends,</h1>
          <p className="welcome-text">
            My name is Darby Slaton and I am an experienced software engineer
            and freelance developer. and this is my blog page.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro;

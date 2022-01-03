import { Container } from "react-bootstrap";
import TopBar from "../components/Navbar";

export default function PageLayout({ children, className }) {
  return (
    <Container>
      <TopBar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">portfolio</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
}

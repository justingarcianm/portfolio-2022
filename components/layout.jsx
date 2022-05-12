import { Container } from "./theme/theme";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({children}) {
    return <>
        <Nav/>
    <Container >
      {children}
    </Container>
        <Footer/>
    </>
}
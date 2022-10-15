//! React Bootstrap sevilen CSS frameworkü olan Bootstrapın React için uyarlanmış halidir. Bootstrap temelli çalışır ve fakat komponetler birer React JS componenti olarak tasarlanmıştır. Diğer bir deyimle Bootstrapın React yorumudur.

import Card from "./components/Card";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

//! ortak veri kullanilacak yerde bir ust parent'ta kullanilmali ve lazim
//! olacak yerlerde prop yoluyla gondermeliyiz.
//! Bu islemin adi ise Lifting-up State

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;

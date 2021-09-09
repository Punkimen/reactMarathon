import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from "./assets/img/bg1.jpg"
import bg3 from "./assets/img/bg3.jpg"


const App = () => {
  console.log(bg1);

  return (
    <>
      <Header title="Pokemon" descr="Pokemon is fun" />
      <Layout urlBg={bg1} title="section width BG" descr="image-test" />
      <Layout colorBg="red " title="section width BG-color" descr="image-test" />
      <Layout urlBg={bg3} title="section width BG" descr="image-test" />
      <Footer />
    </>
  )
}
export default App;

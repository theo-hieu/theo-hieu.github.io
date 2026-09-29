import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <Layout>
      <Home />
      <Projects />
      <Experience />
    </Layout>
  );
}

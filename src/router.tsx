import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Entrega from "./pages/Entrega";
import FormaDePagamento from "./pages/FormaDePagamento";
import TrocaEDevolucao from "./pages/TrocaEDevolucao";
import SegurancaEPrivacidade from "./pages/SegurancaEPrivacidade";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/sobre" />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/entrega" element={<Entrega />} />
        <Route path="/forma-de-pagamento" element={<FormaDePagamento />} />
        <Route path="/troca-e-devolucao" element={<TrocaEDevolucao />} />
        <Route
          path="/seguranca-e-privacidade"
          element={<SegurancaEPrivacidade />}
        />
      </Routes>
      <Footer />
    </>
  );
}

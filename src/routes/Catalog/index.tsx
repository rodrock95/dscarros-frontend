import "./styles.css";
import CardCar from "../../components/CardCar";
import Header from "../../components/Header";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />

      <div className="ct-card-car-text">
        <h3>Venha nos visitar</h3>
      </div>

      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">
          <div className="ct-catalog-cards-container">
            <CardCar />
          </div>
          <div className="ct-catalog-cards-container">
            <CardCar />
          </div>
        </section>

        <section id="ct-catalog-section-comment">
            <div className="ct-container">
                <div className="ct-comment-car-text">
                    <h3>O que estão dizendo</h3>
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
                <div className="ct-catalog-cards-container">
                    <CardComment />
                </div>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

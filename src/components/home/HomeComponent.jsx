import Hero from "./hero/HomeHeroComponent";
import Banner from "./banner/HomeBannerComponent";
import Card from "./card/HomeCardComponent";
import Main from "./main/HomeMainComponent";
import star from "../../../src/assets/img/svg/icon-star.svg";

const home = () => {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5 pt-5 pb-3 bb">
            <img src={star} className="icon-l" alt=""></img>

            <h2 className="mt-1">Os melhores e mais bem votadospost do mês.</h2>

            <p className="mt-2">
              Certamente! No mês passado, nossa comunidade foi brilhante,
              repleta de contribuições notáveis e discussões envolventes. Aqui
              estão alguns dos melhores posts que se destacaram:
            </p>
          </div>

          <div className="grid-7">
            <Main />
          </div>
        </div>
      </section>

      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">
            <Card />
          </div>
        </section>
      </div>

      <Banner />
    </>
  );
};

export default home;

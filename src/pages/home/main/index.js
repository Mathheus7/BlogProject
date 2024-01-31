import math from "../../../profile/math.jpg.jpg";

const Main = () => {
  return (
    <>
      <div className="py-3 bb-black ">
        <h6 className="color-gray">01 NOV 2023</h6>
        <h6 className="uppercase color-primary">CINEMA</h6>
        <a href="1" className="link-title">
          <h4 className="mt-1">O que esperar do cinema em 2024?</h4>
        </a>

        <p className="mt-1">
          Com a tecnologia "deepfake", que usa a IA para criar vídeos
          hiper-realistas, é possível que os cineastas possam "ressuscitar"
          atores falecidos para papéis completos, ou até mesmo criar novos
          personagens totalmente sintéticos.
        </p>
        <div className="mt-2 flex-space">
          <div className="flex-start-row">
            <div className="profile">
              <img src={math} className="profile-img" alt="" />
            </div>
            <div className="ml-2">
              <h6 className="color-primary">Matheus França</h6>
              <h6 className="color-gray">Autor</h6>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-3">
        <h6 className="color-gray">13 OUT 2023</h6>
        <h6 className="uppercase color-primary">TECNOLOGIA</h6>

        <a href="1" className="link-title">
          <h4 className="mt-1">Futuro da programação 2024.</h4>
        </a>

        <p className="mt-1">
          Em 2024, haverá uma ênfase crescente no desenvolvimento de software
          sustentável, que consome menos recursos e produz menos emissões de
          carbono. Os programadores devem se envolver em práticas de programação
          sustentável, como otimização de código e escolha de infraestrutura com
          baixa pegada de carbono.
        </p>
        <div className="mt-2 flex-space">
          <div className="flex-start-row">
            <div className="profile">
              <img src={math} className="profile-img" alt="" />
            </div>
            <div className="ml-2">
              <h6 className="color-primary">Matheus França</h6>
              <h6 className="color-gray">Autor</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

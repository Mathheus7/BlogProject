import img01 from "../../../assets/img/01.png"
import img02 from "../../../assets/img/02.png"
import img03 from "../../../assets/img/02.png"

export default function Card() {
    return (
        <>
            <div className="grid-4 card hidden p-0">
                <div className="thumb hidden">
                    <a href="/" className="p-0">
                        <img src={img01} alt=""/>
                    </a>
                </div>
                <div className="p-2">
                    <h6 className="color-gray">01 NOV 2023</h6>
                    <h6 className="uppercase color-primary">TECNOLOGIA</h6>
                    <a href="/" className="link-title">
                        <h4 className="mt-1">Os novos macbooks M3</h4>
                    </a>

                    <p className="my-2">
                        Produzidos com a tecnologia de três nanômetros e uma nova
                        arquitetura de GPU, são os chips mais avançados em um
                        computador pessoal até hoje. E cada um traz mais desempenho
                        e capacidade para profissionais.
                    </p>
                    <a href="/" className="link p-0">Ler mais</a>
                </div>
            </div>

            <div className="grid-4 card hidden p-0">
                <div className="thumb hidden">
                    <a href="/" className="p-0">
                        <img src={img02} alt=""/>
                    </a>

                </div>
                <div className="p-2">
                    <h6 className="color-gray">01 JUL 2023</h6>
                    <h6 className="uppercase color-primary">TECNOLOGIA</h6>
                    <a href="/" className="link-title">
                        <h4 className="mt-1">Air Pods Pro vs. Air Pods 3º geração</h4>
                    </a>

                    <p className="my-2">
                        Os novos AirPods de 3ª geração trazem hastes mais curtas e um
                        ângulo mais fechado em comparação com seu antecessor, se
                        assemelhando visualmente à versão Pro, mas sem as entradas
                        intra auriculares.
                    </p>
                    <a href="/" className="link p-0">Ler mais</a>
                </div>

            </div>


            <div className="grid-4 card hidden p-0">
                <div className="thumb hidden">
                    <a href="/" className="p-0">
                        <img src={img03} alt=""/>
                    </a>

                </div>
                <div className="p-2">
                    <h6 className="color-gray">01 DEZ 2023</h6>
                    <h6 className="uppercase color-primary">CINEMA</h6>
                    <a href="/" className="link-title">
                        <h4 className="mt-1">Top 10 Filmes de 2023</h4>
                    </a>

                    <p className="my-2">
                        Barbie.<br/>
                        Oppenheimer.<br/>
                        Guardiões da Galáxia Vol 3.<br/>
                        ...
                    </p>
                    <a href="/" className="link p-0">Ler mais</a>
                </div>

            </div>
        </>
    )
}

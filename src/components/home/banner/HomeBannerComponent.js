import img05 from "../../../assets/img/05.png";


export default function Banner() {
    return (
        <>
            <section className="container">
                <div className="img-banner hidden">
                    <img src={img05} alt=""/>
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">01 FEV 2021</h6>
                    <h6 className="uppercase color-primary text-center">GAMES</h6>
                    <a href="/" className="link-title">
                        <h2 className="mt-1 text-center">Ainda vale a pena o PS4 Pro em 2023?</h2>
                    </a>

                    <p className="my-2 text-center">
                        Sim. Por mais que os gamers e entusiastas de tecnologia fiquem super animados com a chegada
                        e os recursos de uma nova geração de consoles,o contexto econômico do Brasil não permite que
                        grande parte da população tenha R$ 4.700 para comprar um console no lançamento.
                    </p>
                    <div className="flex-center">
                        <a href="/" className="link p-0">Ler mais</a>
                    </div>

                </div>
            </section>
        </>
    )
}

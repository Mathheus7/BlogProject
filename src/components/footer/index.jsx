import logo from '../../svg/blog-logo2.svg';
import instagram from '../../svg/icon-instagram.svg';
import facebook from '../../svg/icon-facebook.svg';
import youtube from '../../svg/icon-youtube.svg';
import twitter from '../../svg/icon-twitter.svg';

const footer = () => {
    return (
        <>
           
           <footer className="bg-section bt-black">
        <section className="container pb-0 ">
            <div className="row flex-center">
                <img src={logo} className='icon-l' alt=""/>
            </div>

            <div className="row pb-3 bb-black">
                <div className="grid-3">
                    <h4>Posts</h4>
                    <div className="flex-start-column mt-2">
                        <a href="0" className="color-gray link-footer">Mais vistos</a>
                        <a href="0" className="color-gray link-footer">Mais comentados</a>
                        <a href="0" className="color-gray link-footer ">Mais populares</a>
                        <a href="0" className="color-gray link-footer">Mais recentes</a>
                    </div>
                    
                </div>

                <div className="grid-3">
                    <h4>Categorias</h4>
                    <div className="flex-start-column mt-2">
                        <a href="0" className="color-gray link-footer">Tecnologia</a>
                        <a href="0" className="color-gray link-footer">Games</a>
                        <a href="0" className="color-gray link-footer">Fotografia</a>
                        <a href="0" className="color-gray link-footer">Cinema</a>
                        <a href="0" className="color-gray link-footer">Moda</a>
                        <a href="0" className="color-gray link-footer">Outros</a>
                    </div>
                </div>

                <div className="grid-6">
                    <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                    <p>
                        Um blog para todos.<br/>
                        Escrever. Ler. Comentar. Contribuir. Aprender. Conectar. 
                    </p>
                    <div className="flex-start-row mt-2">
                        <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui"/>
                        <button className="btn ml-2">Cadastrar</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="grid-9">
                    <p>2023 | Todos os direitos reservados. Projeto de React.js do curso <a href="https://www.frontpush.com.br/" target="blank">FrontPUSH.</a> </p>
                </div>

                <div className="grid-3">
                    <img src={facebook} className="icon-s" alt=""/>
                    <img src={instagram} className="icon-s ml-2" alt=""/>
                    <img src={youtube} className="icon-s ml-2" alt=""/>
                    <img src={twitter} className="icon-s ml-2" alt=""/>
                </div>
            </div>

        </section>
    </footer>

        </>
    );
}

export default footer;
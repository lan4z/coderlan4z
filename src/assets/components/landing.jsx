import React from "react";
import '../css/landing.css';
import perfilImage from '../img/profile.jpeg';
import { FaRegEnvelope} from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiReact, DiNodejsSmall, DiJava, DiJavascript1 } from "react-icons/di";


function Landing() {
    return (
        <>
            <div className="page">
                <div className="content">
                    <header>
                        <div className="email">
                            <div className="envelope">
                                <FaRegEnvelope />
                            </div>
                            <a href="mailto:contato.guilhermelana@gmail.com">contato.guilhermelana@gmail.com</a>
                        </div>
                        <div className="info">
                            <a className="linkedin" href="https://www.instagram.com/__guilhermelana/" target="blank">Instagram</a>
                            <span className="barra">/</span>
                            <a className="dribbble" href="https://www.linkedin.com/in/guilhermelana/" target="blank">LinkedIn</a>
                            <span className="barra">/</span>
                            <a className="instagram" href="https://github.com/lan4z" target="blank">GitHub</a>
                        </div>
                    </header>

                    <main>
                        <div className="prof">
                            <section className="profile">
                                <img src={perfilImage} alt="" />
                                <p>Hi, I'm Guilherme Lana 👋</p>
                                <h1>I turn coffee into &lt;/code&gt;</h1>
                                <a href="https://github.com/lan4z" target="blank"><button>Latest projects  ⤯</button></a>
                            </section>
                        </div>
                    </main>
                </div>
                <section className="marcas">
                    <div className="row">
                        <DiReact />
                        <DiNodejsSmall />
                        <DiJavascript1 />

                        <DiJava />


                        <CgCPlusPlus />

                        <DiGit />
                    </div>

                </section>

                <section className="h2">
                    <h2>bringing ideas to life with lines of code.</h2>
                </section>
                <div className="row2">
                    <section className="cards">
                        <div className="card1">
                            <h1>Experience</h1>
                            <p>8 months working as a Software Developer, currently I'm just developing personal projects and work for my Computer Science college.</p>
                        </div>
                        <div className="card2">
                            <h1>Education</h1>
                            <p>I am currently studying the second semester of my graduation in computer science at the Pontifícia Universidade Católica de Minas Gerais.</p>
                        </div>
                        <div className="card3">
                            <h1>Social Network</h1>
                            <p>
                                <a href="https://www.instagram.com/__guilhermelana/" target="blank">Instagram</a> <br />
                                <a href="https://www.linkedin.com/in/guilhermelana/" target="blank">LinkedIn</a> <br />
                                <a href="https://github.com/lan4z">GitHub</a> <br />
                                <a href="mailto:contato.guilhermelana@gmail.com">Email</a>
                            </p>
                        </div>
                        <div className="card4">
                            <h1>Languages</h1>
                            <p> EN - Intermediary <br />
                                PT-BR - Native
                            </p>
                        </div>
                    </section>
                </div>

                <section className="next">
                    <div className="next-content">
                        <h2>Tell me about your next project</h2>
                        <a href="mailto:contato.guilhermelana@gmail.com" target="_blank">
                            <button>Get in touch</button>
                        </a>
                    </div>
                </section>

                <footer>
                    <nav>
                    </nav>
                </footer>
            </div >
        </>
    );
}

export default Landing;

export function Home() {
    return (
        <div id='home' className="bg-gradient-to-tr from-[#79b0f24d] to-transparent h-screen space-y-8 md:flex mt-16 justify-center items-center sm:pb-24 pt-12">
            <div className="mx-12 space-y-4">
                <h1 className="font-bold text-3xl">Olá mundo! <br></br> Esse é meu portfólio</h1>
                <p className="font-light text-sm">Confira um pouquinho sobre mim e meu trabalho. Espero que goste!</p>
                <div className="flex gap-3">
                    <button className="flex items-center h-10 bg-fauxBleuFrance border-b-gray-300 border-b-4 text-black px-6 py-4 rounded-md font-medium uppercase tracking-wider transition-transform hover:-translate-y-2 hover:bg-fauxSkyBlue hover:shadow-lg hover:shadow-fauxBleuFrance hover:transition-transform">
                        <a className="flex gap-2 items-center " href="https://github.com/jpmoncao/" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            Repositório
                        </a>
                    </button>
                    <button className="flex gap-2 items-center h-10 bg-gray-700 border-b-gray-300 border-b-4 text-white px-6 py-4 rounded-md font-medium uppercase tracking-wider transition-transform hover:-translate-y-2 hover:bg-fauxSkyBlue hover:shadow-lg hover:shadow-fauxBleuFrance hover:transition-transform" download="../../assets/doc/curriculo.pdf">
                        &lsaquo; &frasl; &rsaquo; Currículo
                    </button>
                </div>
            </div>

            <img src="https://raw.githubusercontent.com/jpmoncao/portfolio/master/src/assets/img/illustration-code.png" alt="Ilustração de homem programando" className="drop-shadow-2xl h-96 mx-auto md:mx-0" />
        </div>
    )
}
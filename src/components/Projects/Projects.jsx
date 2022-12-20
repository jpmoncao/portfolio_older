import { Project } from "./Project";

export function Projects() {
    return (
        <div id="projects" className="pt-24 h-5/6 bg-fauxCerulean shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]">
            <h1 className="font-bold text-4xl text-center mb-10">Projetos</h1>
            <div className="flex justify-center gap-x-3 flex-wrap">
                <Project
                    name='NLW E-sports'
                    desc='Landing page com tema de E-sports feito durante a Maratona Explorer da Rocketseat, com HTML e CSS.'
                    urlImg='src\assets\projects\banner-projeto-1.png'
                    urlRepository='https://github.com/jpmoncao/nlw-explorer'
                />
                <Project
                    name='ForMove'
                    desc='Site informativo focado na área da saúde com HTML, CSS e JavaScript praticamente de forma nativa.'
                    urlImg='src\assets\projects\banner-projeto-2.png'
                    urlRepository='https://github.com/jpmoncao/formove'
                />
                <Project
                    name='ForBot'
                    desc='ChatBot automatizado integrado ao site ForMove, com HTML, CSS, JavaScript e a API "Speech Recognition".'
                    urlImg='src\assets\projects\banner-projeto-3.png'
                    urlRepository='https://github.com/jpmoncao/forbot'
                />
                <a
                    className="max-sm:mt-6"
                    href="https://github.com/jpmoncao"
                    target='_blank'
                >
                    <button className="bg-fauxBleuFrance text-white font-bold py-4 px-16 rounded-2xl transition-shadow hover:bg-white hover:text-fauxBleuFrance hover:transition-shadow hover:shadow-[0_12px_20px_rgba(121,176,242,0.4)] md:h-full md:w-20 md:px-0"
                    >
                        Confira mais projetos
                    </button>
                </a>
            </div>
        </div >
    )
}
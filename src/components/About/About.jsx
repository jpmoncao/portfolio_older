export function About() {
    return (
        <div id='about' className="pt-24 h-5/6 bg-fauxCerulean shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]">
            <h1 className="font-bold text-4xl text-center mb-10 items-center">Sobre mim</h1>
            <div className="flex gap-2 px-6 md:w-5/6 md:gap-12 items-center justify-center mx-auto lg:3/6">
                <img src="https://github.com/jpmoncao.png" alt="Foto do perfil do meu perfil no github" className="rounded-full border-4 border-slate-200 border-solid h-56" />
                <p className="text-right text-sm md:text-base lg:w-3/6">Olá, eu sou o João Pedro. Tenho 16 anos e atualmente curso o Ensino Médio com ênfase em Ciências Exatas e Engenharias, e técnico em Informática pela Escola Técnica Estadual Prof. Armando José Farinazzo. Despertei a curiosidade por programação e até hoje não parei de estudar sobre, motivado pela vontade de aprender cada vez mais. Meu objetivo é me consolidar como programador full-stack web.</p>
            </div>
        </div>
    )
}
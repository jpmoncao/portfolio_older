import { Skill } from "./Skill";

export function Skills() {
    return (
        <div id="skills" className="py-24 h-full bg-gradient-to-tr from-[#79b0f24d] to-transparent justify-center mx-auto">
            <h1 className="font-bold text-4xl text-center mb-10">Habilidades</h1>
            <div className="h-5/6 w-4/6 flex flex-col items-center gap-y-6 
            overflow-x-hidden overflow-y-scroll pb-4 mx-auto md:pt-4 md:grid md:grid-cols-2 md:w-5/6 md:gap-x-0 lg:grid lg:grid-cols-4 lg:gap-x-32 lg:w-full lg:px-44">
                <Skill
                    title='HTML5'
                    desc='Linguagem de marcação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
                    count={5} />
                <Skill
                    title='CSS3'
                    desc='Linguagem de estilização'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
                    count={5} />
                <Skill
                    title='JavaScript'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'
                    count={4} />
                <Skill
                    title='PostgreSQL'
                    desc='Banco de dados'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg'
                    count={4} />
                <Skill
                    title='Python 3'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
                    count={4} />
                <Skill
                    title='React'
                    desc='Framework Front-end'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
                    count={3} />
                <Skill
                    title='NodeJS'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg'
                    count={3} />
                <Skill
                    title='Tailwind CSS'
                    desc='Framework CSS'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg'
                    count={3} />
                <Skill
                    title='PHP'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg'
                    count={2} />
                <Skill
                    title='Java'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
                    count={2} />
                <Skill
                    title='TypeScript'
                    desc='Linguagem de programação'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg'
                    count={2} />
                <Skill
                    title='NPM'
                    desc='Gerenciador de pacotes'
                    urlImg='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
                    count={2} />
            </div>
        </div>
    )
}
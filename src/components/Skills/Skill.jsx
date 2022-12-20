export function Skill({ title, urlImg, desc, count }) {
    return (
        <div className="flex gap-4 bg-fauxBlue rounded-lg w-72 text-white py-2 px-4 border-b-4 border-gray-300 shadow-lg transition-transform hover:-translate-y-2 hover:transition-transform hover:shadow-[0_12px_20px_rgba(121,176,242,0.3)]">
            <img className="h-20" src={urlImg} alt={`Logo ${title}`} />
            <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm">{desc}</p>
                <ul className="flex">
                    <li>
                        <img className={`h-4 ${count >= 1 ? 'opacity-100' : 'opacity-30'}`} src="https://svgsilh.com/svg/2451996-ffffff.svg" alt="Estrela 1" />
                    </li>
                    <li>
                        <img className={`h-4 ${count >= 2 ? 'opacity-100' : 'opacity-30'}`} src="https://svgsilh.com/svg/2451996-ffffff.svg" alt="Estrela 2" />
                    </li>
                    <li>
                        <img className={`h-4 ${count >= 3 ? 'opacity-100' : 'opacity-30'}`} src="https://svgsilh.com/svg/2451996-ffffff.svg" alt="Estrela 3" />
                    </li>
                    <li>
                        <img className={`h-4 ${count >= 4 ? 'opacity-100' : 'opacity-30'}`} src="https://svgsilh.com/svg/2451996-ffffff.svg" alt="Estrela 4" />
                    </li>
                    <li>
                        <img className={`h-4 ${count >= 5 ? 'opacity-100' : 'opacity-30'}`} src="https://svgsilh.com/svg/2451996-ffffff.svg" alt="Estrela 5" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
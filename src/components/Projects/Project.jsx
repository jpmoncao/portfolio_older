export function Project({ name, desc, urlImg, urlRepository }) {
    return (
        <div className="w-40 h-72 bg-white rounded-xl transition-transform hover:-translate-y-2 border-none outline-none hover:transition-transform hover:shadow-2xl hover:shadow-slate-500 lg:w-60 lg:h-80">
            <img
                src={`${urlImg}`}
                alt={`Imagem de preview ${name}`} className='rounded-t-xl border-none outline-none'
            />
            <div className="text-black px-2">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-xs lg:text-base" >{desc}</p>
                <a href={urlRepository} target='_blank'>
                    <button
                        className='bg-transparent border-2 text-fauxCerulean border-fauxCerulean py-1 px-4 rounded-2xl transition-opacity hover:bg-fauxCerulean hover:text-white hover:transition-opacity max-md:mt-6'
                    >
                        Veja mais+
                    </button>
                </a>
            </div>
        </div>
    )
}
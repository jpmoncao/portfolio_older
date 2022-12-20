import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'

import './menu.css'



const Menu = () => {
    const [clickButton, setClickButton] = useState(false)

    function changeStateBtn() {
        if (!clickButton) {
            setClickButton(true)
        } else {
            setClickButton(false)
        }
    }

    return (
        <>
            <Popover.Root>
                <Popover.Trigger>
                    <div
                        className={`burger burger-slip ${clickButton ? 'open' : ''}`}

                        onClick={changeStateBtn}
                    >
                        <div className='burger-lines'></div>
                    </div>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className='h-screen w-48 bg-fauxDark md:w-96'>
                        <div className="flex flex-col items-center py-24 space-y-6">
                            <a className='font-bold text-xl uppercase hover:text-fauxSkyBlue transition-opacity' href="#home">Home</a>
                            <a className='font-bold text-xl uppercase hover:text-fauxSkyBlue transition-opacity' href="#about">Sobre</a>
                            <a className='font-bold text-xl uppercase hover:text-fauxSkyBlue transition-opacity' href="#skills">Habilidades</a>
                            <a className='font-bold text-xl uppercase hover:text-fauxSkyBlue transition-opacity' href="#projects">Projetos</a>
                            <a className='font-bold text-xl uppercase hover:text-fauxSkyBlue transition-opacity' href="#contacts">Contatos</a>
                        </div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </>
    )
}


export function Header() {
    return (
        <div className="flex items-center justify-between w-full h-20 bg-fauxDark px-8 fixed top-0 z-50">
            <h1 className='text-2xl text-fauxSkyBlue uppercase font-bold drop-shadow-md'>João Pedro</h1>

            <Menu />
        </div>
    )
}
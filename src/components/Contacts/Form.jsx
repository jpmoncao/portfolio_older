import { useState } from "react"
import emailjs from '@emailjs/browser'

export function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            from_email: message,
            message: message
        }
        console.log(import.meta.env.PUBLIC_KEY)
        emailjs.send('service_xe5urbr', 'template_jush1m5', templateParams, '4lqZO_aTxcsDzX_5y')
            .then(res => {
                alert('Email enviado com sucesso!')
                console.log(`Status: ${res.status} | Text: ${res.text}`)
                setName('')
                setEmail('')
                setMessage('')
            }, error => {
                alert('Falha ao enviar o email!')
                console.error(error)
            })

    }

    return (
        <form onSubmit={sendEmail} className="flex flex-col space-y-4 w-4/6 lg:w-2/5 mx-auto border-2 px-6 py-8 rounded-md">
            <input
                className="pl-4 py-2 rounded-lg text-slate-300 outline-none placeholder:opacity-50 focus:drop-shadow-[0_0_12px_rgba(121,176,242,0.3)]"
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
                value={name}
                required
            />
            <input
                className="pl-4 py-2 rounded-lg text-slate-300 outline-none placeholder:opacity-50 focus:drop-shadow-[0_0_12px_rgba(121,176,242,0.3)]"
                type="email"
                name="email"
                id="email"
                placeholder="Seu email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
            />
            <textarea
                className="pl-4 py-2 rounded-lg text-slate-300 outline-none resize-none placeholder:opacity-50 focus:drop-shadow-[0_0_12px_rgba(121,176,242,0.3)]"
                name="message"
                id="message"
                placeholder="Escreva sua mensagem"
                rows={5}
                onChange={e => setMessage(e.target.value)}
                value={message}
                required
            ></textarea>

            <button type="submit" className="bg-fauxBlue w-2/6 xl:w-1/6 h-10 py-2 rounded-3xl self-center hover:bg-fauxBleuFrance transition-color hover:transition-color">Enviar</button>
        </form>
    )
}
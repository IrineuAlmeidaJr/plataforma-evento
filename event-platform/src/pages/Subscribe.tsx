import { gql, useMutation } from "@apollo/client";
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import ReactMockup from "/src/assets/code-mockup.png"

export function Subscribe() {
    // useNavigate() -> redireciona o usuário para um outra tela/link sem que ele
    // tenha que clicar em algum link com uma ancora, veja utilizamos no 
    // handleSubscribe colocando essa função como assincrona e quando ela
    // retornar algo sera redirecionado.
    const navigate = useNavigate()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Aqui devolve um array fazemos a desestruturação e o primeiro elemento 
    // do array é uma função, essa função que quando eu chamar ela ai sim
    // que irá executar a mutation, so no segundo paramentro fazemos a 
    // desestruturação para pegar o resultado da mutation, pois, lembra que 
    // na mutation tambem eu posso receber algo de retorno, no nosso caso ele
    // retorna o id, mas, por enquanto não iremos pegar esse dado e só
    // iremos pegar o createSubscriber.
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()
    // const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);
    // Temo um segundo parametro que retorna que é o loading que irá dizer se
    // já terminou ou não a mutation, então, se true que dizer que terminou, se
    // false quer dizer que ainda está sendo feita, ai podemos colocar isso no
    // botão de envio/inscrição desabilitando ele enquanto estiver fazendo a 
    // mutation, ou seja, enquanto estiver enviando o usuário não consegue
    // ficar clicando várias vezes para fazer um reenvio , ele tem que esperar
    
    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        // Chamo a função e passo um objeto que contem os dados necessários para
        // no caso fazer o insert. Passa variables nome e email.
        await createSubscriber({
            variables:{
                name,
                email
            }
        }) 
        
        navigate('/event')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500"> aplicação completa </strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded"> 
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col grap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className="bg-gray-900 rounded mt-2 px-5 h-14"
                            type="text" 
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button 
                            type="submit"
                            disabled={ loading }
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga    
                        </button>
                    </form>
                </div>

            </div>
            <img src={ReactMockup} className="mt-10" alt='imageCodeMockup' />
        </div>
    )
}
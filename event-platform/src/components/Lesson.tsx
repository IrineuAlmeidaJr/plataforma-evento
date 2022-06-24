import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';
// Importo o ptBR do date-fns e depois coloca dentro do formate como locale, para 
// ficar em portugues, no caso os dias da semana e mês em portugues

interface LessonProps {
    active: boolean;
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}
export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateDormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm ", {
        locale: ptBR
    })
    
    return (
        // O group ele forma um grupo ai nós utilizamos para fazer um estilo de quando passar
        // por cima de qualquer parte de grupo vai fazer um hover mudando a cor da borda
        // para verde, mesmo que eu não passe com o cursor do mouse envima da caixinha 
        // propriamente dita, se passar na tag que tem o group já irá mudar a cor da borda,
        // para tanto usou group-hover para identificar o elemento que devo mudar
        props.active ?
        <Link to={`/event/lesson/${props.slug}`}className='group'>
            <span className="text-gray-300">
                {availableDateDormatted}
            </span>

            <div className="relative rounded p-4 mt-2 bg-green-500 text-white border border-green-500 group-hover:border-x-green-600">
                <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                        <span className="text-sm font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em Breve
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 border border-white font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span> 
                </header>

                <strong className="mt-5 block" >
                    {props.title}
                </strong>
                
                <div className="w-3 h-3 absolute bg-green-500 rotate-45 -left-1 top-[50%] bottom-[50%]"></div>

            </div>            
        </Link>
        :
        <Link to={`/event/lesson/${props.slug}`}className='group'>
            <span className="text-gray-300">
                {availableDateDormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em Breve
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span> 
                </header>

                <strong className="text-gray-200 mt-5 block" >
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}
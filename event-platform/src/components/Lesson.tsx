import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
// Importo o ptBR do date-fns e depois coloca dentro do formate como locale, para 
// ficar em portugues, no caso os dias da semana e mês em portugues
import classNames from 'classnames'
import { is } from 'date-fns/locale';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}
export function Lesson(props: LessonProps) {
    const { slug }  = useParams<{ slug: string }>();
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateDormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm ", {
        locale: ptBR
    })
    
    const isActiveLesson = slug === props.slug

    return (
        // O group ele for ma um grupo ai nós utilizamos para fazer um estilo de quando passar
        // por cima de qualquer parte de grupo vai fazer um hover mudando a cor da borda
        // para verde, mesmo que eu não passe com o cursor do mouse envima da caixinha 
        // propriamente dita, se passar na tag que tem o group já irá mudar a cor da borda,
        // para tanto usou group-hover para identificar o elemento que devo mudar
        
        <Link to={`/event/lesson/${props.slug}`}className='group'>
            <span className="text-gray-300">
                {availableDateDormatted}
            </span>

            {/* No tailwind tem jeito de fazer uma estilização consifiona, veja, como
            fica, devemos colocar chaves */}
            <div 
                className={`relative rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}
            > 
                <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                        <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em Breve
                        </span>
                    )}
                    <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold', {
                        'border-green-300': !isActiveLesson,
                        'border-white': isActiveLesson
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span> 
                </header>                
                
                <strong className={classNames(" mt-5 block", {
                    'text-gray-200': !isActiveLesson,
                    'text-white': isActiveLesson,
                })} >
                    {props.title}
                </strong>

                {isActiveLesson ? 
                    <div className="w-3 h-3 absolute bg-green-500 rotate-45 -left-1 top-[50%] bottom-[50%]"/> : ''
                }            

            </div>
        </Link>
    )
}
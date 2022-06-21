import { gql, useQuery} from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

 // gql permite escrever query ou mutation do graphQL tendo a sintaxe highlighting
 // para facilitar a entender o que é cada uma das informações aqui dentro
const GET_LESSONS_QUERY = gql  ` 
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    // <h1 className="text-5xl font-bold text-violet-500">Hello World!</h1>
    // Posso passar como classe, conforme acima ou podemos passar 
    // como fazemos com css, criamos no caso title e lá dentro do
    // arquivo global.css estilizamos e colocamos @apply e com o que 
    // queremos ter de estilo
    <ul>
      {/* Ponto de interrogação (?) após o data é para ele só tentar procurar 
      a lessons caso o data não tenha um valor vazio, pois, se não tiver não tem 
      posição no Array, tivemos que colocar a key para identificar o elemento
      html, nesse caso utilizamos a id que samos que é unica para cada um */}
      {data?.lessons.map((lesson) => <li key={lesson.id}>{lesson.title}</li>)}
    </ul>
  )
}

export default App

import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video} from "../components/Video";
import { VideoDefault } from "../components/VideoDefault";

export function Event() {
    // useParams() vem de dentro do React Router DOM 
    const { slug } = useParams<{ slug: string }>();
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {   slug 
                    ? <Video lessonSlug={slug}/> 
                    : <VideoDefault lessonSlug={"aula-01"}/>
                }
                <Sidebar/>
            </main>
        </div>        
    )
}
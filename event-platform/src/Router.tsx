import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/event" element={<Event/>}/>
            {/* Como iremos receber uma informação dinâmica que no caso é o link do 
            vídeo que está no youtube temos que colocar o endereço mais dois porntos : e em
            seguida podemos dar um nome */}
            <Route path="/event/lesson/:slug" element={<Event/>}/>
        </Routes>
    )
}
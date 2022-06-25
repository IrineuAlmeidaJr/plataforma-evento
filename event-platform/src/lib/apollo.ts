import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache() // faz o cache na memória da aplicação como 
    // variáveis, e aqui existem outras estratégias de cache como localstorage,
    // entre outras alternativas de cache.
})
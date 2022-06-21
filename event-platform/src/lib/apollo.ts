import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7n87y118i01xxe54who02/master',
    cache: new InMemoryCache() // faz o cache na memória da aplicação como 
    // variáveis, e aqui existem outras estratégias de cache como localstorage,
    // entre outras alternativas de cache.
})
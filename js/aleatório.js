const nomes = ["Miguel", "Gael", "Maria", "Arthur", "Helena", "Heitor", "Alice "];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

 export const nome = aleatorio(nomes);
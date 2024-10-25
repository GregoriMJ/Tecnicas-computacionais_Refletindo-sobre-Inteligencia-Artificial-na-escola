const nomes = ["Miguel", "Gael", "Maria", "Arthur", "Helena", "Heitor", "Nome 7"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

 export const nome = aleatorio(nomes);
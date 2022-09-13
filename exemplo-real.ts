var DadosAppStatic = {
    tabela: [] as ListaHistorico[],
};

function preparaTabela(dadosListaHistorico: DadosListaHistorico[], dadosListaTexto: DadosListaTexto[]){
    const [ array1 ] = dadosListaHistorico;
    const [ array2 ] = dadosListaTexto;
    const arrayNovo = [] as ListaHistorico[];
    const dictionary = {} as any;

    // complexidade O(n)

    for(const texto of array2.listaTexto){
        dictionary[texto.timestamp] = texto.texto;
    }

    for(const historico of array1.listaHistorico){
        historico.texto = dictionary[historico.timestamp];
        arrayNovo.push(historico);
    }


    // complexidade O(n²)

    // array1.listaHistorico.forEach((historico: ListaHistorico) => {
    //     array2.listaTexto.forEach((texto: ListaTexto) => {
    //         if(historico.timestamp === texto.timestamp){
    //             historico.texto = texto.texto;
    //             arrayNovo.push(historico);
    //         }
    //     });
    // });

    return arrayNovo;

}

const dadosListaHistorico: DadosListaHistorico[] = [
    { quantidade: 1, listaHistorico: [{ canal: 'sistema', timestamp: '29231925020' }] }
];
const dadosListaTexto: DadosListaTexto[] = [
    { quantidade: 1, listaTexto: [{ estado: 'pronta', timestamp: '29231925020', texto: 'Texto1' }, 
    {estado: 'pronta', timestamp: '2564020489', texto: 'Texto2'}] }
];

DadosAppStatic.tabela = preparaTabela(dadosListaHistorico, dadosListaTexto);

console.log("Vetor da tabela: ", DadosAppStatic.tabela);

interface DadosListaHistorico {
    quantidade: number;
    listaHistorico: ListaHistorico[];
}

interface DadosListaTexto {
    quantidade: number;
    listaTexto: ListaTexto[];
}

interface ListaHistorico {
    canal: string;
    timestamp: string;
    texto?: string;
}

interface ListaTexto {
    estado: string;
    timestamp: string;
    texto: string;
}


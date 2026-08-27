const express = require('express');
const app = express();
app.use(express.json());

app.post('/somar', (req, res) => {
    const{numeros}=req.body;
    let soma=0;
    for(let i=0;i<numeros.length;i++){
        soma=soma+numeros[i];
    } 
    res.status(200).json({soma});
});

app.post('/media', (req, res) => {
    const{numeros}=req.body;
    let soma=0; 
    for(let i=0;i<numeros.length;i++){
        soma=soma+numeros[i];
    }           
    const media=soma/numeros.length;
    res.status(200).json({media});
});

app.post('/maior-menor', (req, res) => {
    const{numeros}=req.body;
    let maior=Math.max(...numeros);
    let menor=Math.min(...numeros);
    res.status(200).json({maior, menor});
});

app.post('/bhaskara', (req, res) => {
    const{a,b,c}=req.body;
    const delta=Math.pow(b,2)-4*a*c;
    if(delta<0){
        res.status(200).json({mensagem:"Não existem raízes reais"});    
    }else{
        const x1=(-b+Math.sqrt(delta))/(2*a);
        const x2=(-b-Math.sqrt(delta))/(2*a);
        res.status(200).json({x1,x2});
    }
});

app.post('/fibonacci', (req, res) => {
    const{numero}=req.body;
    let anterior=0;
    let atual=1;
    for(let i=2;i<=numero;i++){
        let proximo=anterior+atual;
        anterior=atual;
        atual=proximo;
    }
    res.status(200).json({fibonacci:atual});
});

app.post('/primo', (req, res) => {
    const{numero}=req.body;
    let primo=true;
    if(numero<2){
        primo=false;
    }
        for(let i=2;i<numero;i++){
            if(numero%i===0){
                primo=false;
            }
        }
    res.status(200).json({primo});
});

app.post('/fatorial', (req, res) => {
    const{numero}=req.body;
    let fatorial=1; 
    for(let i=1;i<=numero;i++){
        fatorial=fatorial*i;
    }
    res.status(200).json({fatorial});
});

app.post('/inverter', (req, res) => {
    const{texto}=req.body;
    let textoInvertido=texto.split('').reverse().join('');
    res.status(200).json({textoInvertido});
});

app.post('/contar-palavras', (req, res) => {
    const{texto}=req.body;
    let palavras=texto.split(' ').length;
    res.status(200).json({palavras});
});

app.post('/palindromo', (req, res) => {
    const{texto}=req.body;
    let invertido=texto.split('').reverse().join('');
    let palindromo=texto===invertido;
    res.status(200).json({palindromo});
});
    

app.listen(3000);


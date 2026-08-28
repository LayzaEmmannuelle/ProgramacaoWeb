let medicos =[];
let pacientes =[];
let consultas =[];

function getMedicos(){
    return medicos;
}
function setMedicos(novosMedicos){
    medicos = novosMedicos;
}
function getPacientes(){
    return pacientes;
}
function setPacientes(novosPacientes){
    pacientes = novosPacientes;
}
function getConsultas(){
    return consultas;
}
function setConsultas(novasConsultas){
    consultas = novasConsultas;
}   

module.exports = {
    getMedicos,
    setMedicos, 
    getPacientes,
    setPacientes,
    getConsultas,
    setConsultas
}
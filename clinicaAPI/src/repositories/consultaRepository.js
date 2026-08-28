const db = require('../../db');
const criarConsulta = (consulta) => {
    const consultas = db.getConsultas();
    consultas.push(consulta);
    db.setConsultas(consultas);
    return consulta;
};

const listarConsultas = () => {
    return db.getConsultas();
};

const buscarConsulta = (id) => {
    const consultas = db.getConsultas();
    return consultas.find(consulta => consulta.id == id);
};

const atualizarConsulta = (id, dados) => {
    const consultas = db.getConsultas();
    const consulta = consultas.find(consulta => consulta.id == id);
    consulta.data=dados.data;
    consulta.hora=dados.hora;
    db.setConsultas(consultas);
    return consulta;
};

const atualizarConsultaParcial = (id, dados) => {
    const consultas = db.getConsultas();    
    const consulta = consultas.find(consulta => consulta.id == id);
    if(dados.medicoId!==undefined){
        consulta.medicoId=dados.medicoId;
    }
    if(dados.pacienteId!==undefined){
        consulta.pacienteId=dados.pacienteId;
    }
    if(dados.data){
        consulta.data=dados.data;
    }
    db.setConsultas(consultas);
    return consulta;
};

const deletarConsulta = (id) => {
    const consultas = db.getConsultas();
    const novasConsultas = consultas.filter(consulta => consulta.id != id);
    db.setConsultas(novasConsultas);
    return novasConsultas;
};

module.exports = {
    criarConsulta,
    listarConsultas,
    buscarConsulta,
    atualizarConsulta,
    atualizarConsultaParcial,
    deletarConsulta
};

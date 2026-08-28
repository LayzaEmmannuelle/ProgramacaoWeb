const db = require('../../db');
const criarPaciente = (paciente) => {   
const pacientes = db.getPacientes();
    pacientes.push(paciente);
    db.setPacientes(pacientes);
    return paciente;
};

const listarPacientes = () => {
    return db.getPacientes();
};

const buscarPaciente = (id) => {
    const pacientes = db.getPacientes();
    const paciente = pacientes.find(paciente => paciente.id == id);
    const consultas = db.getConsultas();
    const consultasDoPaciente = consultas.filter(consulta => consulta.pacienteId == id);
    return { ...paciente, consultas: consultasDoPaciente };
};

const atualizarPaciente = (id, dados) => {
    const pacientes = db.getPacientes();
    const paciente = pacientes.find(paciente => paciente.id == id);
    paciente.nome=dados.nome;
    paciente.email=dados.email;
    db.setPacientes(pacientes);
    return paciente;
};

const atualizarPacienteParcial = (id, dados) => {
    const pacientes = db.getPacientes();    
    const paciente = pacientes.find(paciente => paciente.id == id);
    if(dados.nome){
         paciente.nome=dados.nome;
    }
    if(dados.email){
        paciente.email=dados.email;
    }
    db.setPacientes(pacientes);
    return paciente;
};

const deletarPaciente = (id) => {
    const pacientes = db.getPacientes();
    const novosPacientes = pacientes.filter(paciente => paciente.id != id);
    db.setPacientes(novosPacientes);
};

module.exports = {
    criarPaciente,
    listarPacientes,    
    buscarPaciente,
    atualizarPaciente,
    atualizarPacienteParcial,
    deletarPaciente
};
const db = require('../../db');
const criarMedico = (medico) => {
    const medicos = db.getMedicos();
    medicos.push(medico);
    db.setMedicos(medicos);
    return medico;
};

const listarMedicos = () => {
    return db.getMedicos();
};

const buscarMedico = (id) => {
    const medicos = db.getMedicos();
    const medico = medicos.find(medico => medico.id == id);
    const consultas = db.getConsultas();
    const consultasDoMedico = consultas.filter(consulta => consulta.medicoId == id);
    return { ...medico, consultas: consultasDoMedico };
};

const atualizarMedico = (id, dados) => {
    const medicos = db.getMedicos();
    const medico = medicos.find(medico => medico.id == id);
    medico.nome=dados.nome;
    medico.especialidade=dados.especialidade;
    db.setMedicos(medicos);
    return medico;
};

const atualizarMedicoParcial = (id, dados) => {
    const medicos = db.getMedicos();
    const medico = medicos.find(medico => medico.id == id);
    if(dados.nome){
        medico.nome=dados.nome;
    }
    if(dados.especialidade){
        medico.especialidade=dados.especialidade;
    }
    db.setMedicos(medicos);
    return medico;
};

const deletarMedico = (id) => {
    const medicos = db.getMedicos();
    const medico = medicos.find(medico => medico.id == id);
    const novosMedicos = medicos.filter(medico => medico.id != id);
    db.setMedicos(novosMedicos);
};

module.exports = {
    criarMedico,
    listarMedicos,      
    buscarMedico,
    atualizarMedico,
    atualizarMedicoParcial,
    deletarMedico
};
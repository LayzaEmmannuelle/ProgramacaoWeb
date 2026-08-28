const medicoRepository = require('../repositories/medicoRepository');

const criarMedico = (nome, especialidade) => {
    const medicos = medicoRepository.listarMedicos();
    const medico = {
        nome,
        especialidade,
        id: medicos.length 
    };
    return medicoRepository.criarMedico(medico);
};
const listarMedicos = () => {
    return medicoRepository.listarMedicos();
}

const buscarMedico = (id) => {
    return medicoRepository.buscarMedico(id);
};

const atualizarMedico = (id, nome, especialidade) => {
    return medicoRepository.atualizarMedico(id,{
        nome,
        especialidade
    });
};

const atualizarMedicoParcial = (id, dados) => {
    return medicoRepository.atualizarMedicoParcial(id, dados);
};

const deletarMedico = (id) => {
    return medicoRepository.deletarMedico(id);
};

module.exports = {
    criarMedico,
    listarMedicos,      
    buscarMedico,
    atualizarMedico,
    atualizarMedicoParcial,
    deletarMedico
};
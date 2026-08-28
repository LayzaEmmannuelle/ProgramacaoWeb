const pacienteRepository = require('../repositories/pacienteRepository');
const criarPaciente = (nome, email) => {
    const pacientes = pacienteRepository.listarPacientes();
    const paciente = {
        nome,
        email,
        id: pacientes.length
    };
    return pacienteRepository.criarPaciente(paciente);
};

const listarPacientes = () => {
    return pacienteRepository.listarPacientes();
};

const buscarPaciente = (id) => {
    return pacienteRepository.buscarPaciente(id);
};

const atualizarPaciente = (id, nome, email) => {
    return pacienteRepository.atualizarPaciente(id, {
        nome,
        email
    });
};

const atualizarPacienteParcial = (id, dados) => {
    return pacienteRepository.atualizarPacienteParcial(id, dados);
};

const deletarPaciente = (id) => {
    return pacienteRepository.deletarPaciente(id);
}

module.exports = {
    criarPaciente,
    listarPacientes,    
    buscarPaciente,
    atualizarPaciente,
    atualizarPacienteParcial,
    deletarPaciente
};
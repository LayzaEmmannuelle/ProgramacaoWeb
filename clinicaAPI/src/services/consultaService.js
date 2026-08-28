const consultaRepository = require('../repositories/consultaRepository');
const criarConsulta = (medicoId, pacienteId, data) => {
    const consultas = consultaRepository.listarConsultas();
    const horarioOcupado = consultas.find(consulta => consulta.medicoId == medicoId && consulta.data == data);
    if (horarioOcupado) {
        throw new Error('Horário já estáocupado');
    }
    const consulta = { 
        medicoId, 
        pacienteId, 
        data,
        id: consultas.length
    };
    return consultaRepository.criarConsulta(consulta);
};

const listarConsultas = () => {
    return consultaRepository.listarConsultas();
};

const buscarConsulta = (id) => {
    return consultaRepository.buscarConsulta(id);
};

const atualizarConsulta = (id, medicoId, pacienteId, data) => {
    const consultas = consultaRepository.listarConsultas();
    const horarioOcupado = consultas.find(consulta => consulta.id != id && consulta.medicoId == medicoId && consulta.data == data);
    if (horarioOcupado) {
        throw new Error('Horário já está ocupado');
    }
    return consultaRepository.atualizarConsulta(id, {
        medicoId,
        pacienteId,
        data
    });
};

const atualizarConsultaParcial = (id, dados) => {
    const consultas = consultaRepository.listarConsultas();
    const consulta = consultas.find(consulta => consulta.id == id);
    const medicoId = dados.medicoId !== undefined ? dados.medicoId : consulta.medicoId;
    const pacienteId = dados.pacienteId !== undefined? dados.pacienteId: consulta.pacienteId;
    const data = dados.data !== undefined ? dados.data : consulta.data;
    const horarioOcupado = consultas.find(consultaExistente => consultaExistente.id != id && consultaExistente.medicoId == medicoId && consultaExistente.data == data);
    if (horarioOcupado) {
        throw new Error('Horário já está ocupado');
    }
    return consultaRepository.atualizarConsultaParcial(id, {
        medicoId,
        pacienteId,
        data
    });
};

const deletarConsulta = (id) => {
    return consultaRepository.deletarConsulta(id);
};

module.exports = {
    criarConsulta,
    listarConsultas,
    buscarConsulta,
    atualizarConsulta,
    atualizarConsultaParcial,
    deletarConsulta
};
const pacienteService = require('../services/pacienteService');
const criarPaciente = (req, res) => {
    const { nome, email } = req.body;
    const paciente = pacienteService.criarPaciente(nome, email);
    res.status(201).json(paciente);
};

const listarPacientes = (req, res) => {
    const pacientes = pacienteService.listarPacientes();
    res.status(200).json(pacientes);
};

const buscarPaciente = (req, res) => {
    const paciente = pacienteService.buscarPaciente(req.params.id);
    res.status(200).json(paciente);
};

const atualizarPaciente = (req, res) => {
    const { nome, email } = req.body;
    const paciente = pacienteService.atualizarPaciente(req.params.id, nome, email);
    res.status(200).json(paciente);
};

const atualizarPacienteParcial = (req, res) => {
    const paciente = pacienteService.atualizarPacienteParcial(req.params.id, req.body);
    res.status(200).json(paciente);
};

const deletarPaciente = (req, res) => {
    pacienteService.deletarPaciente(req.params.id);
    res.status(200).send({ message: 'Paciente deletado com sucesso' });
};

module.exports = { 
    criarPaciente,
    listarPacientes,
    buscarPaciente,
    atualizarPaciente,
    atualizarPacienteParcial,
    deletarPaciente
};
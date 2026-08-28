const medicoService = require('../services/medicoService');

const criarMedico = (req, res) => {
    const { nome, especialidade } = req.body;
    const medico = medicoService.criarMedico(nome, especialidade);
    res.status(201).json(medico);
};

const listarMedicos = (req, res) => {
    const medicos = medicoService.listarMedicos();
    res.status(200).json(medicos);
}

const buscarMedico = (req, res) => {
    const medico = medicoService.buscarMedico(req.params.id);
    res.status(200).json(medico);
};

const atualizarMedico = (req, res) => {
    const{nome, especialidade} = req.body;
    const medico = medicoService.atualizarMedico(req.params.id, nome, especialidade);
    res.status(200).json(medico);
};

const atualizarMedicoParcial = (req, res) => {
    const{nome, especialidade} = req.body;
    const medico = medicoService.atualizarMedicoParcial(req.params.id, { nome, especialidade});
    res.status(200).json(medico);
};

const deletarMedico = (req, res) => {
    medicoService.deletarMedico(req.params.id);
    res.status(200).send({message: 'Médico deletado com sucesso'});
};

module.exports = {
    criarMedico,
    listarMedicos,  
    buscarMedico,
    atualizarMedico,
    atualizarMedicoParcial,
    deletarMedico
};  
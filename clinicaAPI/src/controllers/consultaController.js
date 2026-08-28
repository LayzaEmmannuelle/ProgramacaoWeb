const consultaService = require('../services/consultaService');
const criarConsulta = (req, res) => {
    const { medicoId, pacienteId, data } = req.body;
    try {
        const consulta = consultaService.criarConsulta(
            medicoId,
            pacienteId,
            data
        );
        res.status(201).json(consulta);
    } catch (error) {
        res.status(400).json({ 
            error: error.message 
        });
    };
};

const listarConsultas = (req, res) => {
    const consultas = consultaService.listarConsultas();
    res.status(200).json(consultas);
};

const buscarConsulta = (req, res) => {
    const consulta = consultaService.buscarConsulta(req.params.id);
    res.status(200).json(consulta);
};

const atualizarConsulta = (req, res) => {
    const{medicoId,pacienteId,data} = req.body;
    try {
        const consulta = consultaService.atualizarConsulta(
            req.params.id,
            medicoId,
            pacienteId,
            data
        );
        res.status(200).json(consulta);
    } catch (error) {
        res.status(400).json({ 
            error: error.message 
        });
    }
};

const atualizarConsultaParcial = (req, res) => {
    const{medicoId,pacienteId,data} = req.body;
    try {
        const consulta = consultaService.atualizarConsultaParcial(
            req.params.id,
            {
                medicoId,
                pacienteId,
                data
            }
        );
        res.status(200).json(consulta);
    } catch (error) {
        res.status(400).json({ 
            error: error.message 
        });
    }
};

const deletarConsulta = (req, res) => {
    const consultas = consultaService.deletarConsulta(req.params.id);
    res.status(200).send({message: 'Consulta deletada com sucesso'});
};

module.exports = {
    criarConsulta,
    listarConsultas,
    buscarConsulta,
    atualizarConsulta,
    atualizarConsultaParcial,
    deletarConsulta
};

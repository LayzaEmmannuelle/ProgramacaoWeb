const express = require('express');
const medicoController = require('./scr/controllers/medicoController');
const pacienteController = require('./scr/controllers/pacienteController');
const consultaController = require('./scr/controllers/consultaController');

const app = express();
app.use(express.json());

app.post('/medicos', medicoController.criarMedico);
app.get('/medicos', medicoController.listarMedicos);
app.get('/medicos/:id', medicoController.buscarMedico);
app.patch('/medicos/:id', medicoController.atualizarMedicoParcial);
app.put('/medicos/:id', medicoController.atualizarMedico);
app.delete('/medicos/:id', medicoController.deletarMedico);

app.post('/pacientes', pacienteController.criarPaciente);
app.get('/pacientes', pacienteController.listarPacientes);
app.get('/pacientes/:id', pacienteController.buscarPaciente);
app.patch('/pacientes/:id', pacienteController.atualizarPacienteParcial);
app.put('/pacientes/:id', pacienteController.atualizarPaciente);
app.delete('/pacientes/:id', pacienteController.deletarPaciente);
app.listen(3000);

app.post('/consultas', consultaController.criarConsulta);
app.get('/consultas', consultaController.listarConsultas);
app.get('/consultas/:id', consultaController.buscarConsulta);
app.patch('/consultas/:id', consultaController.atualizarConsultaParcial);
app.put('/consultas/:id', consultaController.atualizarConsulta);
app.delete('/consultas/:id', consultaController.deletarConsulta);
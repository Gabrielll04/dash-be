import express from "express"
const v1_interna_routes = express.Router();

v1_interna_routes.get("/", (req, res) => {
    res.send("Não foi possível localizar o curso!");
});

v1_interna_routes.get("/:curso", (req, res) => {
    const curso = req.params.curso;

    res.json(curso);
});

export default v1_interna_routes;
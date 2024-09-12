const Autor = require("../models/livro_model.js");

exports.createAutor = async (req, res) => {
  try {
    const livro = await Autor.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar livro!" });
  }
};

exports.getAutor = async (req, res) => {
  try {
    const livros = await Autor.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar livros!" });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const livro = await Autor.findById(req.params.id);
    res.status(200).json(livro);
  } catch (error) {
    res.status(404).json({ error: "Autor não encontrado!" });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const livro = await Auotr.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar livro!" });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar livro!" });
  }
};

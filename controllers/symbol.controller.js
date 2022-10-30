const Pool = require('pg').Pool;
const { Symbol } = require('../models/symbol.model');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const getSymbols = (request, response) => {
  pool.query('SELECT * FROM public."Symbols";', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getSymbolById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM symbols WHERE Id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createSymbol = (symbol, response) => {
  pool.query(
    'INSERT INTO public."Symbols"("Name", "MinQuantity", "MaxQuantity", "IsActive") VALUES ($1, $2, $3, $4) RETURNING *',
    [symbol.Name,symbol.MinQuantity,symbol.MaxQuantity,symbol.IsActive],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
    }
  );
};

const updateSymbol = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE symbols SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Symbol modified with ID: ${id}`);
    }
  );
};

const deleteSymbol = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM symbols WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Symbol deleted with ID: ${id}`);
  });
};

module.exports = {
  getSymbols,
  getSymbolById,
  createSymbol,
  updateSymbol,
  deleteSymbol,
};
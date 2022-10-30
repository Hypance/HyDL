const Pool = require('pg').Pool;
const { Candlestick } = require('../models/candlestick.model');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const getCandlesticks = (request, response) => {
  pool.query('SELECT * FROM public."Candlesticks";', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCandlestickById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public."Candlesticks" WHERE Id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCandlestick = (candlestick, response) => {
  pool.query(
    'INSERT INTO public."Candlesticks"("Name", "OpenTime", "OpenPrice", "HighPrice", "LowPrice", "ClosePrice", "Volume", "CloseTime", "Interval", "Symbol", "IsActive") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
    [candlestick.Name,candlestick.OpenTime,candlestick.OpenPrice,candlestick.HighPrice,candlestick.LowPrice,candlestick.ClosePrice,candlestick.Volume,candlestick.CloseTime,candlestick.Interval,candlestick.Symbol,candlestick.IsActive],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
    }
  );
};

const updateCandlestick = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE symbols SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Candlestick modified with ID: ${id}`);
    }
  );
};

const deleteCandlestick = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM symbols WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Candlestick deleted with ID: ${id}`);
  });
};

module.exports = {
  getCandlesticks,
  getCandlestickById,
  createCandlestick,
  updateCandlestick,
  deleteCandlestick,
};
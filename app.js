import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Load bitcoin candle data from the example JSON file
const bitcoinData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'example', 'bitcoin-example-rsi.json'), 'utf-8')
);

app.get('/', (req, res) => {
  res.render('index', { candles: bitcoinData });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

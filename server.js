const AWS = require('aws-sdk');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // 👈 Needed to serve frontend
const app = express();

const port = process.env.PORT || 5000;

const DB_HOST = 'devops-training.c3tiwhvjkyjy.us-west-2.rds.amazonaws.com';
const DB_NAME = 'training';
const DB_PORT = 3306;

const secretsManager = new AWS.SecretsManager({ region: 'us-west-2' });
const secretId = 'rds!db-88e2b53d-0514-4471-b8de-2ac870f07e79';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

secretsManager.getSecretValue({ SecretId: secretId }, (err, data) => {
  if (err) {
    console.error("❌ Error fetching secret:", err);
    process.exit(1);
  }

  const creds = JSON.parse(data.SecretString);

  const connection = mysql.createConnection({
    host: DB_HOST,
    user: creds.username,
    password: creds.password,
    port: DB_PORT,
    database: DB_NAME
  });

  connection.connect();

  // API Routes
  app.get('/api/customers', (req, res) => {
    connection.query("SELECT * FROM CUSTOMER WHERE isDeleted = 0", (err, rows) => {
      if (err) res.status(500).send(err);
      else res.send(rows);
    });
  });

  app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
  });

  // 🧠 Serve frontend static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // ⚠️ Catch-all to serve index.html for frontend routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  // Start server
  app.listen(port, () => console.log(`✅ App running on port ${port}`));
});

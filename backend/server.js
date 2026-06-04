const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');
const path    = require('path');
require('dotenv').config();

const { connectDB } = require('./config/db');

const app = express();

// Connect Database
connectDB();

// ── CORS (Bulletproof Custom Middleware) ──────────────────────────────────
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/uploads',           express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth',          require('./routes/authRoutes'));
app.use('/api/complaints',    require('./routes/complaintRoutes'));
app.use('/api/users',         require('./routes/userRoutes'));
app.use('/api/categories',    require('./routes/categoryRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

// ── Health Check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'OK',
    project: 'Mardan Smart City Complaint Portal',
    timestamp: new Date().toISOString(),
  });
});

// ── Prometheus Metrics ────────────────────────────────────────────────────────
const promClient = require('prom-client');
promClient.collectDefaultMetrics();

app.get('/api/metrics', async (_req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.send(await promClient.register.metrics());
});

// ── 404 Handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ── Global Error Handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

// ── Start Server ──────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🏙️  Mardan Smart City API → http://localhost:${PORT}`);
});

module.exports = app;
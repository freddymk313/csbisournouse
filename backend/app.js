require('dotenv').config();
const express = require('express');
const helmet = require('helmet'); // Nouveau: sécurité renforcée
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Nouveau: protection contre les attaques brute force
const { errors } = require('celebrate'); // Pour la validation Joi/Swagger
const morgan = require('morgan'); // Nouveau: logging des requêtes

const setupSwagger = require('./swagger');
const admissionRoutes = require('./routes/admission');

const app = express();

// 1. Middleware de sécurité (DOIT être en premier)
app.use(helmet());
app.use(morgan('combined')); // Log des requêtes en format standard Apache

// 2. Configuration CORS
const corsOptions = {
  origin: process.env.CORS_ALLOWED_ORIGINS.split(','),
  methods: process.env.CORS_METHODS.split(','),
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS.split(','),
  credentials: process.env.CORS_CREDENTIALS === 'true',
  maxAge: parseInt(process.env.CORS_MAX_AGE)
};
app.use(cors(corsOptions));

// 3. Rate Limiting (protection contre DDoS)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', apiLimiter);

// 4. Body Parsers (avec limites de taille)
app.use(express.json({ limit: '10kb' })); // Alternative moderne à bodyParser
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 5. Swagger (devrait venir avant les routes)
setupSwagger(app);

// 6. Static Files (avec options de sécurité)
app.use('/uploads', express.static('uploads', {
  setHeaders: (res) => {
    res.set('X-Content-Type-Options', 'nosniff');
  }
}));

// 7. Routes principales
app.use('/api', admissionRoutes);

// 8. Middleware d'erreurs (DOIT être en dernier)
app.use(errors()); // Gestion des erreurs de validation
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// 9. Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📚 Documentation: http://localhost:${PORT}/api-docs`);
});
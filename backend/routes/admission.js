const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admission');
const uploadMiddleware = require('../middlewares/upload');

/**
 * @swagger
 * /admission:
 *   post:
 *     summary: Soumettre une demande d'admission
 *     description: Enregistre un nouvel étudiant et son responsable légal
 *     tags: [Admissions]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nom_complet_etudiant
 *               - date_de_naissance
 *               - lieu_de_naissance
 *               - nationalite
 *               - nom_complet_parent
 *               - contact_parent
 *               - niveau_etude
 *               - chemin_fichier
 *             properties:
 *               nom_complet_etudiant:
 *                 type: string
 *                 example: "Jean Dupont"
 *               date_de_naissance:
 *                 type: string
 *                 format: date
 *                 example: "2000-01-01"
 *               lieu_de_naissance:
 *                 type: string
 *                 example: "Paris"
 *               nationalite:
 *                 type: string
 *                 example: "Française"
 *               nom_complet_parent:
 *                 type: string
 *                 example: "Marie Dupont"
 *               contact_parent:
 *                 type: string
 *                 example: "+33123456789"
 *               email_parent:
 *                 type: string
 *                 format: email
 *                 example: "parent@example.com"
 *               niveau_etude:
 *                 type: string
 *                 example: "Terminale"
 *               classe:
 *                  type: int
 *                  example: 5
 *               fichier:
 *                 type: string
 *                 format: binary
 *                 description: Document à uploader (PDF, JPEG, PNG - max 5MB)
 *     responses:
 *       201:
 *         description: Admission enregistrée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 chemin_fichier:
 *                   type: string
 *       400:
 *         description: Erreur de validation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Erreur serveur
 */

// Route POST avec gestion Swagger et middleware Multer
router.post('/admission', 
  (req, res, next) => {
    uploadMiddleware(req, res, (err) => {
      if (err) {
        return res.status(400).json({ 
          error: err.message.includes('chemin_fichier') 
            ? 'Veuillez uploader un fichier valide (JPEG, PNG ou PDF, max 5MB)' 
            : err.message
        });
      }
      next();
    });
  },
  admissionController.submitAdmission
);

module.exports = router;
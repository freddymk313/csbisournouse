const pool = require('../config/db');

exports.submitAdmission = async (req, res) => {
    const {
        nom_complet_etudiant,
        date_de_naissance,
        lieu_de_naissance,
        nationalite,
        nom_complet_parent,
        contact_parent,
        email_parent,
        niveau_etude,
        classe  // Champ entier directement utilisé
    } = req.body;

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Validation des champs requis
        const requiredFields = {
            nom_complet_etudiant: "Nom complet étudiant",
            date_de_naissance: "Date de naissance",
            lieu_de_naissance: "Lieu de naissance",
            nationalite: "Nationalité",
            nom_complet_parent: "Nom complet parent",
            contact_parent: "Contact parent",
            niveau_etude: "Niveau d'étude",
            classe: "Classe"  // Champ maintenant requis
        };

        for (const [field, name] of Object.entries(requiredFields)) {
            if (!req.body[field]) {
                throw new Error(`${name} est requis`);
            }
        }

        // Validation que 'classe' est bien un nombre
        if (isNaN(classe)) {
            throw new Error('Le champ classe doit être un nombre entier');
        }

        // Enregistrement de l'étudiant
        const cheminFichier = req.file ? `/uploads/${req.file.filename}` : null;
        const [studentResult] = await connection.query(
            `INSERT INTO students 
            (nom_complet, date_de_naissance, lieu_de_naissance, nationalite, niveau_etude, chemin_fichier, classe) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                nom_complet_etudiant,
                date_de_naissance,
                lieu_de_naissance,
                nationalite,
                niveau_etude,
                cheminFichier,
                classe  // Conversion en entier
            ]
        );

        // Enregistrement du parent
        const [parentResult] = await connection.query(
            `INSERT INTO parents 
            (etudiant_id, nom_complet, contact, email) 
            VALUES (?, ?, ?, ?)`,
            [
                studentResult.insertId,
                nom_complet_parent,
                contact_parent,
                email_parent || null
            ]
        );

        await connection.commit();

        res.status(201).json({ 
            success: true,
            message: 'Admission enregistrée avec succès',
            student_id: studentResult.insertId,
            parent_id: parentResult.insertId,
            classe
        });

    } catch (error) {
        await connection.rollback();
        
        console.error('Erreur admission:', error.message);
        
        const statusCode = error.message.includes('est requis') || error.message.includes('doit être') ? 400 : 500;
        res.status(statusCode).json({ 
            success: false,
            error: error.message
        });
    } finally {
        connection.release();
    }
};
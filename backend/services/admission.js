const pool = require('../config/db');

exports.getAdmissions = async () => {
    const query = `
    SELECT s.*, p.nom_complet as parent_nom_complet, p.contact, p.email 
    FROM etudiants s JOIN parents p ON s.id = p.etudiant_id`;

    const resultat = await pool.query(query);
    return resultat.rows;
}
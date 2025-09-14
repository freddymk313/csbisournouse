const createStudentsTableSQL = `
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_complet VARCHAR(100) NOT NULL,
    date_de_naissance DATE NOT NULL,
    lieu_de_naissance VARCHAR(50) NOT NULL,
    nationalite VARCHAR(50) NOT NULL,
    niveau_etude VARCHAR(20),
    classe VARCHAR(50),
    chemin_fichier VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

const createParentsTableSQL = `
CREATE TABLE IF NOT EXISTS parents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    nom_complet VARCHAR(100) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    INDEX (student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

// You can now use these SQL strings with your database driver, e.g.:
// db.query(createStudentsTableSQL);
// db.query(createParentsTableSQL);
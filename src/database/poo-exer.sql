-- Active: 1698533477558@@127.0.0.1@3306

CREATE TABLE videos (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    titulo TEXT NOT NULL,
    duracaoSg NUMBER UNIQUE NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);


INSERT INTO videos (id, titulo, duracaoSg)
VALUES
	('v001', 'Auto Didático', '0:25'),
	('v002', 'Apredendo POO', '0:59');

SELECT * FROM videos;
DROP TABLE videos;
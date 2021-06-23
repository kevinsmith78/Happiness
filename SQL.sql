CREATE TABLE Happiness(
	"Overall rank" INT,
	"Country or region" VARCHAR (30)PRIMARY KEY,
	Score VARCHAR (10),
	"GDP per capita" VARCHAR(10),
	"Social Support" VARCHAR(10),
	"Healthy life expectancy" VARCHAR(10),
	"Freedom to make life choices" VARCHAR(10),
	Genorosity VARCHAR(10),
	"Perceptions of corruption" VARCHAR(10)
);

SELECT * FROM Happiness
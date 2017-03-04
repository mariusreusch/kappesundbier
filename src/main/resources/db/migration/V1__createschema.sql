CREATE TABLE IF NOT EXISTS recipe (
  id   BIGINT(20)   NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NULL     DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO recipe (name) VALUE ('A first recipe');

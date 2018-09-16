DROP TABLE recipe;

CREATE TABLE ingredient (
  id BIGSERIAL,
  amount int NOT NULL,
  name varchar(255) DEFAULT NULL,
  unit_of_measurement varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe (
  id BIGSERIAL  ,
  name varchar(255) DEFAULT NULL,
  number_of_portions int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe_ingredients (
  recipe_id bigint NOT NULL REFERENCES recipe,
  ingredients_id bigint NOT NULL REFERENCES ingredient
);

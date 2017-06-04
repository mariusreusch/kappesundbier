DROP TABLE recipe;

CREATE TABLE ingredient (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  amount int(11) NOT NULL,
  name varchar(255) DEFAULT NULL,
  unit_of_measurement varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  number_of_portions int(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe_ingredients (
  recipe_id bigint(20) NOT NULL,
  ingredients_id bigint(20) NOT NULL,
  KEY FKg8ssng1dqiwgcptjptldels74 (ingredients_id),
  KEY FKhnsmvxdlwxqq6x2wbgnoef5gr (recipe_id),
  CONSTRAINT FKg8ssng1dqiwgcptjptldels74 FOREIGN KEY (ingredients_id) REFERENCES ingredient (id),
  CONSTRAINT FKhnsmvxdlwxqq6x2wbgnoef5gr FOREIGN KEY (recipe_id) REFERENCES recipe (id)
);

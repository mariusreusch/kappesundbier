ALTER TABLE recipe ADD COLUMN instruction MEDIUMTEXT NOT NULL;

CREATE TABLE recipe_category (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe_categories (
  recipe_id bigint(20) NOT NULL,
  categories_id bigint(20) NOT NULL,
  PRIMARY KEY (recipe_id,categories_id),
  KEY FK1odtgfdg281mrfuyvbmdgcogt (categories_id),
  CONSTRAINT FK1odtgfdg281mrfuyvbmdgcogt FOREIGN KEY (categories_id) REFERENCES recipe_category (id),
  CONSTRAINT FKf9uxi3701as945rybpx129buq FOREIGN KEY (recipe_id) REFERENCES recipe (id)
);



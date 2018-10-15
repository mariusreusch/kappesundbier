ALTER TABLE recipe
  ADD COLUMN instruction TEXT NOT NULL;

CREATE TABLE recipe_category (
  id   bigserial,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE recipe_categories (
  recipe_id     bigint NOT NULL REFERENCES recipe,
  categories_id bigint NOT NULL REFERENCES recipe_category,
  PRIMARY KEY (recipe_id, categories_id)
);



create table recipe_image (
  id bigserial primary key,
  data bytea not null,
  fk_recipe_id bigint NULL references recipe
);

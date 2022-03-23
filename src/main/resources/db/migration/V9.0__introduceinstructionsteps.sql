CREATE TABLE instruction_step
(
    id               bigserial PRIMARY KEY,
    sequence_number  int  NOT NULL,
    step_instruction text NOT NULL,
    fk_recipe_id     bigint NULL REFERENCES recipe
);

INSERT INTO instruction_step (SELECT nextval('instruction_step_id_seq'),
                                     1           as sequence_number,
                                     instruction as sequence_instruction,
                                     id          as fk_recipe_id
                              FROM recipe);

ALTER TABLE recipe DROP COLUMN instruction;
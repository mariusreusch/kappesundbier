create sequence hibernate_sequence start with 1 increment by 50;

CREATE TABLE IF NOT EXISTS recipe (
  id   BIGSERIAL,
  name VARCHAR(255) NULL     DEFAULT NULL,
  PRIMARY KEY (id)
);



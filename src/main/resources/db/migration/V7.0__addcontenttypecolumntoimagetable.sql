ALTER TABLE recipe_image ADD COLUMN content_type varchar(255) NOT NULL DEFAULT 'data:image/jpg;base64,';

create table recipe_image
(
	id bigint auto_increment
		primary key,
	data longblob not null,
	fk_recipe_id bigint NULL,
	constraint FKf5hkqwu523k0fwuqerxr283na
		foreign key (fk_recipe_id) references recipe (id)
);

create index FKf5hkqwu523k0fwuqerxr283na on recipe_image (fk_recipe_id);


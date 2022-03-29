create table kub_user
(
	id bigserial primary key,
	provider_id varchar(255) null
);

create table kub_user_recipes
(
	user_id bigint not null references kub_user,
	recipes_id bigint not null references recipe
) ;

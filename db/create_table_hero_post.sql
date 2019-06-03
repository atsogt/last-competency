create table hero_post (
post_id serial primary key,
title varchar(45),
img text,
content text,
author_id int,
FOREIGN KEY (author_id) REFERENCES hero_user(id)
)
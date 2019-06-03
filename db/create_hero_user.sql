insert into hero_user
(username, password) 
values 
($1, $2)
returning *;
create database myShoppingApp; 
use myShoppingApp;

Create table users(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(30),
    email varchar(30),
    pass varchar(30)
);

create table products(
	id int unsigned auto_increment primary key,
    product_name varchar(30),
	price float,
    product_name varchar(255)
);

create table bills(
	id int unsigned auto_increment primary key,
	user_id varchar(30),
	product_id int,
    product_name varchar(30)
);

create table cart(
	id int unsigned auto_increment primary key,
    user_id int,
    product_id int
);

insert into products (product_name,price) values ("Shampoo",25.5);
insert into products (product_name,price) values ("Soap",10);
insert into products (product_name,price) values ("Mobile",300);
insert into products (product_name,price) values ("TV",500);
insert into products (product_name,price) values ("Gas stove",200);


insert into users (name,email,pass) values ('John Doe','johndoe@mail.com','password');
insert into users (name,email,pass) values ('Smith','smith@mail.com','password');
insert into users (name,email,pass) values ('Julia','julia@mail.com','password');





alter table products add image varchar(255);

update products set image='https://www.tresemme.com/content/dam/unilever/tresemme/united_states_of_america/pack_shot/00022400002200-1406482-png.png' where id = 1;
update products set image='https://lh3.googleusercontent.com/proxy/fdlfgfmKpaS62zONpy97_FJEOorNr7JUQ_SPSFv8-d5ej-Lc41KYyr3WR_mUlNGbHXaClXG88Y7wls3V9XQyiMSrMqZNWjILv6Lxs6g0-jJ9CnOpbAvz2_9rTh3phAiv03Q' where id = 2;
update products set image='https://lh3.googleusercontent.com/proxy/haCwyOjd2fSFi4jB_qkUCgOw39IbAbKQ9shcEgH9JR3GlLUXaa0apuXWY6fbxPvXGoMm0UF14NgxYIMUINu9qAvkgCLhWvT2F0H2E_Z-6we3KTqYTH0x4iiwjLAfPcfQ6SwkyBOe10d6' where id = 3;
update products set image='https://lh3.googleusercontent.com/proxy/231eVQLp8Rzqvna2cfgsUUnVNm8w8islEqhtpOSMMo60rIyEUfHvIwc5DI2OP48fhgFriQsH4jUE2gRjL6VyBu9KNzc3RbS_W-AcUsroED6K9l1UqEa_' where id = 4;
update products set image='https://pngimg.com/uploads/gas_stove/gas_stove_PNG78.png' where id = 5;
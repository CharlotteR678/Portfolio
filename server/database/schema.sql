create table user (
  id int unsigned primary key auto_increment not null,
  name varchar(55) not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table project (
  id int unsigned primary key auto_increment not null,
  title varchar(55) not null,
  description varchar(255) not null
);

create table skill (
  id int unsigned primary key auto_increment not null,
  name varchar(55) not null
);

create table project_skill (
  id int unsigned primary key auto_increment not null,
  project_id int unsigned not null,
  skill_id int unsigned not null,
  FOREIGN KEY (project_id) REFERENCES project(id), 
  FOREIGN KEY (skill_id) REFERENCES skill(id)
);


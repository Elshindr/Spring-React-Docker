create table
    articles (
        id int not null auto_increment,
        libelle VARCHAR(100) not null,
        prix FLOAT(2) not null,
        primary key (id)
    );

insert into articles(libelle,prix) values ('Chaussures', 12.2);

insert into articles(libelle,prix) values ('Tee-shirt', 20.34);

insert into articles(libelle,prix) values ('Jeans', 40.99);

insert into articles(libelle,prix) values ('Lot de couverts', 34.4);

insert into articles(libelle,prix) values ('Portable', 344.3);

insert into articles(libelle,prix) values ('Porte-clef', 1.2);
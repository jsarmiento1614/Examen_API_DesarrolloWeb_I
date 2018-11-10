create DATABASE DB_Assistance;

go

use DB_Assistance;

go

create table Teacher(
    teacher_ID int not null primary key identity(1,1),
    teacher_Name varchar(50) not null,
    profesion varchar(50)
);

go

create table Class(
    class_ID int not null primary key identity(1,1),
    class_Name varchar(50),
    teacher_ID int FOREIGN KEY REFERENCES Teacher(teacher_ID)
);

go

create table Student(
    student_ID int not null primary key identity(1,1),
    student_Code int not null,
    student_Name varchar(100) not null,
    student_Picture varchar(255)
);

go

create table Enrollment(
    enrrollment_ID int not null primary key identity(1,1),
	class_ID int FOREIGN KEY REFERENCES Class(class_ID),
	student_ID int FOREIGN KEY REFERENCES Student(student_ID)
);

go

    create table Assistance(
        assistance_ID int not null primary key identity(1,1),
        assistance_date varchar(50) not null,
        assistance_checked varchar(15),
        class_ID int FOREIGN KEY REFERENCES Class(class_ID),
        student_ID int FOREIGN KEY REFERENCES Student(student_ID)
    );


/* Insertar Datos de Prueba para Tabla Student*/
/* Insertar Datos de Prueba para Tabla Student*/
insert into dbo.Student(student_Code, student_Name, student_picture) values(0001, 'Jose Antonio', 'https://s3.amazonaws.com/kairos-media/team/Ben_Virdee-Chapman.jpeg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00002, 'Julio Lopez', 'http://www.roshanpackages.com.pk/wp-content/uploads/2017/07/dentalia-demo-deoctor-3-1-750x750.jpg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00003, 'Mauricio Catañeda', 'https://i.dailymail.co.uk/i/pix/2012/01/12/article-2085743-0F6F2BAF00000578-950_306x369.jpg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00004, 'Jorge Luis', 'https://s3.amazonaws.com/kairos-media/team/Ben_Virdee-Chapman.jpeg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00005, 'Carlos Hernandez', 'https://www.tugraz.at/fileadmin/_migrated/pics/BTF_2017_Benedict_by_Kanizaj-tugraz.jpg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00006, 'Stafany Madrid', 'http://kb4images.com/images/girl-picture/37621034-girl-picture.jpg');
insert into dbo.Student(student_Code, student_Name, student_picture) values(00007, 'Juan Marcos', 'http://d3cdsjlahqfkbd.cloudfront.net/13067/photo_1510911006.jpg');




/* Insertar Datos de Prueba para Tabla Teacher*/
insert into dbo.Teacher(teacher_Name, profesion) values('Julio Lopez', 'Lic. Español');
insert into dbo.Teacher(teacher_Name, profesion) values('Mauricio Catañeda', 'Lic. Matematicas');
insert into dbo.Teacher(teacher_Name, profesion) values('Jorge Luis', 'Ing. Informatica');
insert into dbo.Teacher(teacher_Name, profesion) values('Carlos Hernandez', 'Lic. Ingles');
insert into dbo.Teacher(teacher_Name, profesion) values('Stafany Madrid', 'Arquitecto');
insert into dbo.Teacher(teacher_Name, profesion) values('Juan Marcos', 'Ing. Sistemas');


/* Insertar Datos de Prueba para Tabla Clases*/
insert into dbo.Class(class_Name, teacher_ID) values('Programacion', 6);
insert into dbo.Class(class_Name, teacher_ID) values('Español', 1);
insert into dbo.Class(class_Name, teacher_ID) values('Ingles II', 4);
insert into dbo.Class(class_Name, teacher_ID) values('Dibujo Tecnico', 5);
insert into dbo.Class(class_Name, teacher_ID) values('Ofimatica', 3);


/* Insertar Datos de Prueba para Tabla enrollment*/
insert into dbo.Enrollment(class_ID, student_ID) values(1, 1);
insert into dbo.Enrollment(class_ID, student_ID) values(2, 2);
insert into dbo.Enrollment(class_ID, student_ID) values(3, 3);
insert into dbo.Enrollment(class_ID, student_ID) values(4, 4);
insert into dbo.Enrollment(class_ID, student_ID) values(5, 5);


/* Insertar Datos de Prueba para Tabla Assistance*/
insert into dbo.Assistance(assistance_date,assistance_checked, class_ID,student_ID) values('01/11/2018', 'True',1,2);
insert into dbo.Assistance(assistance_date,assistance_checked, class_ID,student_ID) values('02/11/2018', 'True',2,1);
insert into dbo.Assistance(assistance_date,assistance_checked, class_ID,student_ID) values('03/11/2018', 'True',3,2);
insert into dbo.Assistance(assistance_date,assistance_checked, class_ID,student_ID) values('04/11/2018', 'false',5,3);
insert into dbo.Assistance(assistance_date,assistance_checked, class_ID,student_ID) values('05/11/2018', 'True',4,1);


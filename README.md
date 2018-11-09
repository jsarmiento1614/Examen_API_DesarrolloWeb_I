# API ASISTENCIA UNITEC - by. @JSarmiento
---
## Problema Propuesto 
CEUTEC  lo contrató para mejorar el sistema de asistencia de los alumnos tome en cuenta los siguientes requisitos:
**requisitos:**   
* Las estudiantes pueden ver todas las clases a las que se encuentran matriculados. +2
* Los maestros solo pueden ver las clases a las que se encuentran matriculados. +3
* Los Maestros pueden marcar asistencia de un alumnos a una clase en particular, tome en cuenta que si un alumnos no es parte de la clase debería de indicar un error. +5
* Los Maestros pueden ver los alumnos que están matriculados en una clase. +5
El administrador puede crear nuevos estudiantes, la información que se espera es (nombre, código y foto) +5 


**Defina:**
    * Cree la DB con SQL Server
    * Desarrolle API con Node JS
    * Suba su proyecto a github.com
    * Tome en cuenta el uso de variables de entorno +1
---
## || Esquema Relacional ||
**Tablas**
**Estudiante**
```
> student_ID
> code
> student_name
> student_picture

```
**Maestros**
```
teacher_ID
techer_Name
profesion
```


**Asistencia**
```
 assistance_ID
 class_ID
 assistance_date
 assistance_checked

```


**Clases**
```
class_ID
teacher_ID
class_Name
```

**Matricula**
```
enrrollment_ID  
class_ID
student_ID
```
---
URL-Entidad-Relacion: 
[ VER  ESQUEMA RELACIONAL](https://www.lucidchart.com/invitations/accept/b2852937-e08a-4e46-9467-064591eda926)

---

## || Convensión de Nombres ||

**GET**
* /app/v1/student/class  *(ver las clases a las que se encuentran matriculados.)
* /app/v1/teacher/class  *(ver las clases a las que se encuentran matriculados.)
* /app/v1/student  *(Los Maestros pueden ver los alumnos que están matriculados)

**POST**
* /app/v1/record/student *(Los Maestros pueden marcar asistencia de un alumnos a una clase en particular)

* /app/v1/student/new *(El administrador puede crear nuevos estudiantes)
---

DB_SERVER=localhost
DB_USER=sa
DB_PASS=Admin123
DB_DATABASE=DB_Assistance
DB_PORT=1433
APP_PORT=8090
DB_INSTANCE_NAME=SQLEXPRESS

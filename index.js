// instancio todas las dependencias a usar en el API.
var express = require('express');
var sql = require('mssql');
var cors = require('cors');
var bodyparser = require('body-parser');
var env = require('dotenv');

// Almaceno toda la funcionalidad del espress en la variable app.
var app = express();

const result = env.config();
// Ejecuto las funciones
app.use(cors());
app.use(bodyparser());

// creao una variable que almacenara la funcion de configuracion de acceso a la base detos.
const sqlconfig={
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
    debug: true,
    options: {
        encrypt: false,
        instanceName: process.env.DB_INSTANCE_NAME
    }
}
// Crear la funcion que me atrapará errores.
app.use(function(err, req, res, next){
    console.log(err);
    res.send({success: false, message: err});
});

// Escucho el puerto para levantar el servidor
app.listen(parseInt(process.env.APP_PORT), () => {
    console.log("Esta corriendo el servidor!!!")
    console.log(result.parsed);
    console.log(sqlconfig);
});

// Mensaje de Bienvenida
app.get('/', (req, res) => {
 res.send('<h1>BIENVENIDO SISTEMA DE ASISTENCIA UNITEC</h1>')
});

// Creo funcion get para que los estudiantes pueden ver todas las clases a las que se encuentran matriculados.
app.get('/app/v1/student/class', (req, res, next) =>{
    // Obtendre del querystring el parametro de busqueda del usuario.
    var student_ID = req.query.student_ID || 0;

    // Ejecuto la consulta a la base de datos
    sql.connect(sqlconfig).then(() => {
        return sql.query(`select * from dbo.Clases c
        INNER JOIN dbo.enrollment e
        ON  c.class_ID =  e.class_ID 
        INNER JOIN dbo.Student s
        ON  e.student_ID =  s.student_ID 
        where s.student_ID = ${student_ID}`);
    }).then(result => {
        var data = {
            seccess: true,
            message: '',
            data: result.recordset,
        }
        res.send(data);

        // cerrare la conexion.
        sql.close();
    }).catch(err => {
        return next(err);
    });
});


// Creo funcion get para que los maestros pueden ver las clases a las que se encuentran matriculados.
app.get('/app/v1/teacher/class', (req, res, next) =>{
    // Obtendre del querystring el parametro de busqueda del usuario.
    var teacher_ID = req.query.teacher_ID || 0;

    // Ejecuto la consulta a la base de datos
    sql.connect(sqlconfig).then(() => {
        return sql.query(`select * from dbo.Clases c
        INNER JOIN dbo.teacher t
        ON  c.teacher_ID =  t.teacher_ID 
        where t.teacher_ID = ${teacher_ID}`);
    }).then(result => {
        var data = {
            seccess: true,
            message: '',
            data: result.recordset,
        }
        res.send(data);

        // cerrare la conexion.
        sql.close();
    }).catch(err => {
        return next(err);
    });
});


//Creo funcion get para que los Maestros pueden ver a los alumnos que están matriculados en su clase.
app.get('/app/v1/student', (req, res, next) =>{
    // Obtendre del querystring el parametro de busqueda del usuario.
    var class_ID = req.query.class_ID || 0;

    // Ejecuto la consulta a la base de datos
    sql.connect(sqlconfig).then(() => {
        return sql.query(`select * from dbo.Student s
        INNER JOIN dbo.enrollment e
        ON  s.student_ID =  e.student_ID 
        INNER JOIN dbo.Clases c
        ON  c.class_ID =  e.class_ID 
        INNER JOIN dbo.Teacher t
        ON  t.teacher_ID =  c.teacher_ID 
        where c.class_ID = ${class_ID}`);
    }).then(result => {
        var data = {
            seccess: true,
            message: '',
            data: result.recordset,
        }
        res.send(data);

        // cerrare la conexion.
        sql.close();
    }).catch(err => {
        return next(err);
    });
});



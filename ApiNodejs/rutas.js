const router = require('express').Router();
const conexion = require('./config/conexion');





// Asignamos todas las rutas
router.get('/', (req, res) => {
    let sql = 'select * from tb_equipo'
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json(rows)
        }
    });
});

// Get equipo
router.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from tb_equipo where id_equipo = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else {
            res.json(rows)
        }
    });
});

// Agregar equipo
router.post('/', (req, res) => {
    const { nombre, logo } = req.body

    let sql = `insert into tb_equipo(nombre, logo) values('${nombre}','${logo}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({status: 'Equipo agregado...'})
        }
    })
})

// Eleminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from tb_equipo where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Equipo eliminado...'})
        }
    })
});

// Modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql = `update tb_equipo set 
                nombre ='${nombre}',
                logo='${logo}'
                where id_equipo = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Equipo modificado...'})
        }
    })

})


module.exports = router;
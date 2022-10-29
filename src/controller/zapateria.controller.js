import { conex } from "../conexion.js";


/* Obtiene desde la base de datos todos los datos y los devueve en un formato Json
 */
export const obtnerDato = async (req, res) => {
  try {
    const [rows] = await conex.query(
      "SELECT* FROM zapatos"
    );
    res.json(rows);
  } catch (error) {
    return res.send("se detecto un error")
  }
};

/*Esta funcion lo que hace es insertar datos, agarra los datos desde req.body con los parametros a insertar
hace una insercion de los datos con los paramentros obtenidos los guarda en una fila en formto json.
devulve desde res.send() los datos insertaods
*/
export const crearDato = async (req, res) => {
  const { nombre, precio, color } = req.body;
  try {
    const [rows] = await conex.query(
      "INSERT INTO zapatos(nombre,precio,color) VALUES(?, ?, ?)",
      [nombre, precio, color]
    );
    res.send({
      id: rows.insertId,
      nombre,
      precio,
      color,
    });
  } catch (error) {
    return res.send("se detecto un error")
};
}


export const ActualizaDato =  async (req, res) => {
  const {id} = req.params
  const { nombre, precio, color } = req.body;
try {
  const [resul] = await conex.query(
    "UPDATE zapatos SET nombre= IFNULL(?,nombre), precio= IFNULL(?,precio),color= IFNULL(?,color) WHERE id = ?",
    [nombre, precio, color,id]
  );

  if(resul.affectedRows === 0) return res.status(404).json({
    message: 'no se actualizo ningun dato porque no encontro'
  })
  const [consulta] = await conex.query("SELECT*  FROM zapatos WHERE id=?",[id])
  res.json(consulta[0])
} catch (error) {
  return res.send("se detecto un error")
}
}

export const EliminaDato = async (req, res) => {
  const {id} = req.params
  // const [consulta] = await conex.query("SELECT*  FROM zapatos WHERE id=?",[id])
  try {
    const [resul] = await conex.query(
      "DELETE FROM zapatos WHERE id = ?",[id]
    )
    if(resul.affectedRows === 0) return res.status(404).json({
      message: 'no se elimino ningun dato porque no encontro'
    })
    
    res.send(`Se ha eliminado el dato con el ID:${id} con exito`);
  } catch (error) {
    return res.send("se detecto un error")
  }
};
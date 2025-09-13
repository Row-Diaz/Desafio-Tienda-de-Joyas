import format from 'pg-format'
import db from '../database/db_conection.js'

export const obtenerJoyasModel = ({ limits = 6, order_by: orderBy = 'stock_asc', page = 0 }) => {
  const query = 'SELECT * FROM inventario'
  const [columnaTabla, orden] = orderBy.split('_')
  const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
  const queryFormateada = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`, columnaTabla, orden, limits, offset)
  return db(queryFormateada)
}

export const obtenerJoyasFiltrosModel = ({ precio_min: precioMin, precio_max: precioMax, categoria, metal }) => {
  let query = 'SELECT * FROM inventario'
  const filtros = []
  const values = []
  if (precioMin) {
    values.push(precioMin)
    filtros.push(`precio >= $${values.length}`)
  }
  if (precioMax) {
    values.push(precioMax)
    filtros.push(`precio <= $${values.length}`)
  }
  if (categoria) {
    values.push(categoria)
    filtros.push(`categoria = $${values.length}`)
  }
  if (metal) {
    values.push(metal)
    filtros.push(`metal = $${values.length}`)
  }
  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join(' AND ')}`
  }
  query += ';'
  return db(query, values)
}

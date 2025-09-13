const HATEOAS = (entidad, datos, limits, page) => {
  const results = datos
    .map((item) => {
      return {
        name: item.nombre,
        href: `/joyas/${entidad}/${item.id}`
      }
    })
  const totalJoyas = datos.length
  const stockTotal = datos.reduce((acumulador, valorActual) => acumulador + valorActual.stock, 0)
  // const starIndex = (+page - 1) * limits
  // const endIndex = +page * +limits
  // const paginación = {}
  // if (endIndex <= datos.length) {
  //   paginación.siguiente = {
  //     página: +page + 1,
  //     items: +limits
  //   }
  // }
  // if (starIndex >= 0) {
  //   paginación.anterior = {
  //     página: (+page - 1),
  //     items: +limits
  //   }
  // }
  const datosConHateoas = {
    // paginación,
    totalJoyas,
    stockTotal,
    results
  }
  console.log(datosConHateoas)
  return datosConHateoas
}

export default HATEOAS

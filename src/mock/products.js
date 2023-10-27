const Products = [
      {
        nombre: "Chaqueta de cuero para hombre",
        precio: 99.99,
        descripcion: "Chaqueta de cuero genuino para hombres",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Hombre",
      },
      {
        nombre: "Camiseta de algodón para niño",
        precio: 14.99,
        descripcion: "Camiseta cómoda de algodón para niños",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Niño",
      },
      {
        nombre: "Pantalones vaqueros para hombre",
        precio: 49.99,
        descripcion: "Pantalones vaqueros de estilo moderno para hombres",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Hombre",
      },
      {
        nombre: "Vestido para niña",
        precio: 29.99,
        descripcion: "Vestido elegante para niñas",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Niño",
      },
      {
        nombre: "Abrigo de lana para hombre",
        precio: 79.99,
        descripcion: "Abrigo de lana de alta calidad para hombres",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Hombre",
      },
      {
        nombre: "Sudadera con capucha para niño",
        precio: 24.99,
        descripcion: "Sudadera cómoda con capucha para niños",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Niño",
      },
      {
        nombre: "Traje de negocios para hombre",
        precio: 129.99,
        descripcion: "Traje de negocios elegante para hombres",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Hombre",
      },
      {
        nombre: "Vestido de fiesta para niña",
        precio: 34.99,
        descripcion: "Vestido de fiesta hermoso para niñas",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Niño",
      },
      {
        nombre: "Polo clásico para hombre",
        precio: 19.99,
        descripcion: "Polo clásico de algodón para hombres",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o-_jZfMyznGV7QgPKSbWjfnPSWxW0L_eREOCciaSgA&s",
        categoria: "Hombre",
      },
    ];

    export const getProducts = () => {
      return new Promise((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
          if(error){
            reject('no hay data, intente mas tarde')
          }else{
            resolve(Products)
          }
        },2000)
      })
    }

  export const getItem = (id) => {
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(Products.find((products)=> products.id == id))
      },2000)
    })
  }

  export default Products;
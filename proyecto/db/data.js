const data  = {
     user: {
            name:'Leonel Messi',
            mail:'leo10@gmail.com',
            age:'34',
            phone:'+54 9 11 41900357',
            picture: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
     },
     products: [
         {
           name:'Mesa de luz', 
           id:'1',
           price:'$30.000',
           description:'De diseño escandinavo, minimalista y muy funcional. Esta mesa de luz está construida en melamina para facilitar su limpieza y mantenimiento. Posee terminaciones de alta calidad con bisagras reforzadas, manijas y pastas de aluminio. Con un estante y puerta. Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar. Incluye su completo Kit de armado, con todos los componentes necesarios para su fácil ensamblaje.',
           img: '/img/mesa_luz.jpeg'

         },
         {
           name:'Silla alta', 
           id:'2',
           price:'$25.000',
           description:'Diseño en su máxima expresión. Esto es lo que representa el taburete Roger. Pensado para los más exigentes usuarios. Esta banqueta regulable en altura, tiene una exquisita terminación en madera curvada lustrada, que hace que se vea bien en cualquier lugar que se la coloque. Aunque sea simplemente para sentarse a charlar o bien tomar un trago, este modelo será una parte importante de la decoración de tu ambiente.',
           img: '/img/silla_alta.jpg'
         },
         {
           name:'Escritorio', 
           id:'3',
           price:'$10.000',
           description:'Por su tamaño y estilo permite ubicarlo en cualquier ambiente de la casa, puede arrimarse a la pared o presentarse en un espacio libre. Estructura compuesta por caño cuadrado 20 x 20 mm combinada con Melamina de 18 mm.',
           img: 'https://http2.mlstatic.com/D_NQ_NP_957205-MLA41416184530_042020-O.jpg'
         },
         {
           name:'Lampara de pie', 
           id:'4',
           price:'$60.000',
           description:'Una lámpara de pie nórdica realizada en petiribí, su diseño moderno construido con madera 100% recuperada la hace ideal para livings modernos. Su brazo con 3 articulaciones permite dirigir la luz hacia donde más la necesites, divina para focalizar en objetos decorativos o como luz de lectura. Su encendido es con pedal de madera. Incluye una lámpara led globo e27 de 18 watts 3000k 1800ml de luz cálida.',
           img: 'https://http2.mlstatic.com/D_NQ_NP_925011-MLA20455337188_102015-O.jpg'
         },
         {
           name:'Velador', 
           id:'5',
           price:'$15.000',
           description:'Construida en petiribí con madera maciza 100% recuperada, ideal para escritorios nórdicos. Su brazo articulado permite dirigir la luz hacia donde más la necesites. Incluye una lámpara dicroica gu10 de 7 watts 3000k 610lm cálida.',
           img: '/img/velador.jpeg'
         },
         {
           name:'Sillón', 
           id:'6',
           price:'$50.000',
           description:'Nuestra amplia línea de sillones, está pensada no solo para lograr el mejor diseño, sino la mayor durabilidad posible. Fabricados con materiales nobles y de alta resistencia, permiten un uso intensivo diario sin problemas. Clasicos, escandinavos, ingleses o minimalistas, son solo algunas de las propuestas que podés encontrar. Tapizados con las mas delicadas telas y una amplia variedad de colores.',
           img: '/img/sillon.jpeg'
         },
         {
           name:'Mesa', 
           id:'7',
           price:'$20.000',
           description:'Un diseño basado en los modelos escandinavos, ideal para ambientes modernos. Ofrece una combinación en tapa blanca laqueada mate y patas en tonos claros, para generar una visual única. Un diseño ideal para tu cocina o living comedor. Combinable con Sillas Eames o Sillones Praga.',
           img: '/img/mesa.jpeg'
         },
         {
           name:'Sillón de exterior', 
           id:'8',
           price:'$55.000',
           description:'Este sillón de 3 cuerpos es ideal para utilizar con mesas de exterior en countries, casas de campo o bien en tu jardín. Con un diseño especial, está realizado en aluminio y resiste todo tipo de usos. El mismo se puede utilizar tanto en el interior como en el exterior de tu hogar. Si buscás un sillón resistente y donde no debas preocuparte por el agua, este es el producto ideal para vos.',
           img: '/img/sillon_ext.jpeg'
         },
         {
           name:'Placard', 
           id:'9',
           price:'$100.000',
           description:'Placard Reflex con puertas y un centro con espejos. La amplitud es la característica principal de este bello ropero. Esta línea de muebles viene desarmada, preparada para ensamblar de manera rápida y simple. Dentro de cada caja podrás encontrar las correspondientes instrucciones y los componentes necesarios para su correcto armado. Este armario debe ser armado por un mínimo de 2 personas.',
           img: ''
         },
         {
           name:'Cuadro', 
           id:'10',
           price:'$6.000',
           description:'Cuadro con poster de paisaje del Parque Nacional Iguazú. Medidas de 100cm x 60cm. Borde de madera y vidrio protector de poster. Colores vividos.',
           img: ''
         },
         {
           name:'Sofá individual', 
           id:'11',
           price:'$19.000',
           description:'Esta exquisita réplica del sillón Eames fue el primer objeto diseñado por la pareja Eames destinado a la comercialización a gran escala. Y forma parte de objetos de diseño industrial que han sido concebidos por la pareja Eames.',
           img: '/img/sillon_ind.jpeg'
         },
         {
           name:'Módulo para TV', 
           id:'12',
           price:'$35.000',
           description: 'De diseño minimalista y contemporáneo esta Mesa de TV es la adición perfecta a tu living. Construido a partir de placas de aglomerado melaminizado de 15 mm de espesor, permite una sencilla limpieza y mantenimiento. Esta línea de muebles viene desarmada, preparada para ensamblar de manera rápida y simple. Dentro de cada caja podrás encontrar las correspondientes instrucciones y los componentes necesarios para su correcto armado.',
           img: 'https://www.miahomecorner.com/data/productos/d_pond-mesa-de-tv-argel-1.jpg'
         },
],
     comments: [
         {
             name:'Leonel Messi',
             comment:'Increíble servicio, silla muy cómoda. Recomiendo la los productos y el servicio.',
             img:''
         }, 
         {
             name:'María Gómez',
             comment:'El envío se tardó mucho, pero los muebles que pedí son geniales.',
             img:''
         }, 
         {
             name:'Esteban Quito',
             comment:'Me gutó mucho el banquito que compré. Muy buenos precios y la calidad increíble.',
             img:''
         }, 
         {
             name:'Sol López',
             comment:'Tuve un problema con el envío. Preferiría seleccionar la empresa que se encarga de este. Los muebles increíbles.',
             img:''
         }, 
         {
             name:'Mirta Gonzalez',
             comment:'Muy buen precio y buena calidad. Muebles cómodos. A la hora de elegir hay muchas opciones. Buen servicio.',
             img:''
         } 
     ]
};


module.exports = data


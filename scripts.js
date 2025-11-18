// --- BASE DE DATOS FICTICIA ---
// Se Carga desde localStorage o se usa el valor por defecto
let db;
// Regiones ordenadas por número geográfico
const defaultDb = {
    regiones: [
        { 
            id: 'tarapaca', 
            nombre: 'Tarapacá', 
            numeroRomano: 'I', 
            vitrinas: [
                {
                    nombre: "Turismo Sol de Tarapacá",
                    descripcion: "Empresa de transporte y tours ubicada en Iquique, creada para cubrir rutas y excursiones en la región, con énfasis en ofrecer experiencias turísticas en el desierto de Tarapacá.",
                    fotos: [ "https://turismosoldetarapaca.cl/wp-content/uploads/2023/11/LOGO-TURISMO-3.png", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/76/ea/90/turismo-sol-de-tarapaca.jpg?h=-1&s=1&w=1200", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/bb/d4/f8/cada-viaje-lo-hacemos.jpg?h=800&s=1&w=1100" ],
                    contacto: {
                        telefono: "+56 9 8479 5064",
                        email: "Viajes@Soldetarapaca.cl",
                        direccion: "Iquique, Región de Tarapacá"
                    }
                },
                {
                    nombre: "Caleta Chanavayita",
                    descripcion: "Una caleta costera de la Región de Tarapacá, con ambiente tranquilo, pesca artesanal, tradición changa y menos masificada que otros destinos de playa.",
                    fotos: [ "https://media-cdn.tripadvisor.com/media/photo-m/1280/2c/50/0b/ca/caption.jpg", "https://visitatarapaca.cl/wp-content/uploads/chanavayita-iquique-tarapaca.jpg", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1c/21/0e/caleta-de-chanavayita.jpg?h=-1&s=1&w=1200" ],
                    contacto: {
                        telefono: "+56 9 8456 7478",
                        email: "info@caletachanavayita.cl",
                        direccion: "Comuna de Iquique, Región de Tarapacá"
                    }
                }
            ] 
        },
        { 
            id: 'antofagasta', 
            nombre: 'Antofagasta', 
            numeroRomano: 'II', 
            vitrinas: [
                {
                    nombre: "Turismo Sol del Desierto",
                    descripcion: "Agencia de turismo especializada en el desierto, ofreciendo excursiones al altiplano, astronomía, rutas poco convencionales en la región de Antofagasta.",
                    fotos: [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/249958960.jpg?k=aef4dbde2674ee26133cc9ba95ecc5236331d201ba2b6aa6d3f525ac86a657c2&o=","https://storage.googleapis.com/chile-travel-cdn/2021/11/6e1e279a-shutterstock_1076155628-scaled.jpg","https://reconocechile.com/wp-content/uploads/2023/10/7-2-scaled.jpg" ],
                    contacto: {
                        telefono: "+56 55 330428 / +56 9 5462023",
                        email: "contacto@soldeldesierto.cl",
                        direccion: "Cauar 3486, Villa Lomas Huasi (Camino a Laguna Inca Coya), Calama, Región de Antofagasta."
                    }
                },
                {
                    nombre: "Chango Tour Agencia Turismo Fotográfico",
                    descripcion: "Agencia enfocada en “turismo FOTOcultural” en el desierto – atardeceres, astrofotografía, rutas especiales.",
                    fotos: [ "https://www.changotour.cl/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-24-at-12.10.21.jpeg","https://www.changotour.cl/wp-content/uploads/2020/07/DSC3010-scaled.jpg", "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/3d/95/86.jpg" ],
                    contacto: {
                        telefono: "+56 9 9919 5801",
                        email: "contacto@changotour.cl",
                        direccion: "Antonio Poupin 839 Of. 104, Antofagasta, Chile"
                    }
                }
            ] 
        },
        { 
            id: 'atacama', 
            nombre: 'Atacama', 
            numeroRomano: 'III', 
            vitrinas: [
                {
                    nombre: "Tiska Artesanía & Bicicletas",
                    descripcion: "Es un emprendimiento local que combina artesanía y reparación/alquiler de bicicletas, dirigido por una emprendedora de Caldera. Ha sido reconocido a nivel nacional por innovación en turismo aventura.",
                    fotos: [ "https://turismocaldera.com/wp-content/uploads/2024/02/tiska-1.jpg", "https://pbs.twimg.com/media/ERjQoDBXYAAkLfN.jpg", "https://serviciosturisticos.sernatur.cl/folder/empresas/emp_16821753/inscripcion_25621/php3QbvfE20181126031152.jpg" ],
                    contacto: {
                        telefono: "+56 9 9716 2746",
                        email: "camila_xfiles@hotmail.com",
                        direccion: "Pje. Zuiderster 995, Caldera, Región de Atacama."
                    }
                },
                {
                    nombre: "Chañar Taller Artesanal",
                    descripcion: "Taller-tienda de artesanía tradicional (tejidos de lana de alpaca/oveja, orfebrería, piezas en madera) ubicado en San Pedro de Atacama. Menos turismo masivo, más enfoque en lo artesanal y local.",
                    fotos: [ "https://toursanpedrodeatacama.com/media/1-artesania.jpg","https://toursanpedrodeatacama.com/media/Fotos%20Blog/artesania-san-pedro%20%281%29.jpg","https://sanpedroatacama.com/wp-content/uploads/sites/5/2023/04/artesania_mano_arte_san_pedro_atacama_01-600x338.jpg" ],
                    contacto: {
                        telefono: "+56 9 7826 2749",
                        email: "chanar@sanpedroatacama.com",
                        direccion: "Calle Domingo Atienza 409, San Pedro de Atacama, Región de Atacama."
                    }
                }
            ] 
        },
        { 
            id: 'coquimbo', 
            nombre: 'Coquimbo', 
            numeroRomano: 'IV', 
            vitrinas: [
                {
                    nombre: "Molinos de Arte Espacio Cultural",
                    descripcion: "Es una galería / espacio cultural local que además de exposición de arte ofrece talleres creativos, venta de obras, productos vinculados al arte. Una opción para interactuar con emprendedores culturales de la región.",
                    fotos: [ "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4e/48/b8/centro-de-arte-molino.jpg?h=-1&s=1&w=1200","https://images.adsttc.com/media/images/55e6/4d58/4d8d/5d0b/c000/0484/medium_jpg/w3-web.jpg?1441156436=","https://www.nochedemuseos.cl/sites/default/files/styles/slider_cultural_space/public/node/cultural_space/2025-10/sala-artes03.jpg?h=e5aec6c8&itok=P-hzQX26" ],
                    contacto: {
                        telefono: "(51) 264 2591",
                        email: "molinosdearte.espaciocultural@gmail.com",
                        direccion: "José Santiago Aldunate 763, 2° piso, Coquimbo, Región de Coquimbo, Chile."
                    }
                },
                {
                    nombre: "Arte Vivo – Valle de Elqui",
                    descripcion: "Taller de artesanía ubicado en el Valle de Elqui que crea objetos artesanales, relacionados con arcillas y materiales de la zona — más artesanal que turismo puro, aunque su ubicación es atractiva.",
                    fotos: [ "https://laserenaonline.cl/wp-content/uploads/2025/10/PME_MuralInst_Tongoy_sep2025_49.webp","https://www.turismovicuña.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-13-at-4.11.13-PM.jpeg","https://www.turismovicuña.cl/wp-content/uploads/2024/10/1-1.jpeg" ],
                    contacto: {
                        telefono: "+56 9 8788 3021",
                        email: "qartevivo.cl@contacto.cl",
                        direccion: "Cochiguaz, km. 13.5, Valle de Elqui, Región de Coquimbo, Chile."
                    }
                }
            ] 
        },
        { 
            id: 'valparaiso', 
            nombre: 'Valparaíso', 
            numeroRomano: 'V',
            vitrinas: [
                {
                    nombre: "Tostaduría El Granero",
                    descripcion: "Emprendimiento local dedicado al café de especialidad / tostaduría en la zona de Quilpué.",
                    fotos: [ "https://www.ccq.cl/wp-content/uploads/2021/02/1-36.jpg","https://www.ccq.cl/wp-content/uploads/2021/02/3-33.jpg","https://cdnx.jumpseller.com/cafe425/image/67796457/resize/255/255?1758665356=" ],
                    contacto: {
                        telefono: "+56 32 22914254",
                        email: "elgranero683@gmail.com",
                        direccion: "Andrés Bello 683, Quilpué, Región de Valparaíso."
                    }
                },
                {
                    nombre: "Viña El Escorial",
                    descripcion: "Viña familiar y boutique en el Valle de Aconcagua. Recorridos en carruaje, degustación de vinos premiados y comida típica en Panquehue.",
                    fotos: [ "https://lh3.googleusercontent.com/p/AF1QipMI0Px9fhZ3Sjrn5JbPyFJbgm-md6PbyUS6IkWJ=s680-w680-h510-rw", "https://www.clubdelectores.cl/wp-content/uploads/1759865859-23.jpg", "https://www.elescorial.cl/es/wp-content/uploads/2020/10/foto-n-6-min-b-1024x706.jpg" ],
                    contacto: {
                        telefono: "+56 9 1234 5678",
                        email: "turismo@elescorial.cl",
                        direccion: "Camino El Escorial s/n, Panquehue, Valparaíso"
                    }
                }
            ] 
        },
        { 
            id: 'metropolitana', 
            nombre: 'Metropolitana', 
            numeroRomano: 'RM', 
            vitrinas: [
                {
                    nombre: "Herencia de Sabores",
                    descripcion: "Emprendimiento gastronómico con productos locales en Santiago, que permite ver el lado más artesanal‐gastronómico de la región. No es una agencia de tours, sino una oferta de comercio local que los visitantes pueden descubrir como parte de la experiencia regional.",
                    fotos: [ "https://fukasawa.cl/wp-content/uploads/2025/10/Fukasawa-11.jpg","https://cdnx.jumpseller.com/herencia-de-sabores-spa/image/67152666/Sin_20t_C3_ADtulo_20_28900_20x_201200_20px_29_20_284_29.png?1756764833=","https://cdnx.jumpseller.com/herencia-de-sabores-spa/image/67153888/Sin_20t_C3_ADtulo_20_28900_20x_201200_20px_29_20_287_29.png?1756765764=" ],
                    contacto: {
                        telefono: "+56 9 4017 4182",
                        email: "contacto.herenciadesabores@gmail.com",
                        direccion: "Av. Vicuña Mackenna Oriente, La Florida, Región Metropolitana, Chile."
                    }
                },
                {
                    nombre: "Espacio Gastronómico",
                    descripcion: "Restaurante de comida típica chilena en Pomaire, pero con un toque gourmet. Especialidad en pastel de choclo y plateada, todo cocido en greda.",
                    fotos: [ "https://i.pinimg.com/736x/33/c9/50/33c950c56808723694ed42398543f0d9.jpg","https://mangomerken.com/wp-content/uploads/2022/01/marina-barrio-italia-1024x640.jpg","https://www.espaciogastronomico.cl/wp-content/uploads/bis-images/154/eventos4-960x900-f50_50.jpg" ],
                    contacto: {
                        telefono: "(2) 2889 3800",
                        email: "contacto@espaciogastronomico.cl",
                        direccion: "Tegualda 1375, Renca, Región Metropolitana de Santiago, Chile."
                    }
                }
            ] 
        },
        { 
            id: 'ohiggins', 
            nombre: "O'Higgins", 
            numeroRomano: 'VI', 
            vitrinas: [
                {
                    nombre: "Ruta del Vino del Valle de Colchagua",
                    descripcion: "Una experiencia de enoturismo donde se visitan viñas del valle de Colchagua, se realizan degustaciones, y se vive la cultura vitivinícola de la región. Un turismo más experiencial más que solo tours convencionales.",
                    fotos: [ "https://www.gochile.cl/fotos/header/108354-img_2126.jpg","https://mundoagro.io/cl/wp-content/uploads/2014/07/valle-de-colchagua_4037-scaled.jpg","https://www.viajes.cl/hs-fs/hubfs/Vi%C3%B1a%20Santa%20Cruz%20en%20valle%20de%20Colchagua.jpg?name=Vi%C3%B1a+Santa+Cruz+en+valle+de+Colchagua.jpg&width=5248" ],
                    contacto: {
                        telefono: "(72) 282 3199",
                        email: "info@rutadelvino.cl",
                        direccion: "Plaza de Armas 298, Santa Cruz, Región del Libertador General Bernardo O’Higgins, Chile."
                    }
                },
                {
                    nombre: "Colchagua Turismo Rural",
                    descripcion: "Emprendimiento de turismo rural que ofrece programas de día en el valle de Colchagua que incluyen experiencia en viñas, campo, gastronomía local y la naturaleza agrícola de la región. Una alternativa que mezcla turismo + cultura local.",
                    fotos: [ "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b7/7f/ba/centro-de-visitas-vina.jpg?h=500&s=1&w=500","https://media-cdn.tripadvisor.com/media/photo-s/13/23/9b/c7/photo0jpg.jpg","https://colchaguaturismorural.cl/wp-content/uploads/2022/08/encierra-720x606.png" ],
                    contacto: {
                        telefono: "+56 9 6662 8104",
                        email: "contacto@colchaguaturismorural.cl",
                        direccion: "San Jose del Carmen, El Huique Nº0, Palmilla, Región del Libertador General Bernardo O’Higgins."
                    }
                }
            ] 
        },
        { 
            id: 'maule', 
            nombre: 'Maule', 
            numeroRomano: 'VII', 
            vitrinas: [
                {
                    nombre: "Lagar Hotel Boutique",
                    descripcion: "Alojamiento boutique en Molina, región del Maule, ideal para turismo tranquilo, escapadas y mezcla de entorno rural + confort.",
                    fotos: [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158439812.jpg?hp=1&k=9e9e8840614f931d8439d8d6e20c1d98eed4773ee771e8a48bcef185aa3e67c2&o=","https://media-cdn.tripadvisor.com/media/photo-s/13/20/04/3f/lagar-hotel-boutique.jpg","https://static.wixstatic.com/media/59cd7a_b2707dde459441a0be96b751d010f97d~mv2_d_4394_2933_s_4_2.jpeg/v1/crop/x_0%2Cy_27%2Cw_4394%2Ch_2879/fill/w_276%2Ch_179%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/fachada.jpeg" ],
                    contacto: {
                        telefono: "(75) 239 5778 · +56 9 3244 1349",
                        email: "contacto@lagarhotel.com",
                        direccion: "Calle Membrillar 1217, Molina, Región del Maule."
                    }
                },
                {
                    nombre: "Refugio Andino",
                    descripcion: "Alojamiento/naturaleza en Romeral, Maule; buen aporte para turismo de naturaleza, tranquilidad y entorno menos masificado.",
                    fotos: [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406991931.jpg?hp=1&k=a378d16cf901ad8eed236efae3ee99cc8a9a92a59252e8941c402e1077cf4b62&o=","https://www.refugioandino.com/wp-content/uploads/2024/02/NZ5_9962-scaled.jpg","https://cf.bstatic.com/xdata/images/hotel/max1024x768/460639608.jpg?hp=1&k=e2d17e66d8d9969d924a7b2dc744f7175662ba84e2330e12510f964d0c946018&o=" ],
                    contacto: {
                        telefono: "+56 9 4477 1699",
                        email: "contacto@refugioandino.com",
                        direccion: "Ruta J 55, kilómetro 37.1, Romeral, Región del Maule."
                    }
                }
            ] 
        },
        { 
            id: 'biobio', 
            nombre: 'Biobío', 
            numeroRomano: 'VIII', 
            vitrinas: [
                {
                    nombre: "Turismo Manque Mahuida",
                    descripcion: "Operador de turismo especializado en rutas grupales en la Región del Biobío y Ñuble, incorporando naturaleza, cultura local y viajes con espíritu más participativo que solo un “tour estándar”",
                    fotos: [ "https://turismomanquemahuida.com/wp-content/uploads/2024/11/1.webp","https://turismomanquemahuida.com/wp-content/uploads/2024/11/3.webp","https://turismomanquemahuida.com/wp-content/uploads/2024/11/1-1.webp" ],
                    contacto: {
                        telefono: "+56 9 772 3266 · +56 9 5688 9463",
                        email: "contacto@turismomanquemahuida.com",
                        direccion: "Galvarino 549, Concepción, Región del Biobío"
                    }
                },
                {
                    nombre: "Turismo Bio Sur",
                    descripcion: "Empresa de traslado/turismo en Los Ángeles, Biobío; combina transporte con excursiones, lo que aporta más que solo “tour típico”.",
                    fotos: [ "https://irp-cdn.multiscreensite.com/62d87d50/MOBILE/jpg/1833261-bannersaccc7ba6.jpg?v=7.3.45002","https://irp-cdn.multiscreensite.com/62d87d50/MOBILE/jpg/1832442-img7sac.jpg","https://irp-cdn.multiscreensite.com/62d87d50/MOBILE/jpg/1832432-img2sac.jpg" ],
                    contacto: {
                        telefono: "+56 9 9224 1411",
                        email: "turismobiosur@hotmail.com",
                        direccion: "Le Mans 1333, Los Ángeles, Región del Biobío"
                    }
                }
            ] 
        },
        { 
            id: 'araucania', 
            nombre: 'La Araucanía', 
            numeroRomano: 'IX', 
            vitrinas: [
                {
                    nombre: "Taller de Artesanías Ducam",
                    descripcion: "Taller-tienda de artesanías en Teodoro Schmidt, La Araucanía, que permite ver y adquirir piezas artesanales, participar del trabajo local.",
                    fotos: [ "https://www.cultura.gob.cl/wp-content/uploads/2018/12/pieza-ngen-del-lago-alfonso-moya-3.jpg","https://araucaniasinfronteras.cl/wp-content/uploads/2018/02/feriarte-2018.jpg","https://araucanianoticias.cl/wp-content/uploads/2018/02/DSC_0913-1280x720.jpg" ],
                    contacto: {
                        telefono: "+56 9 3877 6165",
                        email: "paduc07@gmail.com",
                        direccion: "Calle Cementerio s/n, Barros Arana, Teodoro Schmidt, Región de La Araucanía."
                    }
                },
                {
                    nombre: "Fundación Chol‑Chol",
                    descripcion: "La Fundación Chol-Chol trabaja con artesanía textil y orfebrería de la región, vinculando a artesanos/as mapuches y promoviendo comercio justo. No es únicamente una empresa de “tour”, sino un emprendimiento cultural-productivo con impacto local.",
                    fotos: [ "https://cholchol.org/wp-content/uploads/2020/03/DSC05198-scaled.jpg","https://cholchol.org/wp-content/uploads/2017/12/15822831_1249419661760718_5843340314612971039_n.jpg","https://images.openai.com/static-rsc-1/DtweRvFT9wEI6MUlhSHTtm3UuJgaWCBgVtH8L22YymIwVdjouw69K42jpuCnZxeDBSV4ZoeX2zZBDccPzMhrpoRdNAy8MW3hsart1kZx62r1RcZ9y4I7yWCGW8kdn9xThAmW9PZRKXuy779Phu4sQA" ],
                    contacto: {
                        telefono: "+56 9 6170 0291",
                        email: "redes@cholchol.org",
                        direccion: "Camino Labranza – Nueva Imperial KM3, Temuco, Región de La Araucanía, Chile."
                    }
                }
            ] 
        },
        { 
            id: 'loslagos', 
            nombre: 'Los Lagos', 
            numeroRomano: 'X',
            vitrinas: [
                {
                    nombre: "OCIO Territorial Hotel",
                    descripcion: "Un alojamiento boutique en entorno rural de Chiloé, con vistas al fiordo de Castro, que además promueve una experiencia de inmersión en la naturaleza y cultura local, más que sólo “un tour”.",
                    fotos: [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25606163.jpg?k=2c99054be1628d5a99278449694bb173e82c6b9cb42ab7f4b4145d7976a85b06&o=","https://cf.bstatic.com/xdata/images/hotel/max1024x768/364157090.jpg?k=0de2add4d143e42f53b3b6992cdce0e9491a73199ceb7c020abafa0f6d49b5ad&o=","https://cf.bstatic.com/xdata/images/hotel/max1024x768/361988271.jpg?k=1e3264fc11023a1e819b462dc6004e9a66e96345465e4b8d5f6d5e3cd1e39ae1&o=" ],
                    contacto: {
                        telefono: "+56 (65) 2870942",
                        email: "reservas@ocioterritorial.com",
                        direccion: "Huenuco rural, s/n, Península de Rilán, Castro, Región de Los Lagos, Chile"
                    }
                },
                {
                    nombre: "Aldea Artesanal",
                    descripcion: "Tienda-taller de artesanías ubicada en Osorno, con enfoque en productos hechos por emprendedores locales. Es una oferta distinta al turismo de excursión: más volumen de producto local, comercio artesanal.",
                    fotos: [ "https://i.ytimg.com/vi/t74R0o168T0/maxresdefault.jpg","https://gcdn.emol.cl/emprendimiento/files/2019/06/aldea-artesanal.jpg","https://photo620x400.mnstatic.com/b9af2c9994ab2334b336addc8cf4af1d/centro-de-artesania.jpg" ],
                    contacto: {
                        telefono: "+56 9 8774 5478 / (64) 223 5008",
                        email: "hola@aldeartesanal.cl",
                        direccion: "Eleuterio Ramírez 650, Local 300A, Osorno, Región de Los Lagos, Chile."
                    }
                }
            ] 
        },
        { 
            id: 'aysen', 
            nombre: 'Aysén', 
            numeroRomano: 'XI', 
            vitrinas: [
                {
                    nombre: "Fitocosmética Jauken",
                    descripcion: "Emprendimiento local de cosmética natural, vegana y sostenible, que fabrica en Coyhaique productos ecológicos hechos con identidad patagónica. No es un tour, sino un negocio productivo con valor local.",
                    fotos: [ "https://jaukencosmetica.cl/wp-content/uploads/2025/07/Paleta-maquillaje-Jauken-1-300x300.jpg","https://jaukencosmetica.cl/wp-content/uploads/2024/06/Wax-melt-2-300x300.png","https://i0.wp.com/mediodirecto.cl/wp-content/uploads/2025/09/jauken-scaled-e1757972880661.jpg" ],
                    contacto: {
                        telefono: "+56 9 7497 8133",
                        email: "jauken.cosmetica@gmail.com",
                        direccion: "Francisco Bilbao # 670, Coyhaique, Región de Aysén."
                    }
                },
                {
                    nombre: "Huella Patagonia Lodge",
                    descripcion: "Lodge de alojamiento boutique en plena naturaleza patagónica, con cabañas, tinajas calientes, huerto orgánico, ideal para turismo de naturaleza pero también experiencia de alojamiento con confort",
                    fotos: [ "https://serviciosturisticos.sernatur.cl/folder/empresas/emp_77087563/inscripcion_58718/php8zEPN2.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ca/af/ac/vista-patagonia-lodge.jpg?h=-1&s=1&w=1200","https://aysenlodge.cl/wp-content/uploads/2022/12/IMG_8168.jpg" ],
                    contacto: {
                        telefono: "+56 9 9870 2400",
                        email: "erunin.aysen@gmail.com",
                        direccion: "Sector Villa Los Torreones, Camino Coyhaique – Puerto Aysén, Región de Aysén."
                    }
                }
            ] 
        },
        { 
            id: 'magallanes', 
            nombre: 'Magallanes', 
            numeroRomano: 'XII', 
            vitrinas: [
                {
                    nombre: "Weskar Patagonian Lodge",
                    descripcion: "Lodge en Puerto Natales, Patagonia austral, que ofrece alojamiento en entorno natural, ideal para explorar la región. Es una opción de turismo (alojamiento) más que solo tour.",
                    fotos: [ "https://webbox.imgix.net/images/qjucbtjcguwtrdfl/fe87f17a-78c9-4ba8-91eb-23c084212539.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/82/13/3f/sunrise.jpg?h=500&s=1&w=900","https://webbox.imgix.net/images/qjucbtjcguwtrdfl/79ac7ae7-925b-4a2d-a8ae-d7ed2f1abfc7.jpg?auto=format%2Ccompress&crop=entropy&fit=crop&h=600&w=750" ],
                    contacto: {
                        telefono: "+56 61 2414168",
                        email: "sales@weskar.cl",
                        direccion: "Huerto 274-B, Puerto Natales, Región de Magallanes y la Antártica Chilena."
                    }
                },
                {
                    nombre: "Artesanías de la Patagonia",
                    descripcion: "Tienda de artesanías locales en Punta Arenas. No es sólo turismo de experiencia, sino un emprendimiento de comercio local artesanal, lo que aporta variedad.",
                    fotos: [ "https://www.visitapuntaarenas.cl/assets/images/directorio-mercado.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a6/dd/59/centro-artesanal.jpg?h=500&s=1&w=900","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/82/65/04/img-20171214-002830-largejpg.jpg?h=500&s=1&w=900" ],
                    contacto: {
                        telefono: "(61) 224 0082",
                        email: "roce.paillan@gmail.com",
                        direccion: "Lautaro Navarro 1145, Punta Arenas, Región de Magallanes y la Antártica Chilena."
                    }
                }
            ] 
        },
        { 
            id: 'losrios', 
            nombre: 'Los Ríos', 
            numeroRomano: 'XIV', 
            vitrinas: [
                {
                    nombre: "Castillo San Sebastián de la Cruz",
                    descripcion: "Monumento histórico ubicado en Corral, parte del sistema de fuertes de Valdivia, con recreaciones históricas y fuerte valor patrimonial.",
                    fotos: [ "https://www.monumentos.gob.cl/sites/default/files/image-monumentos/MH_00015_0000_CMN%281%29.JPG","https://chilecontacto.cl/losrios/images/comunas/Reanimacion_layers_10.png","https://upload.wikimedia.org/wikipedia/commons/c/cc/CorralFort.JPG" ],
                    contacto: {
                        telefono: "+56 63 247 1824",
                        email: "turcorral@surnet.cl",
                        direccion: "Calle Blanco s/n, Corral, Región de Los Ríos."
                    }
                },
                {
                    nombre: "Feria Costumbrista de Niebla",
                    descripcion: "Feria costumbrista/artesanal en Niebla (Valdivia) que reúne artesanía, cultura local y productos tradicionales. Aporta variedad al turismo en la zona.",
                    fotos: [ "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b6/2d/00/photo0jpg.jpg?h=-1&s=1&w=500","https://www.fiestascostumbristas.cl/wp-content/uploads/2025/06/Encuentro-Costumbrista-de-Niebla.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b6/2d/00/photo0jpg.jpg?h=-1&s=1&w=500" ],
                    contacto: {
                        telefono: "+56 9 5315 2239",
                        email: "carmencatalanjaramillo@gmail.com",
                        direccion: "Calle Del Castillo 580, Niebla, Valdivia, Los Ríos"
                    }
                }
            ] 
        },
        { 
            id: 'arica', 
            nombre: 'Arica y Parinacota', 
            numeroRomano: 'XV', 
            vitrinas: [
                {
                    nombre: "Lodge El Pedregan",
                    descripcion: "Emprendimiento familiar de alojamiento en el valle de Codpa, comuna de Camarones. Gracias a financiamiento regional pudieron ampliar su oferta y mejorar sus instalaciones.",
                    fotos: [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/636209647.jpg?k=d98f2900a4a258a35ad8b40c431bde2c243c8c67f7289365c17c9e83c2604b4b&o=", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/18/57/84/codpa-valley-lodge.jpg?h=-1&s=1&w=500","https://serviciosturisticos.sernatur.cl/folder/empresas/emp_12209060/inscripcion_71612/phpGw1AoX.png" ],
                    contacto: {
                        telefono: "+56 9 8888 37548",
                        email: "lilianromero.codpa@hotmail.com",
                        direccion: "Pedregan s/n, Codpa, Camarones, Región de Arica y Parinacota."
                    }
                },
                {
                    nombre: "Trekking Aymara",
                    descripcion: "Operador de turismo aventura cultural liderado por guías aymaras, que explora el altiplano de Arica y Parinacota: trekking, lagunas, montaña, comunidad. Fue seleccionado para representar la región ante la cumbre mundial de turismo aventura.",
                    fotos: [ "https://trekkingaymara.cl/wp-content/uploads/2021/10/47-QN-chapiquina-scaled.jpg", "https://trekkingaymara.cl/wp-content/uploads/2021/10/20-vicunas-salar-scaled.jpg", "https://www.arica365.cl/wp-content/uploads/2025/10/suriplaza-1-1068x801.jpg" ],
                    contacto: {
                        telefono: "+56 9 9763 9318",
                        email: "info@TrekkingAymara.cl",
                        direccion: "Calle 21 de Mayo, Sitio 2 Manzana 13, Socoroma, Región de Arica y Parinacota."
                    }
                }
            ] 
        },
        { 
            id: 'nuble', 
            nombre: 'Ñuble', 
            numeroRomano: 'XVI', 
            vitrinas: [
                {
                    nombre: "Doña Rita Granja Museo",
                    descripcion: "Emprendimiento familiar que combina turismo rural + granja educativa + museo etno-histórico. Tiene alojamiento (cabañas), granja interactiva con animales y museo de maquinaria antigua, lo que lo hace más que “solo tour”",
                    fotos: [ "https://cdn0.matrimonios.cl/vendor/4255/3_2/960/jpeg/img-8320_8_184255-170662533581759.jpeg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ec/8d/d7/getlstd-property-photo.jpg?h=-1&s=1&w=1200","https://www.nochedemuseos.cl/sites/default/files/styles/slider_cultural_space/public/node/cultural_space/2025-10/port1.jpeg?h=a1e1a043&itok=mr5hs2_F" ],
                    contacto: {
                        telefono: "+56 9 7902 6109",
                        email: "donaritagranjamuseo@gmail.com",
                        direccion: "Km 9.5, Camino a Pinto, Parcela 5 interior, Chillán, Región de Ñuble."
                    }
                },
                {
                    nombre: "Aqualipso Agroturismo & Spa",
                    descripcion: "Agroturismo rural con spa, alojamiento en cabañas, experiencias de bienestar en plena naturaleza. No es solo tour de aventura, también alojamiento y relax con entorno rural integrado.",
                    fotos: [ "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/58/4c/a3/aqualipso-agroturismo.jpg?h=500&s=1&w=900","https://serviciosturisticos.sernatur.cl/folder/empresas/emp_8838389/inscripcion_19784/phpwg7bEb2016060311610.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/68/ff/d3/aqualipso-agroturismo.jpg?h=1200&s=1&w=1200" ],
                    contacto: {
                        telefono: "+56 9 7364 7861",
                        email: "aqualipsoagroturismo@gmail.com",
                        direccion: "Continuación Calle Carlos Condell s/n, Pinto, Región de Ñuble."
                    }
                }
            ] 
        }
    ]
};

/**
 * Carga la base de datos desde localStorage o usa la DB por defecto.
 */
function loadDb() {
    const dbFromStorage = localStorage.getItem('vitrinaRuralDb');
    try {
        if (dbFromStorage) {
            db = JSON.parse(dbFromStorage);
            // Asegurarse de que la estructura de la DB cargada es válida
            if (!db || !db.regiones) {
                throw new Error("Invalid DB structure in localStorage");
            }
        } else {
            throw new Error("No DB in localStorage");
        }
    } catch (e) {
        db = JSON.parse(JSON.stringify(defaultDb)); // Usar una copia profunda
        localStorage.setItem('vitrinaRuralDb', JSON.stringify(db));
    }
}

/**
 * Guarda la base de datos actual en localStorage.
 */
function saveDb() {
    localStorage.setItem('vitrinaRuralDb', JSON.stringify(db));
}

// --- LÓGICA DE LA APLICACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mainContent = document.getElementById('main-content');
    const regionList = document.getElementById('region-list');
    // Se eliminan las referencias al botón de tema
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const homeBtn = document.getElementById('home-btn');
    const addVitrinaBtn = document.getElementById('add-vitrina-btn');
    const resetDbBtn = document.getElementById('reset-db-btn'); // Botón de Reset
    const formModal = document.getElementById('form-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn');
    const vitrinaForm = document.getElementById('vitrina-form');
    const vitrinaRegionSelect = document.getElementById('vitrina-region');
    
    let activeRegionButton = null;
    
    // --- Lógica del Panel Lateral (Sidebar) ---
    
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
    }

    mobileMenuBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // --- Lógica de Renderizado de Contenido ---

    /**
     * Carga la lista de regiones en el panel lateral
     */
    function renderRegionsList() {
        regionList.innerHTML = ''; // Limpiar lista por si se recarga
        db.regiones.forEach(region => {
            const li = document.createElement('li');
            li.innerHTML = `
                <button data-region-id="${region.id}" class="region-btn w-full text-left px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span class="font-bold text-indigo-600 w-8 inline-block">${region.numeroRomano}</span>
                    <span>${region.nombre}</span>
                </button>
            `;
            regionList.appendChild(li);
        });
    }

    /**
     * Muestra la pantalla de bienvenida (Home)
     */
    function renderWelcome() {
        mainContent.innerHTML = `
            <div class="text-center p-10 bg-white rounded-lg shadow-xl animate-fade-in">
                <i data-lucide="map-pin" class="w-16 h-16 text-indigo-500 mx-auto mb-4"></i>
                <h2 class="text-3xl font-bold mb-2">Bienvenido a Vitrina Rural</h2>
                <p class="text-lg text-gray-600">
                    Selecciona una región para descubrir vitrinas o agrega una nueva con el botón en el panel.
                </p>
            </div>
            <!-- Aquí se podrían mostrar vitrinas destacadas de todas las regiones -->
        `;
        if (typeof lucide !== 'undefined') {
            lucide.createIcons(); // Re-renderizar iconos
        }
    }

    /**
     * Muestra las vitrinas de una región seleccionada
     * @param {string} regionId - El ID de la región a mostrar
     */
    function showRegion(regionId) {
        const region = db.regiones.find(r => r.id === regionId);
        if (!region) return;

        // Limpiar contenido anterior
        mainContent.innerHTML = '';

        // Crear Título de la Región
        const title = document.createElement('h2');
        title.className = "text-3xl font-bold mb-6";
        title.textContent = `Vitrinas en ${region.nombre}`; // Título actualizado
        mainContent.appendChild(title);

        // Crear contenedor para las vitrinas
        const grid = document.createElement('div');
        grid.className = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6";

        if (region.vitrinas.length === 0) {
            // Mensaje si no hay vitrinas
            grid.innerHTML = `
                <div class="col-span-full text-center p-8 bg-white rounded-lg shadow">
                    <i data-lucide="wind" class="w-12 h-12 text-gray-400 mx-auto mb-4"></i>
                    <p class="text-gray-500">Aún no hay vitrinas destacadas para esta región.</p>
                </div>
            `;
        } else {
            // Generar una tarjeta por cada vitrina
            region.vitrinas.forEach((vitrina, index) => {
                const card = document.createElement('div');
                card.className = "bg-white rounded-xl shadow-lg overflow-hidden flex flex-col";
                
                // --- INICIO: Lógica del Carrusel ---
                let fotosHtml = '';
                const fotos = vitrina.fotos && vitrina.fotos.length > 0 
                    ? vitrina.fotos 
                    : ['https://placehold.co/600x400/cccccc/ffffff?text=Sin+Imagen'];
                
                const uniqueId = `carousel-${regionId}-${index}`; // ID único para el carrusel

                if (fotos.length > 1) {
                    // Carrusel
                    fotosHtml = `
                    <div class="relative w-full h-48 carousel-container" data-carousel-id="${uniqueId}">
                        <div class="carousel-track flex w-full h-full">
                            ${fotos.map((foto, i) => `
                                <div class="carousel-slide w-full h-full flex-shrink-0">
                                    <img src="${foto}" alt="Foto ${i + 1} de ${vitrina.nombre}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error+Imagen';">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-btn prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60">
                            <i data-lucide="chevron-left" class="w-5 h-5"></i>
                        </button>
                        <button class="carousel-btn next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60">
                            <i data-lucide="chevron-right" class="w-5 h-5"></i>
                        </button>
                        <div class="carousel-dots absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                            ${fotos.map((_, i) => `
                                <button class="carousel-dot ${i === 0 ? 'active' : ''} w-2 h-2 bg-white/50 rounded-full hover:bg-white" data-slide-index="${i}"></button>
                            `).join('')}
                        </div>
                    </div>
                    `;
                } else {
                    // Foto única
                    fotosHtml = `
                    <div class="w-full h-48">
                        <img src="${fotos[0]}" alt="Foto de ${vitrina.nombre}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error+Imagen';">
                    </div>
                    `;
                }
                // --- FIN: Lógica del Carrusel ---

                card.innerHTML = `
                    ${fotosHtml}
                    <div class="p-5 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold mb-2 text-indigo-700">${vitrina.nombre}</h3>
                        <p class="text-gray-700 mb-4 flex-grow">${vitrina.descripcion}</p>
                        
                        <div class="border-t border-gray-200 pt-4 mt-auto">
                            <h4 class="text-sm font-semibold text-gray-500 mb-2">Contacto</h4>
                            <div class="space-y-2 text-sm">
                                <div class="flex items-center">
                                    <i data-lucide="phone" class="w-4 h-4 mr-2 text-indigo-500"></i>
                                    <a href="tel:${vitrina.contacto.telefono}" class="hover:underline">${vitrina.contacto.telefono}</a>
                                </div>
                                <div class="flex items-center">
                                    <i data-lucide="mail" class="w-4 h-4 mr-2 text-indigo-500"></i>
                                    <a href="mailto:${vitrina.contacto.email}" class="hover:underline truncate">${vitrina.contacto.email}</a>
                                </div>
                                <div class="flex items-start">
                                    <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-indigo-500 mt-1 flex-shrink-0"></i>
                                    <span class="truncate">${vitrina.contacto.direccion}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
        
        mainContent.appendChild(grid);
        if (typeof lucide !== 'undefined') {
            lucide.createIcons(); // Re-renderizar iconos (incluidos los del carrusel)
        }
        initCarousels(); // Activar los carruseles recién creados
    }
    
    // --- Lógica del Formulario y Modal ---
        
    function openFormModal() {
        // Cargar regiones en el select
        vitrinaRegionSelect.innerHTML = '<option value="" disabled selected>Selecciona una región</option>';
        db.regiones.forEach(region => {
            vitrinaRegionSelect.innerHTML += `<option value="${region.id}">${region.nombre}</option>`;
        });
        vitrinaForm.reset(); // Limpiar formulario
        formModal.classList.remove('hidden');
        formModal.classList.add('flex');
        if (typeof lucide !== 'undefined') {
            lucide.createIcons(); // Renderizar icono 'x'
        }
    }

    function closeFormModal() {
        formModal.classList.add('hidden');
        formModal.classList.remove('flex');
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Recolectar datos
        const regionId = document.getElementById('vitrina-region').value;
        const fotosInput = document.getElementById('vitrina-fotos').value;
        const newVitrina = {
            nombre: document.getElementById('vitrina-nombre').value,
            descripcion: document.getElementById('vitrina-descripcion').value,
            fotos: fotosInput.split(',').map(url => url.trim()).filter(url => url.length > 0), // Convierte string a array
            contacto: {
                telefono: document.getElementById('vitrina-telefono').value,
                email: document.getElementById('vitrina-email').value,
                direccion: document.getElementById('vitrina-direccion').value,
            }
        };
        
        // Encontrar la región y agregar la vitrina
        const regionIndex = db.regiones.findIndex(r => r.id === regionId);
        if (regionIndex > -1) {
            db.regiones[regionIndex].vitrinas.push(newVitrina);
            saveDb(); // Guardar en localStorage
            
            closeFormModal();
            showRegion(regionId); // Refrescar la vista para mostrar la nueva vitrina
        } else {
            console.error("No se encontró la región seleccionada");
            // Aquí podríamos mostrar un error al usuario
        }
    }

    // --- Lógica del Carrusel ---

    // Almacena los intervalos de los carruseles para poder limpiarlos
    const carouselIntervals = new Map();

    function initCarousels() {
        const carousels = document.querySelectorAll('.carousel-container');
        
        carousels.forEach(carousel => {
            const carouselId = carousel.dataset.carouselId;
            const track = carousel.querySelector('.carousel-track');
            const slides = Array.from(track.children);
            const nextBtn = carousel.querySelector('.carousel-btn.next');
            const prevBtn = carousel.querySelector('.carousel-btn.prev');
            const dots = carousel.querySelectorAll('.carousel-dot');
            let currentIndex = 0;

            function moveToSlide(index) {
                // Asegurarse de que el índice esté dentro de los límites
                const newIndex = (index + slides.length) % slides.length;
                track.style.transform = `translateX(-${newIndex * 100}%)`;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === newIndex);
                });
                currentIndex = newIndex;
            }

            function startSlideShow() {
                stopSlideShow(); // Limpiar intervalo existente si lo hay
                const interval = setInterval(() => {
                    moveToSlide(currentIndex + 1);
                }, 5000); // Cambia cada 5 segundos
                carouselIntervals.set(carouselId, interval);
            }

            function stopSlideShow() {
                if (carouselIntervals.has(carouselId)) {
                    clearInterval(carouselIntervals.get(carouselId));
                    carouselIntervals.delete(carouselId);
                }
            }

            nextBtn.addEventListener('click', () => {
                moveToSlide(currentIndex + 1);
                stopSlideShow(); // Detener auto-slide al hacer clic manual
            });

            prevBtn.addEventListener('click', () => {
                moveToSlide(currentIndex - 1);
                stopSlideShow(); // Detener auto-slide al hacer clic manual
            });

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.slideIndex);
                    moveToSlide(index);
                    stopSlideShow(); // Detener auto-slide al hacer clic manual
                });
            });

            // Iniciar auto-slide
            startSlideShow();

            // Pausar en hover
            carousel.addEventListener('mouseenter', stopSlideShow);
            carousel.addEventListener('mouseleave', startSlideShow);
        });
    }

    
    // --- INICIALIZACIÓN ---

    loadDb(); // Cargar la DB al inicio
    
    // Se elimina la llamada a loadInitialTheme()
    
    renderRegionsList(); // Cargar lista de regiones

    renderWelcome(); // Cargar bienvenida
    
    // Renderizar iconos estáticos (menú, botones del sidebar)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- Asignación de Eventos ---

    // Botón Home (Logo)
    homeBtn.addEventListener('click', () => {
        renderWelcome();
        // Deseleccionar región activa
        if (activeRegionButton) {
            activeRegionButton.classList.remove('bg-indigo-100', 'text-indigo-700');
            activeRegionButton = null;
        }
        // Cerrar sidebar en móvil si está abierto
        if (window.innerWidth < 640 && !sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });

    // Botón de Reset DB
    resetDbBtn.addEventListener('click', () => {
        // No usamos confirm() para evitar problemas en el iFrame
        console.log("Reseteando base de datos...");
        localStorage.removeItem('vitrinaRuralDb');
        location.reload();
    });

    // Clics en la lista de Regiones (Delegación de eventos)
    regionList.addEventListener('click', (e) => {
        const button = e.target.closest('.region-btn');
        if (button) {
            const regionId = button.dataset.regionId;
            showRegion(regionId);

            // Resaltar botón activo
            if (activeRegionButton) {
                activeRegionButton.classList.remove('bg-indigo-100', 'text-indigo-700');
            }
            button.classList.add('bg-indigo-100', 'text-indigo-700');
            activeRegionButton = button;
            
            // Ocultar sidebar en móvil después de seleccionar
            if (window.innerWidth < 640) {
                toggleSidebar();
            }
        }
    });

    // Eventos del Modal
    addVitrinaBtn.addEventListener('click', openFormModal);
    closeModalBtn.addEventListener('click', closeFormModal);
    cancelModalBtn.addEventListener('click', closeFormModal);
    vitrinaForm.addEventListener('submit', handleFormSubmit);

});

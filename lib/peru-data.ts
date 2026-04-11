export interface Province {
  name: string;
  districts: string[];
}

export interface Department {
  name: string;
  provinces: Province[];
}

export const peruData: Department[] = [
  {
    name: "Amazonas",
    provinces: [
      { name: "Chachapoyas", districts: ["Chachapoyas", "Asunción", "Balsas", "Cheto", "Chiliquín", "Granada", "Huancas", "La Jalca", "Leimebamba", "Levanto", "Magdalena", "Molinopampa", "Quinjalca", "Soloco", "Sonche"] },
      { name: "Bagua", districts: ["Bagua", "Aramango", "Copallín", "El Parco", "Imaza", "La Peca"] },
      { name: "Bongará", districts: ["Jumbilla", "Corosha", "Cuispes", "Florida", "Jazán", "San Carlos", "Shipasbamba", "Yambrasbamba"] },
      { name: "Condorcanqui", districts: ["Santa María de Nieva", "El Cenepa", "Río Santiago"] },
      { name: "Luya", districts: ["Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Luya", "Ocalli", "Ocumal", "Pisuquia", "Santa Catalina", "Santo Tomás", "Tingo"] },
      { name: "Rodríguez de Mendoza", districts: ["San Nicolás", "Chirimoto", "Cochamal", "Huambo", "Limabamba", "Omia", "Santa Rosa", "Vista Alegre"] },
      { name: "Utcubamba", districts: ["Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", "Lonya Grande", "Yamón"] },
    ],
  },
  {
    name: "Áncash",
    provinces: [
      { name: "Huaraz", districts: ["Huaraz", "Cochabamba", "Independencia", "Jangas", "La Libertad", "Olleros", "Pampas Grande", "Pira", "Tarica"] },
      { name: "Casma", districts: ["Casma", "Buenavista Alta", "Comandante Noel", "Yaután"] },
      { name: "Huaylas", districts: ["Caraz", "Huallanca", "Huata", "Huaylas", "Mato", "Pamparomás", "Pueblo Libre", "Santa Cruz", "Yuracmarca"] },
      { name: "Santa", districts: ["Chimbote", "Nuevo Chimbote", "Coishco", "Macate", "Moro", "Nepeña", "Samanco", "Santa"] },
      { name: "Yungay", districts: ["Yungay", "Cascapara", "Mancos", "Matacoto", "Quillo", "Ranrahirca", "Shupluy", "Yanama"] },
    ],
  },
  {
    name: "Apurímac",
    provinces: [
      { name: "Abancay", districts: ["Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"] },
      { name: "Andahuaylas", districts: ["Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", "Kishuara", "Pacobamba", "Pacucha", "San Jerónimo", "Santa María de Chicmo", "Talavera", "Turpo"] },
      { name: "Cotabambas", districts: ["Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Challhuahuacho"] },
      { name: "Chincheros", districts: ["Chincheros", "Anco-Huallo", "Cocharcas", "Huaccana", "Ocobamba", "Ongoy", "Uranmarca"] },
      { name: "Grau", districts: ["Chuquibambilla", "Curpahuasi", "Gamarra", "Huayllati", "Mamara", "Pataypampa", "Progreso", "San Antonio", "Santa Rosa", "Vilcabamba"] },
    ],
  },
  {
    name: "Arequipa",
    provinces: [
      { name: "Arequipa", districts: ["Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", "Characato", "Hunter", "Jacobo Hunter", "José Luis Bustamante y Rivero", "La Joya", "Mariano Melgar", "Miraflores", "Mollebaya", "Paucarpata", "Sabandia", "Sachaca", "Socabaya", "Tiabaya", "Uchumayo", "Yanahuara", "Yarabamba", "Yura"] },
      { name: "Camaná", districts: ["Camaná", "José María Quimper", "Mariscal Cáceres", "Nicolás de Piérola", "Ocoña", "Quilca", "Samuel Pastor"] },
      { name: "Caylloma", districts: ["Chivay", "Achoma", "Cabanaconde", "Callalli", "Caylloma", "Coporaque", "Huambo", "Huanca", "Maca", "Madrigal", "Majes", "Sibayo", "Tapay", "Tisco", "Tuti", "Yanque"] },
      { name: "Islay", districts: ["Mollendo", "Cocachacra", "Dean Valdivia", "Islay", "Mejia", "Punta de Bombón"] },
    ],
  },
  {
    name: "Ayacucho",
    provinces: [
      { name: "Huamanga", districts: ["Ayacucho", "Acocro", "Carmen Alto", "Chiara", "Jesús Nazareno", "Ocros", "Pacaycasa", "Quinua", "San Juan Bautista", "Santiago de Pischa", "Socos", "Tambillo", "Vinchos"] },
      { name: "Cangallo", districts: ["Cangallo", "Chuschi", "Los Morochucos", "María Parado de Bellido", "Paras", "Totos"] },
      { name: "Huanta", districts: ["Huanta", "Ayahuanco", "Huamanguilla", "Iguain", "Luricocha", "Llochegua", "Santillana"] },
      { name: "La Mar", districts: ["San Miguel", "Anco", "Ayna", "Chilcas", "Chungui", "Luis Carranza", "Santa Rosa", "Tambo"] },
      { name: "Lucanas", districts: ["Puquio", "Aucara", "Cabana", "Chaviña", "Chipao", "Huac-Huas", "Laramate", "Llucani", "Ocaña", "Otoca", "San Juan", "San Pedro", "Santa Ana de Huaycahuacho", "Santa Lucía"] },
    ],
  },
  {
    name: "Cajamarca",
    provinces: [
      { name: "Cajamarca", districts: ["Cajamarca", "Asunción", "Chetilla", "Cospan", "Encañada", "Jesús", "Llacanora", "Los Baños del Inca", "Magdalena", "Namora", "San Juan"] },
      { name: "Cajabamba", districts: ["Cajabamba", "Cachachi", "Condebamba", "Sitacocha"] },
      { name: "Celendín", districts: ["Celendín", "Cortegana", "Huasmin", "José Gálvez", "Miguel Iglesias", "Oxamarca", "Sorochuco", "Sucre", "Utco"] },
      { name: "Chota", districts: ["Chota", "Anguia", "Chadin", "Chiguirip", "Choropampa", "Cochabamba", "Conchan", "Huambos", "Lajas", "Llama", "Miracosta", "Paccha", "Querocoto", "Tacabamba", "Tocmoche"] },
      { name: "Jaén", districts: ["Jaén", "Bellavista", "Chontali", "Colasay", "Huabal", "Las Pirias", "Pomahuaca", "Pucará", "Sallique", "San Felipe", "Santa Rosa"] },
      { name: "San Ignacio", districts: ["San Ignacio", "Chirinos", "Huarango", "La Coipa", "Namballe", "San José de Lourdes", "Tabaconas"] },
    ],
  },
  {
    name: "Callao",
    provinces: [
      { name: "Callao", districts: ["Callao", "Bellavista", "Carmen de La Legua Reynoso", "La Perla", "La Punta", "Ventanilla", "Mi Perú"] },
    ],
  },
  {
    name: "Cusco",
    provinces: [
      { name: "Cusco", districts: ["Cusco", "Ccorca", "Poroy", "San Jerónimo", "San Sebastián", "Santiago", "Saylla", "Wanchaq"] },
      { name: "Calca", districts: ["Calca", "Coya", "Lamay", "Lares", "Pisac", "San Salvador", "Taray", "Yanatile"] },
      { name: "Canchis", districts: ["Sicuani", "Checacupe", "Combapata", "Marangani", "Pitumarca", "San Pablo", "San Pedro", "Tinta"] },
      { name: "Espinar", districts: ["Espinar", "Condoroma", "Coporaque", "Ocoruro", "Pallpata", "Pichigua", "Alto Pichigua"] },
      { name: "La Convención", districts: ["Santa Ana", "Echarate", "Huayopata", "Maranura", "Ocobamba", "Quellouno", "Kimbiri", "Santa Teresa", "Vilcabamba", "Pichari"] },
      { name: "Urubamba", districts: ["Urubamba", "Chinchero", "Huayllabamba", "Machupicchu", "Maras", "Ollantaytambo", "Yucay"] },
    ],
  },
  {
    name: "Huancavelica",
    provinces: [
      { name: "Huancavelica", districts: ["Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", "Huayllahuara", "Izcuchaca", "Laria", "Manta", "Moya", "Nuevo Occoro", "Palca", "Pilchaca", "Vilca", "Yauli", "Ascensión", "Huando"] },
      { name: "Acobamba", districts: ["Acobamba", "Andabamba", "Anta", "Caja", "Marcas", "Paucara", "Pomacocha", "Rosario"] },
      { name: "Angaraes", districts: ["Lircay", "Anchonga", "Ccochaccasa", "Chincho", "Congalla", "Julcamarca", "San Antonio de Antaparco", "Santo Tomás de Pata", "Secclla"] },
      { name: "Tayacaja", districts: ["Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", "Daniel Hernández", "Huaribamba", "Pazos", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", "Surcubamba"] },
    ],
  },
  {
    name: "Huánuco",
    provinces: [
      { name: "Huánuco", districts: ["Huánuco", "Amarilis", "Chinchao", "Churubamba", "Margos", "Quisqui", "Santa María del Valle", "Yarumayo", "Pillco Marca"] },
      { name: "Ambo", districts: ["Ambo", "Cayna", "Colpas", "Conchamarca", "Huacar", "San Francisco", "San Rafael"] },
      { name: "Leoncio Prado", districts: ["Rupa-Rupa (Tingo María)", "Daniel Alomía Robles", "Hermílio Valdizán", "José Crespo y Castillo", "Luyando", "Mariano Dámaso Beraún"] },
      { name: "Pachitea", districts: ["Panao", "Chaglla", "Molino", "Umari"] },
      { name: "Puerto Inca", districts: ["Puerto Inca", "Codo del Pozuzo", "Honoria", "Tournavista", "Yuyapichis"] },
    ],
  },
  {
    name: "Ica",
    provinces: [
      { name: "Ica", districts: ["Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacútec", "Parcona", "Pueblo Nuevo", "Salas", "San Juan Bautista", "Santiago", "Subtanjalla", "Tate"] },
      { name: "Chincha", districts: ["Chincha Alta", "Alto Larán", "Chavín", "Chincha Baja", "El Carmen", "Grocio Prado", "Pueblo Nuevo", "Sunampe", "Tambo de Mora"] },
      { name: "Nasca", districts: ["Nasca", "Changuillo", "El Ingenio", "Marcona", "Vista Alegre"] },
      { name: "Pisco", districts: ["Pisco", "Huancano", "Humay", "Independencia", "Paracas", "San Andrés", "San Clemente", "Tupac Amaru Inca"] },
    ],
  },
  {
    name: "Junín",
    provinces: [
      { name: "Huancayo", districts: ["Huancayo", "Chilca", "Chongos Alto", "Chupuro", "El Tambo", "Hualhuas", "Huancán", "Huayucachi", "Pilcomayo", "Pucará", "Quilcas", "San Agustín de Cajas", "San Jerónimo de Tunán", "Sapallanga", "Sicaya", "Viques"] },
      { name: "Chanchamayo", districts: ["Chanchamayo (La Merced)", "Perené", "Pichanaqui", "San Luis de Shuaro", "San Ramón", "Vitoc"] },
      { name: "Jauja", districts: ["Jauja", "Acolla", "Apata", "Ataura", "Curicaca", "El Mantaro", "Huamali", "Huaripampa", "Jaujilla", "Julcán", "Leonor Ordóñez", "Marco", "Masma", "Molinos", "Muqui", "Paca", "Paccha", "Parco", "San Lorenzo", "Sausa", "Sincos", "Yauyos"] },
      { name: "Satipo", districts: ["Satipo", "Coviriali", "Llaylla", "Mazamari", "Pampa Hermosa", "Pangoa", "Río Negro", "Río Tambo"] },
      { name: "Tarma", districts: ["Tarma", "Acobamba", "Huaricolca", "Huasahuasi", "La Unión", "Palca", "Palcamayo", "San Pedro de Cajas", "Tapo"] },
      { name: "Yauli", districts: ["La Oroya", "Chacapalpa", "Huay-Huay", "Marcapomacocha", "Morococha", "Paccha", "Santa Bárbara de Carhuacayán", "Santa Rosa de Sacco", "Yauli"] },
    ],
  },
  {
    name: "La Libertad",
    provinces: [
      { name: "Trujillo", districts: ["Trujillo", "El Porvenir", "Florencia de Mora", "Huanchaco", "La Esperanza", "Laredo", "Moche", "Poroto", "Salaverry", "Simbal", "Victor Larco Herrera"] },
      { name: "Ascope", districts: ["Ascope", "Chicama", "Chocope", "Magdalena de Cao", "Paijan", "Rázuri", "Santiago de Cao", "Casa Grande"] },
      { name: "Chepén", districts: ["Chepén", "Pacanga", "Pueblo Nuevo"] },
      { name: "Otuzco", districts: ["Otuzco", "Agallpampa", "Charat", "Huaranchal", "Mache", "Salpo", "Sinsicap", "Usquil"] },
      { name: "Pacasmayo", districts: ["San Pedro de Lloc", "Guadalupe", "Jequetepeque", "Pacasmayo", "San José"] },
      { name: "Sánchez Carrión", districts: ["Huamachuco", "Chugay", "Cochorco", "Curgos", "Marcabal", "Sarín", "Sartimbamba"] },
      { name: "Virú", districts: ["Virú", "Chao", "Guadalupito"] },
    ],
  },
  {
    name: "Lambayeque",
    provinces: [
      { name: "Chiclayo", districts: ["Chiclayo", "Cayaltí", "Chongoyape", "Eten", "José Leonardo Ortiz", "La Victoria", "Lagunas", "Monsefú", "Nueva Arica", "Oyotún", "Picsi", "Pimentel", "Pomalca", "Pucalá", "Reque", "Santa Rosa", "Saña", "Tumán"] },
      { name: "Ferreñafe", districts: ["Ferreñafe", "Cañaris", "Incahuasi", "Manuel Antonio Mesones Muro", "Pitipo", "Pueblo Nuevo"] },
      { name: "Lambayeque", districts: ["Lambayeque", "Chóchope", "Íllimo", "Jayanca", "Mochumí", "Mórrope", "Motupe", "Olmos", "Pacora", "Salas", "San José", "Túcume"] },
    ],
  },
  {
    name: "Lima",
    provinces: [
      { name: "Lima", districts: ["Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos", "Cieneguilla", "Comas", "El Agustino", "Independencia", "Jesús María", "La Molina", "La Victoria", "Lince", "Los Olivos", "Lurigancho", "Lurín", "Magdalena del Mar", "Miraflores", "Pachacámac", "Pueblo Libre", "Puente Piedra", "Rímac", "San Borja", "San Isidro", "San Juan de Lurigancho", "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita", "Santiago de Surco", "Surquillo", "Villa El Salvador", "Villa María del Triunfo"] },
      { name: "Barranca", districts: ["Barranca", "Aucallama", "Chancay", "Huaral", "Sayan", "Végueta"] },
      { name: "Cañete", districts: ["San Vicente de Cañete", "Asia", "Calango", "Cerro Azul", "Chilca", "Coayllo", "Imperial", "Lunahuaná", "Mala", "Nuevo Imperial", "Quilmaná", "San Antonio", "San Luis", "Santa Cruz de Flores"] },
      { name: "Huaral", districts: ["Huaral", "Aucallama", "Chancay", "Ihuari", "Lampián", "Pacaraos", "San Miguel de Acos", "Santa Cruz de Andamarca"] },
      { name: "Huarochirí", districts: ["Matucana", "Antioquia", "Callahuanca", "Carampoma", "Chicla", "Huachupampa", "Huarochiri", "Laraos", "Mariatana", "Ricardo Palma", "San Antonio", "San Damián", "San Mateo", "Santa Cruz de Cocachacra", "Santa Eulalia", "Santiago de Tuna", "Santo Domingo de los Olleros"] },
      { name: "Huaura", districts: ["Huacho", "Ambar", "Hualmay", "Huaura", "Leoncio Prado", "Paccho", "Santa María", "Sayan", "Végueta"] },
      { name: "Oyón", districts: ["Oyón", "Andajes", "Caujul", "Cochamarca", "Navan", "Pachangara"] },
    ],
  },
  {
    name: "Loreto",
    provinces: [
      { name: "Maynas", districts: ["Iquitos", "Alto Nanay", "Fernando Lores", "Indiana", "Las Amazonas", "Mazan", "Napo", "Punchana", "Belén", "San Juan Bautista"] },
      { name: "Alto Amazonas", districts: ["Yurimaguas", "Balsapuerto", "Jeberos", "Lagunas", "Santa Cruz", "Teniente César López Rojas"] },
      { name: "Loreto", districts: ["Nauta", "Parinari", "Tigre", "Trompeteros", "Urarinas"] },
      { name: "Requena", districts: ["Requena", "Alto Tapiche", "Capelo", "Emilio San Martín", "Maquia", "Puinahua", "Saquena", "Soplin", "Tapiche", "Jenaro Herrera", "Yaquerana"] },
      { name: "Datem del Marañón", districts: ["San Lorenzo", "Andoas", "Barranca", "Cahuapanas", "Manseriche", "Morona", "Pastaza"] },
    ],
  },
  {
    name: "Madre de Dios",
    provinces: [
      { name: "Tambopata", districts: ["Tambopata (Puerto Maldonado)", "Inambari", "Las Piedras", "Laberinto"] },
      { name: "Manu", districts: ["Manu", "Fitzcarrald", "Madre de Dios", "Huepetuhe"] },
      { name: "Tahuamanu", districts: ["Iñapari", "Iberia", "Tahuamanu"] },
    ],
  },
  {
    name: "Moquegua",
    provinces: [
      { name: "Mariscal Nieto", districts: ["Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristóbal", "Torata"] },
      { name: "General Sánchez Cerro", districts: ["Omate", "Chojata", "Coalaque", "Ichuña", "La Capilla", "Lloque", "Matalaque", "Puquina", "Quinistaquillas", "Ubinas", "Yunga"] },
      { name: "Ilo", districts: ["Ilo", "El Algarrobal", "Pacocha"] },
    ],
  },
  {
    name: "Pasco",
    provinces: [
      { name: "Pasco", districts: ["Chaupimarca (Cerro de Pasco)", "Huachón", "Huariaca", "Huayllay", "Ninacaca", "Pallanchacra", "Paucartambo", "Simon Bolívar", "Ticlacayan", "Yanacancha"] },
      { name: "Daniel Alcides Carrión", districts: ["Yanahuanca", "Chacayán", "Goyllarisquizga", "Paucar", "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", "Vilcabamba"] },
      { name: "Oxapampa", districts: ["Oxapampa", "Chontabamba", "Huancabamba", "Palcazú", "Pozuzo", "Puerto Bermúdez", "Villa Rica"] },
    ],
  },
  {
    name: "Piura",
    provinces: [
      { name: "Piura", districts: ["Piura", "Castilla", "Catacaos", "Cura Morí", "El Tallán", "La Arena", "La Unión", "Las Lomas", "Tambo Grande", "Veintiseis de Octubre"] },
      { name: "Ayabaca", districts: ["Ayabaca", "Frias", "Jililí", "Lagunas", "Montero", "Pacaipampa", "Paimas", "Sapillica", "Sicchez", "Suyo"] },
      { name: "Huancabamba", districts: ["Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", "Lalaquiz", "San Miguel del Faique", "Sondor", "Sondorillo"] },
      { name: "Morropón", districts: ["Chulucanas", "Buenos Aires", "Chalaco", "La Matanza", "Morropón", "Salitral", "San Juan de Bigote", "Santo Domingo", "Yamango"] },
      { name: "Paita", districts: ["Paita", "Amotape", "Arenal", "Colan", "La Huaca", "Tamarindo", "Vichayal"] },
      { name: "Sullana", districts: ["Sullana", "Bellavista", "Ignacio Escudero", "Lancones", "Marcavelica", "Miguel Checa", "Querecotillo", "Salitral"] },
      { name: "Talara", districts: ["Pariñas (Talara)", "El Alto", "La Brea", "Lobitos", "Los Órganos", "Mancora"] },
      { name: "Sechura", districts: ["Sechura", "Bellavista de la Unión", "Bernal", "Cristo Nos Valga", "Vice", "Rinconada Llicuar"] },
    ],
  },
  {
    name: "Puno",
    provinces: [
      { name: "Puno", districts: ["Puno", "Acora", "Amantani", "Atuncolla", "Capachica", "Chucuito", "Coata", "Huata", "Mañazo", "Paucarcolla", "Pichacani", "Platería", "San Antonio", "Tiquillaca", "Vilque"] },
      { name: "Azángaro", districts: ["Azángaro", "Achaya", "Arapa", "Asillo", "Caminaca", "Chupa", "Muñani", "Potoni", "Saman", "San Antón", "San José", "San Juan de Salinas", "Santiago de Pupuja", "Tirapata"] },
      { name: "Chucuito", districts: ["Juli", "Desaguadero", "Huacullani", "Kelluyo", "Pisacoma", "Pomata", "Zepita"] },
      { name: "El Collao", districts: ["Ilave", "Capazo", "Pilcuyo", "Santa Rosa", "Conduriri"] },
      { name: "Huancané", districts: ["Huancané", "Cojata", "Huatasani", "Inchupalla", "Pusi", "Rosaspata", "Taraco", "Vilque Chico"] },
      { name: "Melgar", districts: ["Ayaviri", "Antauta", "Cupi", "Llalli", "Macari", "Nuñoa", "Orurillo", "Santa Rosa", "Umachiri"] },
      { name: "San Román", districts: ["Juliaca", "Cabana", "Cabanillas", "Caracoto", "San Miguel"] },
      { name: "Yunguyo", districts: ["Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", "Tinicachi", "Unicachi"] },
    ],
  },
  {
    name: "San Martín",
    provinces: [
      { name: "Moyobamba", districts: ["Moyobamba", "Calzada", "Habana", "Jepelacio", "Soritor", "Yantalo"] },
      { name: "Lamas", districts: ["Lamas", "Alonso de Alvarado", "Barranquita", "Caynarachi", "Cuñumbuqui", "Pinto Recodo", "Rumisapa", "Shanao", "Tabalosos", "Zapatero"] },
      { name: "Mariscal Cáceres", districts: ["Juanjuí", "Campanilla", "Huicungo", "Pachiza", "Pajarillo"] },
      { name: "Rioja", districts: ["Rioja", "Awajún", "Elías Soplin Vargas", "Nueva Cajamarca", "Pardo Miguel", "Posic", "San Fernando", "San Marcos", "Yorongos", "Yuracyacu"] },
      { name: "San Martín", districts: ["Tarapoto", "Cacatachi", "Chazuta", "El Porvenir", "Huimbayoc", "Juan Guerra", "La Banda de Shilcayo", "Morales", "Papaplaya", "San Antonio", "Sauce"] },
      { name: "Tocache", districts: ["Tocache", "Nuevo Progreso", "Polvora", "Shunte", "Uchiza"] },
    ],
  },
  {
    name: "Tacna",
    provinces: [
      { name: "Tacna", districts: ["Tacna", "Alto de la Alianza", "Calana", "Ciudad Nueva", "Inclan", "Pachia", "Palca", "Pocollay", "Sama", "Coronel Gregorio Albarracín Lanchipa"] },
      { name: "Candarave", districts: ["Candarave", "Cairani", "Camilaca", "Curibaya", "Huanuara", "Quilahuani"] },
      { name: "Jorge Basadre", districts: ["Locumba", "Ilabaya", "Ite"] },
      { name: "Tarata", districts: ["Tarata", "Chucatamani", "Estique", "Estique-Pampa", "Sitajara", "Susapaya", "Tarucachi", "Ticaco"] },
    ],
  },
  {
    name: "Tumbes",
    provinces: [
      { name: "Tumbes", districts: ["Tumbes", "Corrales", "La Cruz", "Pampas de Hospital", "San Jacinto", "San Juan de la Virgen"] },
      { name: "Contralmirante Villar", districts: ["Zorritos", "Casitas", "Canoas de Punta Sal"] },
      { name: "Zarumilla", districts: ["Zarumilla", "Aguas Verdes", "La Palma", "Matapalo"] },
    ],
  },
  {
    name: "Ucayali",
    provinces: [
      { name: "Coronel Portillo", districts: ["Callería (Pucallpa)", "Campoverde", "Iparia", "Masisea", "Yarinacocha", "Nueva Requena", "Manantay"] },
      { name: "Atalaya", districts: ["Raymondi", "Sepahua", "Tahuania", "Yurúa"] },
      { name: "Padre Abad", districts: ["Padre Abad (Aguaytia)", "Irazola", "Curimana", "Neshuya", "Alexander Von Humboldt"] },
      { name: "Purús", districts: ["Purús"] },
    ],
  },
];

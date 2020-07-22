CREATE DATABASE misiones;
USE misiones;

CREATE TABLE aeronave
(
	id int(255)
	auto_increment not null,
	matricula       varchar
	(50),
    flota           varchar
	(50),
    modelo          varchar
	(50),
    propietario     varchar
	(50),
	total_vuelo	    int
	(255) not null,
	CONSTRAINT pk_aeronave PRIMARY KEY
	(id)
)ENGINE=InnoDb;

	CREATE TABLE tripulantes
	(
		id int(255)
		auto_increment not null,
	id_user         int
		(255) not null,
    disponibilidad  boolean not null,
    hora_total      int
		(255) not null,
	CONSTRAINT pk_tripulantes PRIMARY KEY
		(id)
)ENGINE=InnoDb;


		CREATE TABLE tripulacion
		(
			id int(255)
			auto_increment not null,
	id_tripulante	int
			(255) not null,
    id_funcion	    int
			(255) not null,
	id_mision		int
			(255) not null,
	CONSTRAINT pk_tripulacion PRIMARY KEY
			(id)
)ENGINE=InnoDb;

			CREATE TABLE funciones
			(
				id int(255)
				auto_increment not null,
	nombre          varchar
				(50) not null,
	CONSTRAINT pk_funciones PRIMARY KEY
				(id)
)ENGINE=InnoDb;


				CREATE TABLE entidades
				(
					id int(255)
					auto_increment not null,
	nombre          varchar
					(50) not null,
	CONSTRAINT pk_entidades PRIMARY KEY
					(id)
)ENGINE=InnoDb;


					CREATE TABLE status_mision
					(
						id int(255)
						auto_increment not null,
	nombre          varchar
						(50) not null,
	CONSTRAINT pk_status_mision PRIMARY KEY
						(id)
)ENGINE=InnoDb;

						CREATE TABLE provincias
						(
							id int(255)
							auto_increment not null,
	nombre          varchar
							(50) not null,
	CONSTRAINT pk_provincias PRIMARY KEY
							(id)
)ENGINE=InnoDb;

							CREATE TABLE tipo_mision
							(
								id int(255)
								auto_increment not null,
	nombre          varchar
								(50) not null,
	CONSTRAINT pk_tipo_mision PRIMARY KEY
								(id)
)ENGINE=InnoDb;

								CREATE TABLE operativo
								(
									id int(255)
									auto_increment not null,
	nombre          varchar
									(50) not null,
	CONSTRAINT pk_operativo PRIMARY KEY
									(id)
)ENGINE=InnoDb;

									CREATE TABLE mision
									(
										id int(255)
										auto_increment not null,
	id_aeronave     int
										(255) not null,
    id_provincia    int
										(255) not null,
    id_operativo    int
										(255) not null,
    ubicacion       varchar
										(255),
    id_status_mision int
										(255) not null,
    descripcion     varchar
										(255),
    hora_solicitud  DATETIME not null,
    hora_vuelo      int
										(255),
    datos_medicos   varchar
										(255),
	id_creador 		int
										(255) not null,
	CONSTRAINT pk_mision PRIMARY KEY
										(id)
)ENGINE=InnoDb;

										CREATE TABLE detalle_mision
										(
											id int(255)
											auto_increment not null,
	id_mision       int
											(255) not null,
    id_tipo_mision  int
											(255) not null,
    id_provincia    int
											(255) not null,
    id_status    	int
											(255) not null,
    ubicacion       varchar
											(255),
    fecha     		DATETIME not null,
    id_entidad      int
											(255) not null,
    peso            int
											(255),
    carga           varchar
											(255),
    pax             int
											(255),
	CONSTRAINT pk_detalle_mision PRIMARY KEY
											(id)
)ENGINE=InnoDb;

											CREATE TABLE detalle_mision_piloto
											(
												id int(255)
												auto_increment not null,
	id_mision       int
												(255) not null,
    id_tipo_mision  int
												(255) not null,
    id_provincia    int
												(255) not null,
    id_status    	int
												(255) not null,
    ubicacion       varchar
												(255),
    fecha     		DATETIME not null,
    id_entidad      int
												(255) not null,
    peso            int
												(255),
    carga           varchar
												(255),
    pax             int
												(255),
	CONSTRAINT pk_detalle_mision_piloto PRIMARY KEY
												(id)
)ENGINE=InnoDb;


												CREATE TABLE manifest
												(
													id int(255)
													auto_increment not null,
	id_mision       int
													(255) not null,
    hora_cancel   	datetime not null,
    id_user    		int
													(255) not null,
    motivo       	varchar
													(255),
	CONSTRAINT pk_manifest PRIMARY KEY
													(id)
)ENGINE=InnoDb;




													select d.id_entidad , e.nombre as entidad
													from detalle_mision d
														inner join entidades e on e.id = d.id_entidad
													where not d.id_entidad = 16
													GROUP BY id_entidad


													select d.id_tipo_mision
													from detalle_mision d
														inner join tipo_mision t on t.id = d.id_entidad


													select e.nombre, count(d.id_entidad) as misiones
													from entidades e
														left join detalle_mision d
														on e.id = d.id_entidad
													where not e.nombre = 'Por Definir' and d.id_entidad != 0
													group by e.nombre
													order by misiones DESC

													select m.id , m.hora_solicitud, count(d.id_mision) as piernas
													from mision m
														left join detalle_mision d
														on m.id = d.id_mision
													group by m.id
													order by m.id ASC

													select id, id_mision, hora_piloto, id_status
													from detalle_mision
													where not id_status = 7 and id_mision = 143
													order by hora_piloto ASC





													select count(id) as "Aereas"
													from mision


													select sum(hora_vuelo)
													from mision 

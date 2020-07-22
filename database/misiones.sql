-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2020 at 09:24 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `misiones`
--
CREATE DATABASE IF NOT EXISTS `misiones` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `misiones`;

-- --------------------------------------------------------

--
-- Table structure for table `aeronave`
--

DROP TABLE IF EXISTS `aeronave`;
CREATE TABLE `aeronave` (
  `id` int(255) NOT NULL,
  `matricula` varchar(50) DEFAULT NULL,
  `flota` varchar(50) DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `propietario` varchar(50) DEFAULT NULL,
  `costo` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aeronave`
--

INSERT INTO `aeronave` (`id`, `matricula`, `flota`, `modelo`, `propietario`, `costo`) VALUES
(35, 'AN-', 'Segunda Flota', 'UH-1N', 'Senan', 0),
(36, 'SAN-103', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(37, 'SAN-104', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(38, 'SAN-105', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(39, 'SAN-106', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(40, 'SAN-107', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(41, 'SAN-108', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(42, 'SAN-109', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(43, 'SAN-120', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(44, 'SAN-121', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(45, 'SAN-2030', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(46, 'SAN-1012', 'Segunda Flota', 'LSS-33', 'Senan', 0),
(47, 'SAN-966', 'Segunda Flota', 'BELL-966', 'Senan', 0),
(48, 'SAN-250', 'Primera Flota', 'CS-212', 'Senan', 1855),
(49, 'SAN-255', 'Primera Flota', 'CS-212', 'Senan', 1855),
(50, 'SAN-260', 'Primera Flota', 'CS-212', 'Senan', 1855),
(51, 'SAN-265', 'Primera Flota', 'CS-212', 'Senan', 1855),
(52, 'SAN-208', 'Primera Flota', 'BN-2A', 'Senan', 275),
(53, 'SAN-212', 'Primera Flota', 'PA-34', 'Senan', 325),
(54, 'SAN-214', 'Primera Flota', 'PA-34', 'Senan', 325),
(55, 'SAN-020', 'Tercera Flota', 'T-35', 'Senan', 190),
(56, 'SAN-021', 'Tercera Flota', 'T-35', 'Senan', 190),
(57, 'SAN-024', 'Tercera Flota', 'T-35', 'Senan', 190),
(58, 'SAN-026', 'Tercera Flota', 'T-35', 'Senan', 190),
(59, 'SAN-028', 'Tercera Flota', 'T-35', 'Senan', 190),
(60, 'SAN-029', 'Tercera Flota', 'T-35', 'Senan', 190),
(61, 'SAN-216', 'Primera Flota', 'PA-31', 'Senan', 0),
(62, 'SAN-022', 'Tercera Flota', 'T-35', 'Senan', 190),
(63, 'SAN-023', 'Tercera Flota', 'T-35', 'Senan', 190),
(64, 'SAN-209', 'Primera Flota', 'BN-2A', 'Senan', 275),
(65, 'SAN-125', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(66, 'SAN-124', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(67, 'SAN-126', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(68, 'SAN-128', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(69, 'SAN-123', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(70, 'SAN-127', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(71, 'SAN-132', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(72, 'SAN-011', 'Primera Flota', 'C-152', 'Senan', 100),
(73, 'SAN-131', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(74, 'SAN-130', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(75, 'SAN-110', 'Segunda Flota', 'BELL-407', 'Senan', 695),
(76, 'SAN-010', 'Primera Flota', 'C-152', 'Senan', 100),
(77, 'SAN-012', 'Primera Flota', 'C-172', 'Senan', 100),
(78, 'SAN-013', 'Primera Flota', 'C-152', 'Senan', 100),
(79, 'SAN-129', 'Segunda Flota', 'UH-1H', 'Senan', 1625),
(80, 'SAN-122', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(81, 'SAN-017', 'Primera Flota', 'T-210', 'Senan', 190),
(82, 'SAN-111', 'Segunda Flota', 'MD-500', 'Senan', 730),
(83, 'HP-1PNP', 'Segunda Flota', 'MD-500', 'Senan', 730),
(84, 'HP-1418', 'Segunda Flota', 'BELL-407', 'Senan', 695),
(85, 'AN-112', 'Segunda Flota', 'BELL-407', 'Senan', 695),
(86, 'AN-136', 'Segunda Flota', 'BK-117C2', 'Senan', 1600),
(87, 'AN-135', 'Segunda Flota', 'BELL-412', 'Senan', 1825),
(88, 'AN-300', 'Primera Flota', 'PA-31', 'Senan', 600),
(89, 'AN-040', 'Primera Flota', 'C-208', 'Senan', 900),
(90, 'AN-041', 'Primera Flota', 'C-208', 'Senan', 900),
(91, 'AN-030', 'Primera Flota', 'C-172', 'Senan', 125),
(92, 'AN-031', 'Primera Flota', 'C-172', 'Senan', 125),
(93, 'AN-032', 'Primera Flota', 'C-172', 'Senan', 125),
(94, 'AN-033', 'Primera Flota', 'C-172', 'Senan', 125),
(95, 'AN-015', 'Primera Flota', 'C-152', 'Senan', 100),
(96, 'AN-016', 'Primera Flota', 'C-152', 'Senan', 100),
(97, 'AN-019', 'Primera Flota', 'C-152', 'Senan', 100),
(98, 'AN-137', 'Segunda Flota', 'BELL-412', 'Senan', 1825),
(99, 'AN-140', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(100, 'AN-001', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(101, 'AN-139', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(102, 'AN-141', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(103, 'AN-142', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(104, 'AN-002', 'Primera Flota', 'KING AIR 100', 'Senan', 1200),
(105, 'AN-138', 'Segunda Flota', 'AW-139', 'Senan', 2000),
(106, 'AN-143', 'Segunda Flota', 'BELL-412', 'Senan', 1825),
(107, 'STATE-448', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(108, 'STATE-465', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(109, 'STATE-668', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(110, 'STATE-637', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(111, 'STATE-786', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(112, 'STATE-636', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(113, 'AN-134', 'Segunda Flota', 'BELL-212', 'Senan', 1825),
(114, 'STATE-276', 'Segunda Flota', 'UH-1HS', 'Senan', 0),
(115, 'AN-144', 'Segunda Flota', 'AW-109SP', 'Senan', 2000),
(116, 'AN-145', 'Segunda Flota', 'AW-139M', 'Senan', 2000),
(117, 'AN-146', 'Segunda Flota', 'AW-139M', 'Senan', 2000),
(118, 'AN-261', 'Primera Flota', 'DHC-6 T. OTTER', 'Senan', 1800),
(119, 'AN-262', 'Primera Flota', 'DHC-6 T. OTTER', 'Senan', 1800),
(120, 'AN-401', 'Primera Flota', 'KING AIR 350 I', 'Senan', 1800),
(121, 'AN-177', 'Segunda Flota', 'EC-130T2', 'Senan', 2350),
(122, 'AN-405', 'Primera Flota', 'BARON G58', 'Senan', 1000),
(123, 'AN-113', 'Segunda Flota', 'UH-1H S', 'Senan', 2000),
(124, 'AN-114', 'Segunda Flota', 'UH-1H S', 'Senan', 2000),
(125, 'AN-115', 'Segunda Flota', 'UH-1H S', 'Senan', 2000),
(126, 'AN-116', 'Segunda Flota', 'UH-1H S', 'Senan', 2000),
(127, 'AN-117', 'Segunda Flota', 'UH-1H S', 'Senan', 2000),
(128, 'AN-118', 'Segunda Flota', 'UH-1H S ', 'Senan', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `detalle_mision`
--

DROP TABLE IF EXISTS `detalle_mision`;
CREATE TABLE `detalle_mision` (
  `id` int(255) NOT NULL,
  `id_mision` int(255) NOT NULL,
  `id_tipo_mision` int(255) DEFAULT NULL,
  `id_provincia` int(255) NOT NULL,
  `id_status` int(255) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `id_entidad` int(255) DEFAULT NULL,
  `peso` int(255) DEFAULT NULL,
  `carga` varchar(255) DEFAULT NULL,
  `pax` int(255) DEFAULT NULL,
  `hora_piloto` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detalle_mision`
--

INSERT INTO `detalle_mision` (`id`, `id_mision`, `id_tipo_mision`, `id_provincia`, `id_status`, `ubicacion`, `fecha`, `id_entidad`, `peso`, `carga`, `pax`, `hora_piloto`) VALUES
(432, 180, 6, 13, 7, 'santiago', '2020-03-13 09:56:34', 16, NULL, NULL, NULL, NULL),
(433, 180, 22, 13, 2, 'santiago', '2020-03-14 08:30:00', 52, 0, NULL, 0, NULL),
(434, 180, 22, 8, 1, 'Guabal', '2020-03-14 09:00:00', 52, 0, NULL, 0, NULL),
(437, 180, 32, 8, 2, 'Guabal', '2020-03-14 09:30:00', 52, 500, 'pax + carga', 1, NULL),
(438, 180, 32, 8, 1, 'Escuela El Chorro', '2020-03-14 10:00:00', 52, 500, 'pax + carga', 1, NULL),
(440, 180, 32, 8, 2, 'Escuela El Chorro', '2020-03-14 10:30:00', 52, 0, 'por definir', 0, NULL),
(441, 180, 32, 8, 1, 'Guabal', '2020-03-14 11:00:00', 52, 0, 'por definir', 0, NULL),
(442, 180, 32, 8, 2, 'Guabal', '2020-03-14 11:20:00', 52, 100, 'pax + carga', 3, NULL),
(443, 180, 32, 8, 1, 'Escuela El Chorro', '2020-03-14 11:40:00', 52, 100, 'pax + carga', 3, NULL),
(447, 180, 32, 8, 2, 'Escuela El Chorro', '2020-03-14 12:00:00', 52, 0, NULL, 0, NULL),
(448, 180, 32, 13, 1, 'Santiago', '2020-03-14 12:30:00', 52, 0, NULL, 0, NULL),
(449, 180, 14, 13, 2, 'Santiago', '2020-03-14 13:00:00', 56, 0, 'por definir', 0, NULL),
(450, 180, 14, 8, 1, 'Valle Bonito', '2020-03-14 13:40:00', 56, 0, 'por definir', 0, NULL),
(451, 180, 14, 8, 2, 'Valle Bonito', '2020-03-14 14:00:00', 56, 0, 'por definir', 0, NULL),
(452, 180, 14, 13, 1, 'Santiago', '2020-03-14 14:40:00', 56, 0, 'por definir', 0, NULL),
(453, 180, 14, 13, 2, 'Santiago', '2020-03-14 16:45:00', 56, 0, 'por definir', 0, NULL),
(454, 180, 14, 8, 1, 'Valle Bonito', '2020-03-14 17:15:00', 56, 0, 'por definir', 0, NULL),
(455, 180, 14, 8, 2, 'Valle Bonito', '2020-03-14 17:30:00', 56, 0, 'pax', 3, NULL),
(456, 180, 14, 13, 1, 'Santiago', '2020-03-14 18:00:00', 56, 0, 'pax', 3, NULL),
(457, 180, 29, 13, 2, 'Santiago', '2020-03-14 19:00:00', 148, 0, '0', 0, NULL),
(458, 180, 29, 12, 1, 'Howard', '2020-03-14 20:10:00', 148, 0, '0', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `entidades`
--

DROP TABLE IF EXISTS `entidades`;
CREATE TABLE `entidades` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entidades`
--

INSERT INTO `entidades` (`id`, `nombre`) VALUES
(16, 'Por Definir'),
(17, 'A.I.D.'),
(18, 'AUTORIDAD DE AERONAUTICA CIVIL'),
(19, 'ALCALDIA DE DARIEN'),
(20, 'ALCALDIA DE PANAMA'),
(21, 'ALCALDIA DE VERAGUAS'),
(22, 'ANCON'),
(23, 'ASAMBLEA LEGISLATIVA'),
(24, 'ASOCIACION RELIGIOSA'),
(25, 'CAMARA JUNIOR'),
(26, 'CONTRALORIA'),
(27, 'CLUB DE LEONES'),
(28, 'CRUZ ROJA PANAMEÑA'),
(29, 'D.I.D.I.A.'),
(30, 'DIGEDECOM'),
(31, 'FISCALIA DE DARIEN'),
(32, 'FISCALIA DE PANAMA'),
(33, 'FISCALIA DE VERAGUAS'),
(34, 'GOBERNACION DE BOCAS DEL TORO'),
(35, 'GOBERNACION DE CHIRIQUI'),
(36, 'GOBERNACION DE COCLE'),
(37, 'GOBERNACION DE COLON'),
(38, 'GOBERNACION DE PANAMA'),
(39, 'GOBERNACION DE DARIEN'),
(40, 'GOBIERNO U.S.A.'),
(41, 'CABLE $ WIRELES'),
(42, 'I.N.A.C.'),
(43, 'I.N.D.E.'),
(44, 'I.P.A.T.'),
(45, 'COMPAÑIAS ELECTRICAS'),
(46, 'I.D.A.A.N.'),
(47, 'LOTERIA NACIONAL'),
(48, 'M.I.D.A.'),
(49, 'M.I.P.P.E'),
(50, 'MINISTERIO DE VIVIENDA'),
(51, 'MIGRACION'),
(52, 'MINISTERIO DE EDUCACION'),
(53, 'MIN. DE GOBIERNO Y JUSTICIA'),
(54, 'MIN. DE HACIENDA Y TESORO'),
(55, 'MIN. DE OBRAS PUBLICAS'),
(56, 'MIN. DE SALUD'),
(57, 'MIN. DE TRABAJO'),
(58, 'MIN. CE COMERCIO E INDUSTRIA'),
(59, 'MUNICIPIO DE AGUADULCE'),
(60, 'MUNICIPIO DE NATA'),
(61, 'O.N.U.'),
(62, 'O.N.P.A.R.'),
(63, 'POLICIA TECNICA JUDICIAL'),
(64, 'PATRIMONIO HISTORICO'),
(65, 'PETROTERMINALES DE CHIRIQUI'),
(66, 'PETROTERMINALES DE PANAMA'),
(67, 'PERSONERIA DE PANAMA'),
(68, 'POLICIA NACIONAL'),
(69, 'POLITICA INDIGENISTA'),
(70, 'PRESIDENCIA'),
(71, 'PROESA'),
(72, 'REGISTRO CIVIL'),
(73, 'RESCATE Y SALVAMENTO AEREO'),
(74, 'R.P.C. CANAL 4'),
(75, 'SERVICIO AEREO NACIONAL'),
(76, 'SERVICIO MARITIMO NACIONAL'),
(77, 'SCOUT DE PANAMA'),
(78, 'SISTEMA PENITENCIARIO'),
(79, 'SINAPROC'),
(80, 'SAMBRANO Y ASOCIADO'),
(81, 'SOCIEDAD NACIONAL GEOGRAFICA'),
(82, 'TELEMETRO CANAL 13'),
(83, 'TRIBUNAL ELECTORAL'),
(84, 'TVN CANL 2'),
(85, 'UNIVERSIDAD DE PANAMA'),
(86, 'GRUPO ECLESIASTICO VISION'),
(87, 'CLUB 20-30'),
(88, 'MIN. DE RELACIONES EXTERIORES'),
(89, 'FONDO DE INVERCION SOCIAL'),
(90, 'EMBAJADA DE FRANCIA'),
(91, 'ORGANO JUDICIAL'),
(92, 'CUERPO DE BOMBEROS'),
(93, 'VICARIATO DEL DARIEN'),
(94, 'PRONIÑOS DEL DARIEN'),
(95, 'CONAPRED'),
(96, 'A.T.T.T.'),
(97, 'MINISTERIO PUBLICO'),
(98, 'CLUB DE AEROMODELISMO'),
(99, 'RECURSOS MARINOS'),
(100, 'I.F.A.R.H.U'),
(101, 'AUTORIDAD PORTUARIA'),
(102, 'EMBAJADA DE ARGENTINA'),
(103, 'DESPACHO DE LA PRIMERA DAMA'),
(104, 'GOBERNACION DE VERAGUAS'),
(105, 'PROCURADORIA DE LA NACION'),
(106, 'FUNDACION PRO-IMPEDIDOS'),
(107, 'A.R.I.'),
(108, 'CLUB CIVICO 10 DE NOV.'),
(109, 'ULACIT'),
(110, 'INST. PAN. DE COM. EXTERIOR'),
(111, 'CAJA DE SEGURO SOCIAL'),
(112, 'PERSONERIA DE SANTIAGO'),
(113, 'S.P.I'),
(114, 'A.M.U.P.A.'),
(115, 'ASC. FILANTROPICA'),
(116, 'I.N.A.F.O.R.P.'),
(117, 'MUNICIPIO DE PANAMA'),
(118, 'VOZ SIN FRONTERAS'),
(119, 'CHIRIQUI LAND COMPANY'),
(120, 'MINISTERIO DE LA JUVENTUD'),
(121, 'I.P.H.E.'),
(122, 'COLEGIO LA SALLE'),
(123, 'M.E.F.'),
(124, 'A.N.A.M.'),
(125, 'CORTE SUPREMA DE JUSTICIA'),
(126, 'A.C.P'),
(127, 'FISCALIA DE DROGAS'),
(128, 'FISCALIA DE COCLE'),
(129, 'GOBIERNOS LOCALES'),
(130, 'P.A.R.S.A.'),
(131, 'EMBAJADA DE JAPON'),
(132, 'GOBERNACION DE HERRERA'),
(133, 'NUTRE HOGAR'),
(134, 'CORREOS Y TELEGRAFOS'),
(135, 'EVACUACIONES MEDICAS'),
(136, 'S.E.N.A.C.Y.T.'),
(137, 'BANCO HIPOTECARIO'),
(138, 'AUT. PEQ Y MEDIANA EMPRESA'),
(139, 'BANCO NACIONAL DE PANAMA'),
(140, 'FUNDACION ECOLOGICA NACIONAL.'),
(141, 'AUTORIDA MARITIMA DE PANAMA.'),
(142, 'GIRAS MEDICAS'),
(143, 'IPACOOP'),
(144, 'ARZOBISPADO'),
(145, 'PATRONATO DE LA FERIA DE OCU'),
(146, 'HOSPITAL ONCOLOGICO'),
(147, 'FISACALIA DE CHIRIQUI'),
(148, 'SERVICIO NACIONAL AERONAVAL'),
(149, 'SENAFRONT'),
(150, 'PATRULLAJE (SENAN)'),
(151, 'MINISTERIO DE SEGURIDAD PUBLIC'),
(152, 'PROMUNDI TRES'),
(153, 'DEFENSORIA DEL PUEBLO'),
(154, 'SENADIS'),
(155, 'I.M.A'),
(156, 'MIDES'),
(157, 'ANATI'),
(158, 'PANDEPORTES'),
(159, 'ARAP'),
(160, 'FUNDACION OPERACION SONRISA'),
(161, 'SERTV CANAL 5'),
(162, 'CAJA DE AHORRO'),
(163, 'PRODAR'),
(164, 'ASEP'),
(165, 'UDELAS'),
(166, 'INST. NACIONAL TOMMY GUARDIA'),
(167, 'EMBAJADA DE COLOMBIA'),
(168, 'MUNICIPIO DE DAVID'),
(169, 'GOBERNACION COM. EMBERA'),
(170, 'B.D.A'),
(171, 'ASOCIACIÓN DE PARACAIDISMO '),
(172, 'HOSPITAL DEL NIÑO'),
(173, 'TOCUMEN S.A'),
(174, 'IGLESIA CATÓLICA'),
(175, 'ISAE UNIVERSIDAD'),
(176, 'ALCALDIA DE BUGABA'),
(177, 'SEPRODACAN'),
(178, 'MUNICIPIO DE PINOGANA'),
(179, 'CONSEJO DE SEGURIDAD'),
(180, 'PROGRAMA DE AVIACIÓN'),
(181, 'AUTORIDAD DE TURISMO DE PANAMA'),
(182, 'FANLYC'),
(183, 'ACODECO'),
(184, 'EMBAJADA DE TAIWAN'),
(185, 'UTP'),
(186, 'REGISTRO PÚBLICO'),
(187, 'EMBAJADA BRITANICA'),
(188, 'EMBAJADA DE ESPAÑA'),
(189, 'FUNDACIÓN BETTY COPARROPA '),
(190, 'PROBIDSIDA'),
(191, 'MIAMBIENTE'),
(192, 'AUTORIDAD NACIONAL DE ADUANA');

-- --------------------------------------------------------

--
-- Table structure for table `funciones`
--

DROP TABLE IF EXISTS `funciones`;
CREATE TABLE `funciones` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `funciones`
--

INSERT INTO `funciones` (`id`, `nombre`) VALUES
(1, 'Piloto'),
(2, 'Co-Piloto'),
(5, 'Paramedico'),
(6, 'Mecánico');

-- --------------------------------------------------------

--
-- Table structure for table `manifest`
--

DROP TABLE IF EXISTS `manifest`;
CREATE TABLE `manifest` (
  `id` int(255) NOT NULL,
  `id_mision` int(255) NOT NULL,
  `hora_cancel` datetime NOT NULL,
  `id_user` int(255) NOT NULL,
  `motivo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mision`
--

DROP TABLE IF EXISTS `mision`;
CREATE TABLE `mision` (
  `id` int(255) NOT NULL,
  `id_aeronave` int(255) NOT NULL,
  `id_provincia` int(255) NOT NULL,
  `id_operativo` int(255) NOT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `id_status_mision` int(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `hora_solicitud` datetime NOT NULL,
  `ETA` int(255) DEFAULT NULL,
  `id_creador` int(255) DEFAULT NULL,
  `hora_vuelo` float DEFAULT NULL,
  `hora_tierra` float DEFAULT NULL,
  `hora_vuelo_coan` float DEFAULT NULL,
  `hora_tierra_coan` float DEFAULT NULL,
  `hora_instrumento` float DEFAULT NULL,
  `hora_nocturno` float DEFAULT NULL,
  `diurno_horas` int(255) DEFAULT NULL,
  `diurno_minutos` int(255) DEFAULT NULL,
  `nocturno_horas` int(255) DEFAULT NULL,
  `nocturno_minutos` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mision`
--

INSERT INTO `mision` (`id`, `id_aeronave`, `id_provincia`, `id_operativo`, `ubicacion`, `id_status_mision`, `descripcion`, `hora_solicitud`, `ETA`, `id_creador`, `hora_vuelo`, `hora_tierra`, `hora_vuelo_coan`, `hora_tierra_coan`, `hora_instrumento`, `hora_nocturno`, `diurno_horas`, `diurno_minutos`, `nocturno_horas`, `nocturno_minutos`) VALUES
(180, 121, 12, 8, 'Howard', 3, '*  Traslado de pax y carga (MEDUCA)\n*  MEDEVAC (MINSA)\n*  Traslado de Aeronave (AERONAVAL)', '2020-03-13 09:56:34', NULL, 16, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `operativo`
--

DROP TABLE IF EXISTS `operativo`;
CREATE TABLE `operativo` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operativo`
--

INSERT INTO `operativo` (`id`, `nombre`) VALUES
(8, 'No Aplica'),
(9, 'Operativo Carnavales'),
(10, 'Operativo Semana Santa');

-- --------------------------------------------------------

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
CREATE TABLE `provincias` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provincias`
--

INSERT INTO `provincias` (`id`, `nombre`) VALUES
(5, 'Bocas del Toro'),
(6, 'Cocle'),
(7, 'Colón'),
(8, 'Chiriquí'),
(9, 'Darién'),
(10, 'Herrera'),
(11, 'Los Santos'),
(12, 'Panamá'),
(13, 'Veraguas'),
(14, 'San Blas'),
(15, 'Internacional'),
(16, 'Comarca Ngabe');

-- --------------------------------------------------------

--
-- Table structure for table `status_mision`
--

DROP TABLE IF EXISTS `status_mision`;
CREATE TABLE `status_mision` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_mision`
--

INSERT INTO `status_mision` (`id`, `nombre`) VALUES
(1, 'Stand By'),
(2, 'On Flight'),
(3, 'On Review'),
(4, 'On Result'),
(5, 'Completed'),
(6, 'Cancelled'),
(7, 'Scheduled');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_mision`
--

DROP TABLE IF EXISTS `tipo_mision`;
CREATE TABLE `tipo_mision` (
  `id` int(255) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipo_mision`
--

INSERT INTO `tipo_mision` (`id`, `nombre`) VALUES
(6, 'Por Definir'),
(7, 'ANTINARCOTICO'),
(8, 'LINEA DE COSTA(ARAP)'),
(9, 'BUSQUEDA Y RESCATE'),
(10, 'TRANSPORTE DE COMBUSTIBLE'),
(11, 'TRANSPORTE DE CADAVER'),
(12, 'DESASTRES NATURALES'),
(13, 'TRANSPORTE DEL SR. PRESIDENTE'),
(14, 'EVACUACION MEDICA'),
(15, 'FOTOGRAFIA AEREA'),
(16, 'GIRA MEDICA'),
(17, 'INTERDICCION'),
(18, 'LANZAMIENTO DE PARACAIDISTA'),
(19, 'TRANSPORTE DE MEDICOS'),
(20, 'TRANSPORTE DE TECNICOS'),
(21, 'OPERACION ESPECIAL'),
(22, 'A ORDEN DE ESTA ENTIDAD'),
(23, 'PRACTICA DE MANIOBRAS'),
(24, 'PATRULLAJE Y RECONOCIMIENTO'),
(25, 'VUELO PROEFICIENCIA-TRIPULA.'),
(26, 'RELEVO'),
(27, 'TRANSPORTE DE MEDICAMENTOS'),
(28, 'SOBRE VUELO'),
(29, 'TRASLADO DE AERONAVE'),
(30, 'TRANSPORTE DE CARGA'),
(31, 'TRANSPORTE DE MINISTRO'),
(32, 'TRANSPORTE DE PAX'),
(33, 'TRANSPORTE DE PIEZAS'),
(34, 'VUELO DE INSTRUCCION'),
(35, 'VUELO DE PRUEBA Y MANTO.'),
(36, 'TRANSPORTE DE VICE-PRESIDENTE'),
(37, 'VUELO COMO COMANDANTE'),
(38, 'TRANSPORTE DE VICE-MINISTRO'),
(39, 'M.I.P.P.E'),
(40, 'MINISTERIO DE VIVIENDA'),
(41, 'MIGRACION'),
(42, 'MINISTERIO DE EDUCACION'),
(43, 'MIN. DE GOBIERNO Y JUSTICIA'),
(44, 'MIN. DE HACIENDA Y TESORO'),
(45, 'MIN. DE OBRAS PUBLICAS'),
(46, 'MIN. DE SALUD'),
(47, 'MIN. DE TRABAJO'),
(48, 'MIN. CE COMERCIO E INDUSTRIA'),
(49, 'MUNICIPIO DE AGUADULCE'),
(50, 'MUNICIPIO DE NATA'),
(51, 'O.N.U.'),
(52, 'O.N.P.A.R.'),
(53, 'POLICIA TECNICA JUDICIAL'),
(54, 'PATRIMONIO HISTORICO'),
(55, 'PETROTERMINALES DE CHIRIQUI'),
(56, 'PETROTERMINALES DE PANAMA'),
(57, 'PERSONERIA DE PANAMA'),
(58, 'POLICIA NACIONAL'),
(59, 'POLITICA INDIGENISTA'),
(60, 'PRESIDENCIA'),
(61, 'PROESA'),
(62, 'REGISTRO CIVIL'),
(63, 'RESCATE Y SALVAMENTO AEREO'),
(64, 'R.P.C. CANAL 4'),
(65, 'SERVICIO AEREO NACIONAL'),
(66, 'SERVICIO MARITIMO NACIONAL'),
(67, 'SCOUT DE PANAMA'),
(68, 'SISTEMA PENITENCIARIO'),
(69, 'SINAPROC'),
(70, 'SAMBRANO Y ASOCIADO'),
(71, 'SOCIEDAD NACIONAL GEOGRAFICA'),
(72, 'TELEMETRO CANAL 13'),
(73, 'TRIBUNAL ELECTORAL'),
(74, 'TVN CANL 2'),
(75, 'UNIVERSIDAD DE PANAMA'),
(76, 'GRUPO ECLESIASTICO VISION'),
(77, 'CLUB 20-30'),
(78, 'MIN. DE RELACIONES EXTERIORES'),
(79, 'FONDO DE INVERCION SOCIAL'),
(80, 'EMBAJADA DE FRANCIA'),
(81, 'ORGANO JUDICIAL'),
(82, 'CUERPO DE BOMBEROS'),
(83, 'VICARIATO DEL DARIEN'),
(84, 'PRONIÑOS DEL DARIEN'),
(85, 'CONAPRED'),
(86, 'A.T.T.T.'),
(87, 'MINISTERIO PUBLICO'),
(88, 'CLUB DE AEROMODELISMO'),
(89, 'RECURSOS MARINOS'),
(90, 'I.F.A.R.H.U'),
(91, 'AUTORIDAD PORTUARIA'),
(92, 'EMBAJADA DE ARGENTINA'),
(93, 'DESPACHO DE LA PRIMERA DAMA'),
(94, 'GOBERNACION DE VERAGUAS'),
(95, 'PROCURADORIA DE LA NACION'),
(96, 'FUNDACION PRO-IMPEDIDOS'),
(97, 'A.R.I.'),
(98, 'CLUB CIVICO 10 DE NOV.'),
(99, 'ULACIT'),
(100, 'INST. PAN. DE COM. EXTERIOR'),
(101, 'CAJA DE SEGURO SOCIAL'),
(102, 'PERSONERIA DE SANTIAGO'),
(103, 'S.P.I'),
(104, 'A.M.U.P.A.'),
(105, 'ASC. FILANTROPICA'),
(106, 'I.N.A.F.O.R.P.'),
(107, 'MUNICIPIO DE PANAMA'),
(108, 'VOZ SIN FRONTERAS'),
(109, 'CHIRIQUI LAND COMPANY'),
(110, 'MINISTERIO DE LA JUVENTUD'),
(111, 'I.P.H.E.'),
(112, 'COLEGIO LA SALLE'),
(113, 'M.E.F.'),
(114, 'A.N.A.M.'),
(115, 'CORTE SUPREMA DE JUSTICIA'),
(116, 'A.C.P.'),
(117, 'FISCALIA DE DROGAS'),
(118, 'FISCALIA DE COCLE'),
(119, 'GOBIERNOS LOCALES'),
(120, 'P.A.R.S.A.'),
(121, 'EMBAJADA DE JAPON'),
(122, 'GOBERNACION DE HERRERA'),
(123, 'NUTRE HOGAR'),
(124, 'CORREOS Y TELEGRAFOS'),
(125, 'EVACUACIONES MEDICAS'),
(126, 'S.E.N.A.C.Y.T.'),
(127, 'BANCO HIPOTECARIO'),
(128, 'AUT. PEQ Y MEDIANA EMPRESA'),
(129, 'BANCO NACIONAL DE PANAMA'),
(130, 'FUNDACION ECOLOGICA NACIONAL.'),
(131, 'AUTORIDA MARITIMA DE PANAMA.'),
(132, 'GIRAS MEDICAS'),
(133, 'IPACOOP'),
(134, 'ARZOBISPADO'),
(135, 'PATRONATO DE LA FERIA DE OCU'),
(136, 'HOSPITAL ONCOLOGICO'),
(137, 'FISACALIA DE CHIRIQUI'),
(138, 'SERVICIO NACIONAL AERONAVAL'),
(139, 'SENAFRONT'),
(140, 'PATRULLAJE (SENAN)'),
(141, 'MINISTERIO DE SEGURIDAD PUBLIC'),
(142, 'PROMUNDI TRES'),
(143, 'DEFENSORIA DEL PUEBLO'),
(144, 'SENADIS'),
(145, 'I.M.A'),
(146, 'MIDES'),
(147, 'ANATI'),
(148, 'PANDEPORTES'),
(149, 'ARAP'),
(150, 'FUNDACION OPERACION SONRISA'),
(151, 'SERTV CANAL 5'),
(152, 'CAJA DE AHORRO'),
(153, 'PRODAR'),
(154, 'ASEP'),
(155, 'UDELAS'),
(156, 'INST. NACIONAL TOMMY GUARDIA'),
(157, 'EMBAJADA DE COLOMBIA'),
(158, 'MUNICIPIO DE DAVID'),
(159, 'GOBERNACION COM. EMBERA'),
(160, 'B.D.A'),
(161, 'ASOCIACIÓN DE PARACAIDISMO '),
(162, 'HOSPITAL DEL NIÑO'),
(163, 'TOCUMEN S.A'),
(164, 'IGLESIA CATÓLICA'),
(165, 'ISAE UNIVERSIDAD'),
(166, 'ALCALDIA DE BUGABA'),
(167, 'SEPRODACAN'),
(168, 'MUNICIPIO DE PINOGANA'),
(169, 'CONSEJO DE SEGURIDAD'),
(170, 'PROGRAMA DE AVIACIÓN'),
(171, 'AUTORIDAD DE TURISMO DE PANAMA'),
(172, 'FANLYC'),
(173, 'ACODECO'),
(174, 'EMBAJADA DE TAIWAN'),
(175, 'UTP'),
(176, 'REGISTRO PÚBLICO'),
(177, 'EMBAJADA BRITANICA'),
(178, 'EMBAJADA DE ESPAÑA'),
(179, 'FUNDACIÓN BETTY COPARROPA '),
(180, 'PROBIDSIDA'),
(181, 'MIAMBIENTE'),
(182, 'AUTORIDAD NACIONAL DE ADUANA');

-- --------------------------------------------------------

--
-- Table structure for table `tripulacion`
--

DROP TABLE IF EXISTS `tripulacion`;
CREATE TABLE `tripulacion` (
  `id` int(255) NOT NULL,
  `id_tripulante` int(255) NOT NULL,
  `id_funcion` int(255) NOT NULL,
  `id_mision` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tripulacion`
--

INSERT INTO `tripulacion` (`id`, `id_tripulante`, `id_funcion`, `id_mision`) VALUES
(217, 236, 1, 180),
(218, 271, 2, 180),
(219, 286, 6, 180),
(220, 63, 5, 180);

-- --------------------------------------------------------

--
-- Table structure for table `tripulantes`
--

DROP TABLE IF EXISTS `tripulantes`;
CREATE TABLE `tripulantes` (
  `id` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `disponibilidad` tinyint(1) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `hora_vuelo` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tripulantes`
--

INSERT INTO `tripulantes` (`id`, `id_user`, `disponibilidad`, `nombre`, `apellido`, `hora_vuelo`) VALUES
(26, 1267, 1, 'NICANOR', 'MORALES MENDEZ', 0),
(27, 1231, 1, 'ARQUIMEDES ', 'MIRANDA MURILLO', 0),
(28, 718, 1, 'ABELARDO', 'ARROCHA DIAZ', 0),
(29, 2448, 1, 'OMAR ARMEL', 'GARCIA CAMARENA', 0),
(30, 1285, 1, 'AZAEL', 'MORA ORTIZ', 0),
(31, 1284, 1, 'ULISES JHOOU', 'MIRANDA DEL CID', 0),
(32, 1774, 1, 'NICHOLAS ALBERTO', 'PINZON ZILVA', 0),
(33, 371, 1, 'CESAR', 'CASTILLO', 0),
(34, 667, 1, 'CLEMENTE RAMON', 'VEGA BUITRAGO', 0),
(35, 862, 1, 'GORGONIO ', 'SANCHEZ GONZALEZ', 0),
(36, 1237, 1, 'ERIC DANIEL ', 'FERNANDEZ  AGUILAR', 0),
(37, 2796, 1, 'BAYRON JAVIER ', 'LEZCANO SANTO', 0),
(38, 1266, 1, 'EVEN FRANCIS', 'MARQUEZ MENESES', 0),
(39, 884, 1, 'ERIC ARMANDO', 'HING MORA', 0),
(40, 1273, 1, 'OCTAVIANO ', 'CABALLERO SANTOYA', 0),
(41, 4280, 1, 'JOAQUIN JOSE', 'JEFF GUERRERO', 0),
(42, 1248, 1, 'MOISES FELIPE', 'LOZADA JIMENEZ ', 0),
(43, 3995, 1, 'ALDO NOBEL ', 'ACOSTA GONDOLA ', 0),
(44, 4177, 1, 'RICARDO ADOLFO', 'GARAY BARRIOS', 0),
(45, 948, 1, 'EDWIN AUGUSTO', 'SNAPE VALENCIA', 0),
(46, 699, 1, 'JOE HENRY', 'LANIADO MORALES', 0),
(47, 2447, 1, 'FROYLAN', 'SANCHEZ L', 0),
(48, 4271, 1, 'PORFIRIO RAFAEL', 'CABALLERO HERNÁNDEZ ', 0),
(49, 871, 1, 'FRANCISCO ANTONIO', 'MORALES SANTOS', 0),
(50, 784, 1, 'DANILO ROLANDO', 'CABALLERO MIRANDA', 0),
(51, 1154, 1, 'LUIS ANGEL', 'CORDOBA RUBIO', 0),
(52, 790, 1, 'GUSTAVO ALFREDO', 'PEREZ MORALES', 0),
(53, 1270, 1, 'BOLIVAR HEBERTO', 'PEÑA RODRIGUEZ', 0),
(54, 1264, 1, 'CIRILO AMILCAR', 'JIMENEZ QUINTERO', 0),
(55, 1261, 1, 'AGUSTIN', 'SANTOS VINDA', 0),
(56, 1232, 1, 'VICTOR MANUEL', 'SANTAMARIA DEGRACIA', 0),
(57, 686, 1, 'ONOFRE ORLANDO', 'QUINTERO SANTAMARIA', 0),
(58, 673, 1, 'JOEL OLBENIS ', 'MENDEZ', 0),
(59, 1283, 1, 'RICARDO', 'FUENTES GONZÁLEZ', 0),
(60, 2987, 1, 'ERICK IVAN', 'NIELSEN PIMENTEL', 0),
(61, 466, 1, 'FELIX', 'CHAVEZ', 0),
(62, 809, 1, 'RANDOLPH RAMON', 'ATENCIO GUERRA', 0),
(63, 670, 1, 'SALIM', 'CASTILLO LEZCANO', 0),
(64, 362, 1, 'MAURICIO JAVIER', 'GALLARDO ', 0),
(65, 901, 1, 'ROMMEL ', 'LEZCANO ACOSTA ', 0),
(66, 3435, 1, 'GEOVANY NORIEL', 'CASTILLO', 0),
(67, 1247, 1, 'KEVIN JONATHAN ', 'GUERRA CASTILLO', 0),
(68, 412, 1, 'DANIEL CALEB', 'PINEDA SAMUDIO', 0),
(69, 675, 1, 'HUMBERTO AGUSTIN', 'SAMUDIO MIRANDA', 0),
(70, 872, 1, 'LEVIS', 'SERRANO', 0),
(71, 835, 1, 'JONATHAN HAIR', 'LASSONDE SANCHEZ', 0),
(72, 2562, 1, 'JOSIMAR', 'ARAUZ', 0),
(73, 358, 1, 'JEAN PAUL ', 'MONTENEGRO A.', 0),
(74, 61, 1, 'ROBERTO', 'ANGULO ', 0),
(75, 3440, 1, 'LUIS', 'OTERO GONZALES', 0),
(76, 351, 1, 'JOSE ALONSO', 'ARAUZ  FUENTES', 0),
(77, 489, 1, 'EMERITO ABDIEL', 'VILLARREAL GONZALEZ', 0),
(78, 2524, 1, 'JULIO CESAR', 'LEZCANO MORENO', 0),
(79, 842, 1, 'ANDY XAVIER ', 'AVENDAÑO GONZALEZ ', 0),
(80, 626, 1, 'LUIS O. ', 'CASTILLO A.', 0),
(81, 3966, 1, 'ROBERTO ', 'ARAGON SERRANO', 0),
(82, 1240, 1, 'DIMAS', 'MENA MURILLO', 0),
(83, 386, 1, 'SIMON ANTONIO', 'PEREZ CALDERON', 0),
(84, 1576, 1, 'FELIX ', 'BARRERA BARRIA', 0),
(85, 272, 1, 'LUIS CARLOS', 'SANDOVAL TAKANO', 0),
(86, 4179, 1, 'CLEMENTE ERNESTO', 'GARCIA CHAVEZ', 0),
(87, 4626, 1, 'FATIMA', 'VEGA', 0),
(88, 269, 1, 'LAUREN RITTER', 'ACEVEDO', 0),
(89, 870, 1, 'LUIS  ANTONIO', 'DE GRACIA ', 0),
(90, 896, 1, 'GREGORIO ORIEL', 'GARCIA CEDEÑO', 0),
(91, 370, 1, 'GINO YARIEL', 'CEDEÑO VEGA', 0),
(92, 1272, 1, 'GUILLERMO ANTONIO', 'VASQUEZ PEREZ', 0),
(93, 2672, 1, 'VIRGILIO ARNEL', 'CORTES CORTES', 0),
(94, 410, 1, 'FRANCISCO JAVIER ', 'VERGARA RAMOS', 0),
(95, 2323, 1, 'ENANIAS', 'CASTILLO', 0),
(96, 2451, 1, 'GERARDO OSMAN', 'VALDERRAMA DOS', 0),
(97, 348, 1, 'MAIKOOL JAVIER', 'RIOS PEREZ', 0),
(98, 4052, 1, 'ERIC HERNAN ', 'BARRIOS HERNANDEZ ', 0),
(99, 2462, 1, 'NICOLAS', 'ARROCHA RODRIGUEZ', 0),
(100, 2498, 1, 'JUAN MANUEL ', 'GONZALEZ DIAZ ', 0),
(101, 479, 1, 'CARLOS ALBERTO ', 'ORTEGA LUNA', 0),
(102, 1128, 1, 'GEOVANY ABDEL', 'OSTIA CORREA', 0),
(103, 1254, 1, 'JOSE SANTOS', 'GONZALEZ', 0),
(104, 2440, 1, 'RAIMUNDO JOSE ', 'BERROCAL QUIROZ', 0),
(105, 1733, 1, 'VICTOR MANUEL ', 'CORRALES ZANETTI', 0),
(106, 658, 1, 'NICOLAS ', 'SAVAL ZAMBRANO', 0),
(107, 1253, 1, 'SIXTO GABRIEL', 'CHAVERRA LLERENA', 0),
(108, 691, 1, 'LUIS ALBERTO', 'MACRE QUIJADA', 0),
(109, 2445, 1, 'JUAN RICARDO', 'ROVIRA CARRERA', 0),
(110, 1256, 1, 'DIOGENES', 'VASQUEZ UREÑA', 0),
(111, 2450, 1, 'RICARDO', 'CASTILLO', 0),
(112, 1157, 1, 'ELIECER ANTONIO', 'CARDENAS QUINTERO', 0),
(113, 407, 1, 'ENRIQUE ALBERTO', 'WARD MARTINEZ', 0),
(114, 1183, 1, 'EDSON MAURICIO', 'CASTILLO HARDING', 0),
(115, 1577, 1, 'LUIS CARLOS ', 'DOMINGUEZ QUINTERO', 0),
(116, 121, 1, 'RAFAEL ANTONIO', 'CALLEJAS C.', 0),
(117, 1711, 1, 'ARIEL', 'DIAZ', 0),
(118, 665, 1, 'ENRIQUE JESUS', 'MONTAÑEZ GONZALEZ', 0),
(119, 928, 1, 'GILBERTO LUIS', 'MENDEZ JARAMILLO', 0),
(120, 1258, 1, 'FELIX', 'GARCIA BRISTAN', 0),
(121, 1262, 1, 'LEONIDAS ALBERTO', 'CHU MENDOZA', 0),
(122, 1354, 1, 'SOCORRO OSVALDO', 'BREMNER SALAZAR', 0),
(123, 2438, 1, 'ERIC', 'GONZALEZ', 0),
(124, 1259, 1, 'APOLINAR', 'GUERRERO ORTEGA', 0),
(125, 1269, 1, 'MARCOS ANTONIO ', 'PEÑA MIRANDA', 0),
(126, 392, 1, 'ALEXANDER', 'RIVERA CEDEñO', 0),
(127, 3231, 1, 'ROBERTO VLADIMIR ', 'ARMIJO MORA', 0),
(128, 1239, 1, 'ALEXI', 'GUTIERREZ WALDER ', 0),
(129, 889, 1, 'EDUARDO ENRIQUE', 'RODRIGUEZ DE SEDAS', 0),
(130, 389, 1, 'EDGARDO', 'GONZALEZ D.', 0),
(131, 894, 1, 'LUIS', 'DELGADO', 0),
(132, 1255, 1, 'ENRIQUE ANTONIO', 'MONTEZA GOMEZ', 0),
(133, 2433, 1, 'JORGE ANTONIO', 'BERGUIDO SANCHEZ', 0),
(134, 338, 1, 'PEDRO JUAN', 'JIMENEZ ORTIZ', 0),
(135, 567, 1, 'BORIS ARMANDO', 'GONZALEZ BETHANCOURTH', 0),
(136, 609, 1, 'ERASMO ', 'BERNAL GONZÁLEZ', 0),
(137, 388, 1, 'MIGUEL ', 'GARAGATE  JUAREZ', 0),
(138, 1110, 1, 'LUIS  RICARDO', 'FORERO  MOSQUERA', 0),
(139, 1271, 1, 'FERNANDO ERNESTO', 'VARELA ROBLEDO', 0),
(140, 1236, 1, 'JOSE ANTONIO ', 'ALLEYNE ROSALES ', 0),
(141, 2441, 1, 'JULIO ELIAS', 'TERRIENTES AROSEMENA', 0),
(142, 890, 1, 'EDGARDO ABRAHAM', 'GUARDIA MARQUINEZ', 0),
(143, 1233, 1, 'JOSE ROGELIO', 'SERRACIN JAÉN', 0),
(144, 390, 1, 'EDWIN ANTONIO', 'JIMENEZ RODRIGUEZ', 0),
(145, 1158, 1, 'HANS ABDUL', 'SANDOYA BECERRA', 0),
(146, 4386, 1, 'CLEMENTINA GIZELE ', 'AVILÉS HERNANDEZ ', 0),
(147, 3945, 1, 'EDWIN ENRIQUE ', 'GONZALEZ KAM', 0),
(148, 1160, 1, 'JOSE LUIS ', 'ALONZO RODRIGUEZ ', 0),
(149, 1873, 1, 'ABEL ANTONIO ', 'MARTINEZ RODRIGUEZ', 0),
(150, 1280, 1, 'ALBERTO ALCIDES ', 'TUÑON SÁNCHEZ', 0),
(151, 873, 1, 'CESAR ORIEL ', 'ABREGO BRAVO', 0),
(152, 1234, 1, 'RICARDO EDUARDO', 'SMALL GUEVARA', 0),
(153, 1260, 1, 'ABELARDO ANTONIO', 'RAMOS AGRAZAL', 0),
(154, 794, 1, 'VICTOR MANUEL', 'SERRANO GOMEZ', 0),
(155, 814, 1, 'GUILLERMO ALFREDO', 'GUTIERREZ LINAREZ', 0),
(156, 1257, 1, 'CARLOS ALBERTO', 'FULA RENGIFO', 0),
(157, 926, 1, 'SANTIAGO ANTONIO', 'BONILLA CUNDUMI', 0),
(158, 1569, 1, 'VICENTE ARTURO', 'JESSE TOMPSON', 0),
(159, 300, 1, 'ABDIEL MANUEL', 'CAMPOS GUEVARA', 0),
(160, 1238, 1, 'RONALD WILLIAM ', 'FLORES PINEDA', 0),
(161, 1104, 1, 'ARMANDO', 'KING', 0),
(162, 4623, 1, 'NEMESIO', 'CHANIS', 0),
(163, 1649, 1, 'HONES URIEL', 'ESCUDERO ZURITA', 0),
(164, 1279, 1, 'AUGUSTO CESAR', 'SANCHEZ GONZALEZ', 0),
(165, 2425, 1, 'MIGUEL', 'ZAMBRANO', 0),
(166, 146, 1, 'JONATHAN NATHANIEL', 'CAMARGO MARTINEZ', 0),
(167, 1568, 1, 'DAVID DESIDERIOS', 'CAMPOS GONZALEZ', 0),
(168, 603, 1, 'ELIESER URIBIADES', 'CASTILLO GUTIERREZ', 0),
(169, 250, 1, 'JUAN CARLOS', 'SALCEDO ZAPATA', 0),
(170, 668, 1, 'RICARDO', 'CARRASQUILLA', 0),
(171, 122, 1, 'ERIC IVAN ', 'FRUTO PORTUGAL', 0),
(172, 399, 1, 'CLEMENTE  GUSTAVO', 'ARCIA ABREGO', 0),
(173, 1275, 1, 'ARIEL IRAN', 'GALLARDO DE LEON', 0),
(174, 1230, 1, 'YAIR ISSAC', 'MEJIA AVILA', 0),
(175, 3332, 1, 'EDWIN ALBERTO', 'ULATE BERNAL', 0),
(176, 268, 1, 'EDWIN  ORIEL ', 'SAMUDIO BRYAN ', 0),
(177, 287, 1, 'DENNIS  ALBERTO', 'RIOS CASTILLO', 0),
(178, 1277, 1, 'JUAN CARLOS', 'LOPEZ LINDO', 0),
(179, 1229, 1, 'AMETH EDUARDO', 'CHARPENTIER MUÑOZ', 0),
(180, 1268, 1, 'RICARDO ', 'NISBETH AMADOR ', 0),
(181, 282, 1, 'LUIS ANTONIO', 'GONZALEZ ', 0),
(182, 394, 1, 'DAVID ALBERTO', 'ALVEO APARICIO', 0),
(183, 404, 1, 'RENZO MASSIEL', 'RIVERA MONTERO', 0),
(184, 335, 1, 'GERARDO CESAR', 'WHITE ARIANO', 0),
(185, 1129, 1, 'KARIM ADALBERTO', 'CABALLERO BARRIA', 0),
(186, 1731, 1, 'VICTOR', 'SIMONS', 0),
(187, 2452, 1, 'ENOX MEDEL', 'VALDEZ GONZALEZ', 0),
(188, 1646, 1, 'JUAN ', 'ALVARADO GONZALEZ', 0),
(189, 1274, 1, 'WALTER ANTONIO', 'DE GRACIA MURILLO', 0),
(190, 488, 1, 'SAMUEL', 'JEAN PIERRE', 0),
(191, 3394, 1, 'JULIO CESAR', 'PERALTA ', 0),
(192, 493, 1, 'JUAN JOSE', 'RODRIGUEZ', 0),
(193, 1276, 1, 'HECTOR ABDIEL', 'GUEVARA CHACON', 0),
(194, 685, 1, 'BEATRIZ ', 'RODRIGUEZ GALIANO', 0),
(195, 1242, 1, 'LUIS ALFONSO', 'GUERRA DIAZ', 0),
(196, 865, 1, 'JOSE', 'DURAN', 0),
(197, 671, 1, 'IRINA YASSURY ', 'CEDEÑO MONTENEGRO', 0),
(198, 1243, 1, 'JONATHAN ', 'KUBRATOFF VALDEZ', 0),
(199, 875, 1, 'REX ALEXANDER', 'LOPEZ MENDEZ', 0),
(200, 1710, 1, 'JONATHAN', 'CASTRO', 0),
(201, 1426, 1, 'YAMILETH ELVIRA', 'CORREOSO DENIS', 0),
(202, 409, 1, 'DEMETRIO WILLIANS ', 'PINEDA FAJARDO ', 0),
(203, 314, 1, 'AARON ALEXANDER', 'PINZON BERNAL', 0),
(204, 1281, 1, 'JULIO ABDIEL', 'BALLADARES NUÑEZ', 0),
(205, 2461, 1, 'CARLA THAMARA', 'ZAVALA CRUZ ', 0),
(206, 783, 1, 'PABLO RAMON', 'MENDOZA RODRIGUEZ', 0),
(207, 1880, 1, 'ROBERTO T.', 'LEAVER ROWLEY', 0),
(208, 661, 1, 'JOEL ALEXANDER', 'HERRERA RODRIGUEZ', 0),
(209, 922, 1, 'MIGUEL ANGEL', 'MONTENEGRO AYALA', 0),
(210, 1168, 1, 'YACQUELINE JEANNETH ', 'PONCE LAGUERRA', 0),
(211, 1286, 1, 'RICARDO', 'OROZCO P.', 0),
(212, 1788, 1, 'JOEL JACKDIEL', 'AMAYA GARCIA', 0),
(213, 930, 1, 'YARLENIS ALERNIS', 'ANDINO ARAYA', 0),
(214, 3623, 1, 'AQUILINO', 'GUERRERO', 0),
(215, 2845, 1, 'JORGE ENRIQUE ', 'RENGIFO PALADINO', 0),
(216, 2219, 1, 'CARLOS ALBERTO ', 'SALDAÑA LASSO ', 0),
(217, 345, 1, 'YADUA JARIF', 'MORENO VASQUEZ', 0),
(218, 2423, 1, 'CARLOS ALBERTO', 'PAREDES GESTO', 0),
(219, 869, 1, 'JESUS ALEJANDRO ', 'PERALTA CISNEROS', 0),
(220, 3409, 1, 'MIGUEL ANGEL ', 'TEJADA MAGUE', 0),
(221, 1878, 1, 'ROBERTO', 'VERGARA', 0),
(222, 1098, 1, 'CARLOS HUMBERTO', 'DOMINGUEZ CARVAJAL', 0),
(223, 878, 1, 'LUIS ANTONIO', 'CASTILLO MARTINEZ', 0),
(224, 924, 1, 'GABRIEL OTHON', 'MARTINEZ POVEDA', 0),
(225, 2173, 1, 'OSWAR OSCAR', 'ATENCIO PEREZ', 0),
(226, 1364, 1, 'FRANCISCO JAVIER ', 'CHAVEZ ARAYA ', 0),
(227, 2171, 1, 'LUIS ENRIQUE', 'GUTIERREZ BARRIA', 0),
(228, 806, 1, 'EDWIN ABDIEL ', 'SERRANO SERRANO', 0),
(229, 1876, 1, 'PEDRO ANTONIO', 'VALENCIA MURILLO', 0),
(230, 2200, 1, 'RAFAEL ENRIQUE', 'GONZALEZ CUBILLA', 0),
(231, 868, 1, 'DIEGO ANTONIO', 'CANO LOPEZ', 0),
(232, 923, 1, 'JORGE AMETH ', 'BEITIA DÍAZ', 0),
(233, 925, 1, 'EDGARDO ULISES', 'CORDOBA HERNANDEZ', 0),
(234, 2491, 1, 'NEFTALY SAUL', 'ABREGO AROSEMENA', 0),
(235, 677, 1, 'GLEISTE ALBERTO', 'LASSO LASSO', 0),
(236, 2174, 1, 'JAVIER JESUS', 'HINESTROZA VALSIN', 0),
(237, 43, 1, 'ERICK ARIEL ', 'MARQUEZ TORRES', 0),
(238, 1252, 1, 'MARCOS JOSE', 'PEÑA MELGAREJO', 0),
(239, 2673, 1, 'KATHERINE JOAN', 'VALLARINO VILLARREAL', 0),
(240, 867, 1, 'RICARDO LUIS ', 'ATENCIO TUÑON', 0),
(241, 874, 1, 'BLADIMIR ABDIEL', 'BLAITRY MOSQUERA', 0),
(242, 3721, 1, 'RUDY MAGDALENA', 'RODRIGUEZ POVEDA', 0),
(243, 2170, 1, 'RICARDO ', 'CHACON', 0),
(244, 2047, 1, 'CESAR A.', 'MIRANDA S.', 0),
(245, 4051, 1, 'MAXIMO ', 'CARRIZO SALAZAR ', 0),
(246, 2790, 1, 'JOEL ELIAS', 'LEON PINTO', 0),
(247, 2163, 1, 'EDBERG ELIECER', 'RODRIGUEZ JARAMILLO', 0),
(248, 3441, 1, 'ALEJANDRO URBANO', 'BELLIDO LASSO', 0),
(249, 3557, 1, 'DONICA DONALLYS', 'PARKER BUSTOS', 0),
(250, 4587, 1, 'ASTRID ALANA', 'AIZPURUA LIÑAN', 0),
(251, 663, 1, 'VICTOR MATIAS', 'ANGULO HERRERA', 0),
(252, 2208, 1, 'ROMELS', 'MARTINEZ P.', 0),
(253, 2217, 1, 'EDWIN ARTURO', 'ROJAS CAMPOS', 0),
(254, 3438, 1, 'SERGIO', 'ROJAS ', 0),
(255, 4276, 1, 'GUSTAVO ADOLFO ', 'MEDINA SANCHEZ ', 0),
(256, 778, 1, 'BELSIO', 'GONZALEZ', 0),
(257, 4627, 1, 'JACINTO', 'GOMEZ', 0),
(258, 2835, 1, 'AGUSTIN', 'PINZON AGUILAR', 0),
(259, 1729, 1, 'JEREMIAS GUILLERMO ', 'URIETA QUINTERO', 0),
(260, 629, 1, 'BELISARIO', 'BONINI', 0),
(261, 4628, 1, 'JORGE', 'GONZALEZ', 0),
(262, 608, 1, 'ORIEL IVAN', 'REYES HERRERA', 0),
(263, 542, 1, 'CANDIDO ', 'CONCEPCION VASQUEZ ', 0),
(264, 548, 1, 'FRANKLIN', 'GARCIA', 0),
(265, 1287, 1, 'FRANCISCO ARIEL', 'QUINTERO AGUDO', 0),
(266, 1265, 1, 'MELVIN ISAAC', 'BATISTA GONZALEZ', 0),
(267, 864, 1, 'RAUL', 'CRUZ', 0),
(268, 921, 1, 'ERNALDO ABEL', 'CARRASCO MONTILLA', 0),
(269, 1282, 1, 'AHMED', 'BARSALLO SANTOS ', 0),
(270, 1228, 1, 'ROGER RODRIGO ', 'LUQUE GUEVARA', 0),
(271, 2172, 1, 'FRANKLIN ORLANDO', 'MOSQUERA VERGARA', 0),
(272, 876, 1, 'LLOYD ABID', 'NUñEZ', 0),
(273, 679, 1, 'EDIE  EDITH', 'RAMOS  CAMPOS', 0),
(274, 408, 1, 'ROY ANEL ', 'FAJARDO FAJARDO ', 0),
(275, 1251, 1, 'FRANCISCO ', 'SAMANIEGO VILLALOBOS ', 0),
(276, 3437, 1, 'OLMEDO ', 'ARENAS MELA ', 0),
(277, 2434, 1, 'EDWIN JOSE', 'GUEVARA GONZALEZ', 0),
(278, 3415, 1, 'EDUARDO ALEXANDER', 'BALLESTEROS MARTINEZ', 0),
(279, 363, 1, 'ANELDO', 'MONTERO PEREZ', 0),
(280, 3067, 1, 'OMAR ENRIQUE ', 'GARCIA AMORES', 0),
(281, 2313, 1, 'ARTURO', 'NAVAS MARTINEZ', 0),
(282, 1244, 1, 'CIRILO EFREN', 'BERMUDEZ HERRERA', 0),
(283, 863, 1, 'MARIBEL EVELYN', 'CHAVEZ MICHEL', 0),
(284, 791, 1, 'RAFAEL ARNOLDO ', 'JURADO LOPEZ', 0),
(285, 2647, 1, 'ANTHONY SALVATTORE', 'CARDOZE AGRIO', 0),
(286, 239, 1, 'EDUARDO ', 'CERRUD QUINTERO', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aeronave`
--
ALTER TABLE `aeronave`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detalle_mision`
--
ALTER TABLE `detalle_mision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entidades`
--
ALTER TABLE `entidades`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funciones`
--
ALTER TABLE `funciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manifest`
--
ALTER TABLE `manifest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mision`
--
ALTER TABLE `mision`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `operativo`
--
ALTER TABLE `operativo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status_mision`
--
ALTER TABLE `status_mision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_mision`
--
ALTER TABLE `tipo_mision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tripulacion`
--
ALTER TABLE `tripulacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tripulantes`
--
ALTER TABLE `tripulantes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aeronave`
--
ALTER TABLE `aeronave`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- AUTO_INCREMENT for table `detalle_mision`
--
ALTER TABLE `detalle_mision`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=459;

--
-- AUTO_INCREMENT for table `entidades`
--
ALTER TABLE `entidades`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `funciones`
--
ALTER TABLE `funciones`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `manifest`
--
ALTER TABLE `manifest`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `mision`
--
ALTER TABLE `mision`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT for table `operativo`
--
ALTER TABLE `operativo`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `status_mision`
--
ALTER TABLE `status_mision`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `tipo_mision`
--
ALTER TABLE `tipo_mision`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `tripulacion`
--
ALTER TABLE `tripulacion`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT for table `tripulantes`
--
ALTER TABLE `tripulantes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=287;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

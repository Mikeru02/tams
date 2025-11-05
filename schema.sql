DROP DATABASE IF EXISTS tams_db;
CREATE DATABASE tams_db;

USE tams_db;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `fullname` varchar(255) NOT NULL,
    `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `Events`;
CREATE TABLE `Events` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `date` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `Students`;
CREATE TABLE `Students` (
    `id` int NOT NULL,
    `csims_num` int NOT NULL,
    `fullname` varchar(255) NOT NULL,
    `course` varchar(255) NOT NULL,
    `year_level` varchar(10) NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `csims_num`(`csims_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `Attendance`;
CREATE TABLE `Attendance` (
    `id` int NOT NULL AUTO_INCREMENT,
    `student_id` int NOT NULL,
    `event_id` int NOT NULL,
    `time_in` datetime DEFAULT NULL,
    `time_out` datetime DEFAULT NULL,
    `status` ENUM('present', 'absent', 'late') DEFAULT 'present',
    PRIMARY KEY (`id`),
    FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`event_id`) REFERENCES `Events`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
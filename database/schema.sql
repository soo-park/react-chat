-- MySQL

CREATE TABLE `room` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `account` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `room` INTEGER NOT NULL
);

CREATE INDEX `idx_account__room` ON `account` (`room`);

ALTER TABLE `account` ADD CONSTRAINT `fk_account__room` FOREIGN KEY (`room`) REFERENCES `room` (`id`);

CREATE TABLE `message` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `chat` VARCHAR(255) NOT NULL,
  `time` VARCHAR(255) NOT NULL,
  `room` INTEGER NOT NULL,
  `account` INTEGER NOT NULL
);

CREATE INDEX `idx_message__account` ON `message` (`account`);

CREATE INDEX `idx_message__room` ON `message` (`room`);

ALTER TABLE `message` ADD CONSTRAINT `fk_message__account` FOREIGN KEY (`account`) REFERENCES `account` (`id`);

ALTER TABLE `message` ADD CONSTRAINT `fk_message__room` FOREIGN KEY (`room`) REFERENCES `room` (`id`)
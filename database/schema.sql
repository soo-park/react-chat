-- psql -f schema.sql

DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

\c chat;

CREATE TABLE "account" (
  "id" SERIAL CONSTRAINT "pk_account" PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE "room" (
  "id" SERIAL CONSTRAINT "pk_room" PRIMARY KEY,
  "roomname" TEXT NOT NULL
);

CREATE TABLE "message" (
  "id" SERIAL CONSTRAINT "pk_message" PRIMARY KEY,
  "chat" TEXT NOT NULL,
  "account" INTEGER NOT NULL,
  "room" INTEGER NOT NULL
);

CREATE INDEX "idx_message__account" ON "message" ("account");

CREATE INDEX "idx_message__room" ON "message" ("room");

ALTER TABLE "message" ADD CONSTRAINT "fk_message__account" FOREIGN KEY ("account") REFERENCES "account" ("id");

ALTER TABLE "message" ADD CONSTRAINT "fk_message__room" FOREIGN KEY ("room") REFERENCES "room" ("id");
/*
  Warnings:

  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `playing_with_neon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_author_id_fkey";

-- DropTable
DROP TABLE "authors";

-- DropTable
DROP TABLE "books";

-- DropTable
DROP TABLE "playing_with_neon";

-- CreateTable
CREATE TABLE "Tarefas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "custo" DOUBLE PRECISION NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "ordemApresentacao" INTEGER NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_ordemApresentacao_key" ON "Tarefas"("ordemApresentacao");

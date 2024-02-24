/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Prodect` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Prodect_id_belongsToId_key" ON "Prodect"("id", "belongsToId");

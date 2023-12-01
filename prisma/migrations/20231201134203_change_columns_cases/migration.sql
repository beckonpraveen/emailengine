/*
  Warnings:

  - You are about to drop the column `stateCountConnected` on the `iad` table. All the data in the column will be lost.
  - You are about to drop the column `stateCountSyncing` on the `iad` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `iad` DROP COLUMN `stateCountConnected`,
    DROP COLUMN `stateCountSyncing`,
    ADD COLUMN `statecountconnected` VARCHAR(191) NULL,
    ADD COLUMN `statecountsyncing` VARCHAR(191) NULL;

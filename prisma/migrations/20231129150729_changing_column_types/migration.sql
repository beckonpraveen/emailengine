-- AlterTable
ALTER TABLE `iad` MODIFY `stateCountConnected` VARCHAR(191) NULL,
    MODIFY `stateCountAuthenticationError` VARCHAR(191) NULL,
    MODIFY `stateCountConnectError` VARCHAR(191) NULL,
    MODIFY `stateCountSyncing` VARCHAR(191) NULL,
    MODIFY `listRegistry` VARCHAR(191) NULL;

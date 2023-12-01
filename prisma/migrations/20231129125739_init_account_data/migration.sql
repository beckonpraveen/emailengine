-- CreateTable
CREATE TABLE `iad` (
    `id` VARCHAR(191) NOT NULL,
    `account` VARCHAR(191) NULL,
    `sync` DATETIME(3) NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `stateCountConnected` INTEGER NULL,
    `notifyFrom` DATETIME(3) NULL,
    `oauth2` JSON NULL,
    `imapServerInfo` JSON NULL,
    `state` VARCHAR(191) NULL,
    `stateCountAuthenticationError` INTEGER NULL,
    `stateCountConnectError` INTEGER NULL,
    `lastErrorState` JSON NULL,
    `stateCountSyncing` INTEGER NULL,
    `listRegistry` INTEGER NULL,
    `copy` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

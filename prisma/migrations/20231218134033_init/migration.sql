-- CreateTable
CREATE TABLE `iad` (
    `id` VARCHAR(191) NOT NULL,
    `account` VARCHAR(191) NULL,
    `sync` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `statecountconnected` VARCHAR(191) NULL,
    `notifyFrom` VARCHAR(191) NULL,
    `syncFrom` VARCHAR(191) NULL,
    `oauth2` JSON NULL,
    `imapServerInfo` JSON NULL,
    `state` VARCHAR(191) NULL,
    `stateCountAuthenticationError` VARCHAR(191) NULL,
    `stateCountConnectError` VARCHAR(191) NULL,
    `lastErrorState` JSON NULL,
    `statecountsyncing` VARCHAR(191) NULL,
    `listRegistry` VARCHAR(191) NULL,
    `copy` VARCHAR(191) NULL,
    `tz` VARCHAR(191) NULL,
    `smtp` JSON NULL,
    `imap` JSON NULL,
    `proxy` VARCHAR(191) NULL,
    `smtpEhloName` VARCHAR(191) NULL,
    `path` VARCHAR(191) NULL,
    `webhooks` VARCHAR(191) NULL,
    `webhookErrorFlag` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iat` (
    `id` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NULL,
    `account` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

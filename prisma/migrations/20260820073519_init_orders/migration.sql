-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tracking_number` VARCHAR(191) NOT NULL,
    `sender_name` VARCHAR(191) NOT NULL,
    `recipient_name` VARCHAR(191) NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `destination` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'IN_TRANSIT', 'DELIVERED', 'CANCELED') NOT NULL DEFAULT 'PENDING',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `orders_tracking_number_key`(`tracking_number`),
    INDEX `orders_status_idx`(`status`),
    INDEX `orders_sender_name_idx`(`sender_name`),
    INDEX `orders_recipient_name_idx`(`recipient_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - Added the required column `update_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "updated_at",
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

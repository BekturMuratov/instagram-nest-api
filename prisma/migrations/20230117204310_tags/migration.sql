-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_photos_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_stories_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_videos_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tags_id" INTEGER,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "followers" DROP NOT NULL,
ALTER COLUMN "following" DROP NOT NULL,
ALTER COLUMN "photos_id" DROP NOT NULL,
ALTER COLUMN "videos_id" DROP NOT NULL,
ALTER COLUMN "stories_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tagname" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_tagname_key" ON "Tags"("tagname");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_photos_id_fkey" FOREIGN KEY ("photos_id") REFERENCES "Photos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_videos_id_fkey" FOREIGN KEY ("videos_id") REFERENCES "Videos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_stories_id_fkey" FOREIGN KEY ("stories_id") REFERENCES "Stories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tags_id_fkey" FOREIGN KEY ("tags_id") REFERENCES "Tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

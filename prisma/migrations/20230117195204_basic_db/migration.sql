-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "photos_id" INTEGER NOT NULL,
    "videos_id" INTEGER NOT NULL,
    "stories_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "photo_name" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" SERIAL NOT NULL,
    "video_name" TEXT NOT NULL,

    CONSTRAINT "Videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stories" (
    "id" SERIAL NOT NULL,
    "stories" TEXT NOT NULL,

    CONSTRAINT "Stories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_photos_id_key" ON "User"("photos_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_videos_id_key" ON "User"("videos_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_stories_id_key" ON "User"("stories_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_photos_id_fkey" FOREIGN KEY ("photos_id") REFERENCES "Photos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_videos_id_fkey" FOREIGN KEY ("videos_id") REFERENCES "Videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_stories_id_fkey" FOREIGN KEY ("stories_id") REFERENCES "Stories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

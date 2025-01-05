-- CreateTable
CREATE TABLE "BetaAccess" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "betaAccess" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BetaAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BetaAccess_email_key" ON "BetaAccess"("email");

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "data_do_pedido" DATETIME,
    "status_do_pedido" TEXT NOT NULL,
    "id_produto" INTEGER NOT NULL,
    CONSTRAINT "Pedido_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("data_do_pedido", "id", "id_funcionario", "id_produto", "status_do_pedido") SELECT "data_do_pedido", "id", "id_funcionario", "id_produto", "status_do_pedido" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

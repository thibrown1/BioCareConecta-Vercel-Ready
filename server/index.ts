1 import express from "express";
2 import { createServer } from "http"; // Essa importação pode ser removida se não for mais usada
3 import path from "path";
4 import { fileURLToPath } from "url";
5
6 const _filename = fileURLToPath(import.meta.url );
7 const _dirname = path.dirname(_filename);
8
9 const app = express(); // ADICIONADO: Criação do app
10
11 // Serve static files from dist/public in production
12 const staticPath =
13     process.env.NODE_ENV === "production"
14         ? path.resolve(_dirname, "public")
15         : path.resolve(_dirname, "..", "dist", "public");
16
17 app.use(express.static(staticPath));
18
19 // Handle client-side routing - serve index.html for all routes
20 app.get("*", (_req, res) => {
21     res.sendFile(path.join(staticPath, "index.html"));
22 });
23
24 export default app; // ADICIONADO: Exportação para a Vercel

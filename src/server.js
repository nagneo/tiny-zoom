 import express from "express";

 const app = express();

 // 해당 폴더에서 확장자가 pug 인걸 고르겠다는 의민
 app.set("view engine", "pug") 
 app.set("views", __dirname + "/views"); // 폴더 경로 지정
 app.use("/public", express.static(__dirname + "/public"))
 app.get("/", (req, res) => res.render("home"));
 app.get("/*", (req,res) => res.redirect("/"));

 const handleListen = () => console.log(`Listening on http://localhost:3000`);
 app.listen(3000, handleListen);
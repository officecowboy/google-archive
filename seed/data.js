import db from "../db/connection.js";
import Article from "../models/article.js";
import articles from "./article.json" assert { type: "json" };

const insertData = async () => {

  db.dropDatabase();

  await Article.insertMany(articles);

  db.close();
};

insertData();
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

// export async function getMeal(slug) {
//   await new Promise((resolve) => setTimeout(resolve, 5000));

//   // throw new Error("Loading meal failed");
//   // return db.prepare("SELECT * FROM meal WHERE slug=" + slug );   // we are open ourself as a sql injection attacks
//   return db.prepare("SELECT * FROM meal WHERE slug = ?").get(slug);
// }

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // const slug = slugify(meal.title, { lower: true});
  // const instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const newImageName = `${meal.slug}.${extension}`;

  // fs.renameSync(meal.image, `static/images/${newImageName}`);
  const stream = fs.createWriteStream(`public/images/${newImageName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(`Saving image failed!`);
    }
  });

  meal.image = `/images/${newImageName}`;

  db.prepare(
    `INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email, creator_number, address)
    VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @creator_number,
         @address
      )
    `
  ).run(meal);
}

// VALUES (?,?,?,?,?,?,?,?,?)

import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function updateData(target: string) {
  const { data } = require(`./sources/${target}.json`);

  try {
    let createdElement = "";
    for (const element of data) {
      const findIfElementExist = await prisma.language.findUnique({
        where: { name: element.name },
      });
      if (!findIfElementExist) {
        await prisma.language.create({ data: element });
        createdElement += element.name + ", ";
      }
    }

    if (createdElement.length > 0) {
      console.log(`Created ${createdElement} successfully`);
    } else {
      console.log("No new elements to create");
    }
  } catch (err) {
    console.log(err);
  }
}

updateData("languages");

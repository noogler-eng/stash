import { PrismaClient } from "@prisma/client";

// generating the new prisma client
// npx prisma generate
// on every query it will show both query and error if occour
// it helps to execte the query, in behind actually there is sql queries
const prisma = new PrismaClient({log: ['query', 'error']});
export default prisma;
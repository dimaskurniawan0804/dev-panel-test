import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Main function to execute the seeding process
async function main() {
  try {
    // Uncomment the lines below when you want to insert data into the database
    await prisma.user.createMany({
      data: [
        { email: 'yaha@mail.com', name: 'Udin' },
        { email: 'yahaBudi@mail.com', name: 'Budi' },
      ],
    });

    await prisma.post.createMany({
      data: [
        { title: 'Post 1', content: 'Content 1', authorId: 1 },
        { title: 'Post 2', content: 'Content 2', authorId: 2 },
      ],
    });
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error:', error);
  } finally {
    // Ensure that the Prisma client is properly disconnected
    await prisma.$disconnect();
  }
}

// Execute the main function
main();

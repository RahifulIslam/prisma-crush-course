import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    // prisma queries
    // // Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Rahiful Islam',
    //         email: 'rahifulislam@gmail.com',
    //     },
    // });
    // console.log("Created users are: ",user)

    // // Get all the users
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true,
    //     },
    // });
    // console.log("Showed all users:", users)

    // // Create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Rahifuls first article',
    //         body: 'this is Rahifuls first article',
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    // Get all articles
    const articles = await prisma.article.findMany();
    console.log(articles);

    // // Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sohel Rana',
    //         email: 'sohel@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Sohels first article',
    //                 body: 'This is sohels first article'
    //             }
    //         }
    //     }
    // })
    // console.log(user);

    // // Create another article
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Sample article',
    //         body: 'This is a sample article',
    //         author: {
    //             connect: {
    //                 id: 2,
    //             }
    //         }
    //     }
    // })
    // console.log(article);

    // // Loop over Sohels Article
    // users.forEach((user)=>{
    //     console.log(`User: ${user.name}, Email: ${user.email}`);
    //     console.log('Articles:')
    //     user.articles.forEach((article)=>{
    //         console.log(`- Title: ${article.title}, Body: ${article.body}`)
    //     });
    //     console.log('/n')
    // });

    // // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1,
    //     },
    //     data: {
    //         name: 'Rahiful Islam Jr'
    //     },
    // });
    // console.log(user);

    // // Remove data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    // console.log(article)

}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})
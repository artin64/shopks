import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const buyer = await prisma.user.upsert({
    where: { email: 'buyer@hopify.ks' },
    update: {},
    create: { email: 'buyer@hopify.ks', password: 'hashed-dev', fullName: 'Demo Buyer', role: 'buyer' }
  });

  const vendorUser = await prisma.user.upsert({
    where: { email: 'vendor@hopify.ks' },
    update: {},
    create: { email: 'vendor@hopify.ks', password: 'hashed-dev', fullName: 'Demo Vendor', role: 'vendor' }
  });

  const vendor = await prisma.vendor.upsert({
    where: { slug: 'demo-vendor' },
    update: {},
    create: { ownerId: vendorUser.id, name: 'Demo Vendor', slug: 'demo-vendor', isApproved: true }
  });

  const category = await prisma.category.upsert({
    where: { slug: 'home-goods' },
    update: {},
    create: { name: 'Home Goods', slug: 'home-goods' }
  });

  const product = await prisma.product.create({
    data: {
      vendorId: vendor.id,
      categoryId: category.id,
      name: 'Handmade Rug',
      description: 'Seed product',
      price: 85,
      stock: 10
    }
  });

  await prisma.wishlist.create({ data: { userId: buyer.id, productId: product.id } });
  console.log('Seed complete');
}

main().finally(async () => prisma.$disconnect());

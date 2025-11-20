import { ListingStatus, PrismaClient, PropertyType } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Icumbi database...');

  const atlanta = await prisma.city.upsert({
    where: { slug: 'atlanta-ga' },
    update: {},
    create: {
      name: 'Atlanta',
      slug: 'atlanta-ga',
      state: 'GA',
      latitude: 33.749,
      longitude: -84.388,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'demo@icumbi.com' },
    update: {},
    create: {
      email: 'demo@icumbi.com',
      name: 'Demo Buyer',
      hashedPassword: null,
    },
  });

  await prisma.listing.deleteMany();

  const listings = Array.from({ length: 5 }).map(() => ({
    title: `${faker.location.street()} Residence`,
    description: faker.lorem.paragraphs(2),
    status: ListingStatus.PUBLISHED,
    propertyType: PropertyType.HOUSE,
    price: faker.number.int({ min: 350_000, max: 1_250_000 }),
    bedrooms: faker.number.int({ min: 2, max: 6 }),
    bathrooms: faker.number.int({ min: 2, max: 5 }),
    squareFeet: faker.number.int({ min: 1400, max: 4200 }),
    lotSize: faker.number.int({ min: 3000, max: 12000 }),
    yearBuilt: faker.number.int({ min: 1990, max: 2024 }),
    addressLine1: faker.location.streetAddress(),
    postalCode: faker.location.zipCode(),
    latitude: faker.number.float({ min: 33.70, max: 33.85, precision: 0.000001 }),
    longitude: faker.number.float({ min: -84.45, max: -84.30, precision: 0.000001 }),
    cityId: atlanta.id,
    ownerId: user.id,
    tags: ['open-house', 'walkable'],
    media: {
      create: [
        {
          url: `https://images.unsplash.com/${faker.string.alphanumeric({ length: 10 })}`,
          alt: 'Exterior',
          order: 0,
        },
      ],
    },
  }));

  await prisma.$transaction(listings.map((data) => prisma.listing.create({ data })));

  console.log('✅ Seed complete');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

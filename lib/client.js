//hooking up sanity to our project

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'b9anuhqe',
    dataset: 'production',
    apiVersion: '2022-06-13',
    useCdn: 'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

//to get image url

export const urlFor = (source) => builder.image(source);
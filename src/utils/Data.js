const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL;
const GITHUB_USERNAME = "fmadrian";

export const EXTERNAL_URLS = {
    github: `https://www.github.com/${GITHUB_USERNAME}`,
    github_repositories: {
        all: `https://github.com/${GITHUB_USERNAME}?tab=repositories`,
        budget: `https://github.com/${GITHUB_USERNAME}/budget`,
        reslide: `https://github.com/${GITHUB_USERNAME}/reslide`,
        transferplaylists: `https://github.com/${GITHUB_USERNAME}/transfer-playlists`,
        auctions: `https://github.com/${GITHUB_USERNAME}/auctions`,
    },
    repo: `https://www.github.com/${GITHUB_USERNAME}/mywebsite`,
    website: WEBSITE_URL,
    about: `${WEBSITE_URL}#about`,
    contact: `${WEBSITE_URL}#contact`,
    linkedin: 'https://www.linkedin.com/in/adrianfallasmarin',
    email: 'mailito:fallasadrian3@gmail.com'
};
/**
 * Most common strings used throughout the site.
 */
export const APP_STRINGS = {
    info: {
        fullName: 'Adrián Fallas Marín'
    },
    labels: {
        projects: 'Projects',
        aboutMe: 'About me',
        contact: 'Contact',
        tools: 'Tools'
    }
};
/**
 * User project list.
 */
export const USER_PROJECTS = [
    {
        name: 'Reslide (Web point of sale)',
        description: 'Web point of sale made with Spring Boot and Angular.',
        reason: 'Web point of sale that allows its users to manage the information of clients, providers, users, products, invoices, orders to distributors.',
        link: EXTERNAL_URLS.github_repositories.reslide,
        image: '/assets/images/projects/reslide/1.webp'
    },
    {
        name: 'Auctions',
        description: 'A small microservices-based auction web application made with .NET and Next.js.',
        reason: 'Auction site that allows its user to create and place bids on car auctions.',
        link: EXTERNAL_URLS.github_repositories.auctions,
        image: '/assets/images/projects/auctions/1.webp'
    },
    {
        name: 'Transfer playlists from Spotify to YouTube',
        description: 'Tool that transfers songs from a YouTube playlist or the user likes to a Spotify playlist.',
        reason: 'Script that transfers songs from playlists or liked videos from YouTube to a Spotify playlist created using Python, the Spotify Web API, and the YouTube Data API.',
        link: EXTERNAL_URLS.github_repositories.transferplaylists,
        image: '/assets/images/projects/transfer-playlists/1.webp'
    },
    {
        name: 'Web budget manager',
        description: 'Personal budget manager created with Angular and Spring Boot.',
        reason: 'Personal budget manager that allows its users to: create and edit budgets (reports) where users can include their income and expenses, use previous reports created as templates, and compare multiple budgets (reports) and each one of their items by using a comparison table and a bar chart.',
        link: EXTERNAL_URLS.github_repositories.budget,
        image: '/assets/images/projects/budget/1.webp'
    },

]
/**
 * User's tools.
 */
export const USER_TOOLS = [
    { name: 'C#' },
    { name: 'JavaScript' },
    { name: 'Angular' },
    { name: 'Vue' },
    { name: 'Python' },
    { name: 'SQL' },
    { name: 'Java' },
];

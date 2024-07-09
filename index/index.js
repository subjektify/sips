import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export default async function index(context, options) {
    return {
        name: 'index',

        async loadContent() {
            const sipsDir = path.join(context.siteDir, 'docs', 'sips');
            const sipFiles = fs.readdirSync(sipsDir);
            const sips = sipFiles.map(file => {
                const filePath = path.join(sipsDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const { data } = matter(fileContent);
                return {
                    id: data.sip,
                    author: data.author,
                    title: data.title,
                    status: data.status,
                    type: data.type,
                };
            });
            return sips;
        },

        async contentLoaded({ content, actions }) {
            const { addRoute, createData } = actions;

            // Create the index json
            const sips = content;
            const allSips = sips;
            const metaSips = sips.filter(sip => sip.type === 'Meta');

            // Create the JSON files
            const allSipsJsonPath = await createData('sips.json', JSON.stringify(allSips));
            const metaSipsJsonPath = await createData('sips.json', JSON.stringify(metaSips));
            const sipsJsonPath = await createData('sips.json', JSON.stringify(sips));

            // Add the index route for All SIPs
            addRoute({
                path: '/all',
                component: '@site/src/components/Sips',
                modules: {
                    sips: allSipsJsonPath,
                },
                exact: true,
            });
            addRoute({
                path: '/meta',
                component: '@site/src/components/Sips',
                modules: {
                    sips: metaSipsJsonPath,
                },
                exact: true,
            });
        },
    };
}

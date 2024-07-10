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
                    created: new Date(data.created).toLocaleDateString(),
                    title: data.title,
                    status: data.status,
                    type: data.type,
                };
            });
            return sips;
        },

        async contentLoaded({ content, actions }) {
            const { addRoute, createData } = actions;
            const sipsConfig = {
                core: 'Core',
                interface: 'Interface',
                informational: 'Informational',
                meta: 'Meta',
            }

            // Create the index json
            const sips = content;

            // Create the JSON data
            const sipsJsonData = await createData('sips.json', JSON.stringify(sips));

            // Add the index route for All SIPs
            addRoute({
                path: '/all',
                component: '@site/src/components/Sips',
                modules: {
                    sips: sipsJsonData,
                },
                exact: true,
            });

            // Add the index route for each SIP category
            for (const [key, value] of Object.entries(sipsConfig)) {
                await this.addSipCategory({ content, actions, key, value });
            }
        },

        async addSipCategory({ content, actions, key, value }) {
            const { addRoute, createData } = actions;
            const sips = content.filter(sip => sip.type === value);
            const sipsJsonData = await createData(`sips-${key}.json`, JSON.stringify(sips));
            addRoute({
                path: `/${key}`,
                component: '@site/src/components/Sips',
                modules: {
                    sips: sipsJsonData,
                },
                exact: true,
            });
        },
    };
}

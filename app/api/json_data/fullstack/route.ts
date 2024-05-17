import { promises as fs } from 'fs';

export async function GET(request: Request) {

    const htmlFile = await fs.readFile(process.cwd() + '/json/frontend/html.json', 'utf8');
    const htmlData = JSON.parse(htmlFile);

    const cssFile = await fs.readFile(process.cwd() + '/json/frontend/css.json', 'utf8');
    const cssData = JSON.parse(cssFile);

    const javascriptFile = await fs.readFile(process.cwd() + '/json/frontend/javascript.json', 'utf8');
    const javascriptData = JSON.parse(javascriptFile);

    const reactFile = await fs.readFile(process.cwd() + '/json/frontend/react.json', 'utf8');
    const reactData = JSON.parse(reactFile);

    const next_js_File = await fs.readFile(process.cwd() + '/json/frontend/next_js.json', 'utf8');
    const next_js_Data = JSON.parse(next_js_File);

    const figmaFile = await fs.readFile(process.cwd() + '/json/frontend/figma.json', 'utf8');
    const figmaData = JSON.parse(figmaFile);

    const muiFile = await fs.readFile(process.cwd() + '/json/frontend/mui.json', 'utf8');
    const muiData = JSON.parse(muiFile);

    const djangoFile = await fs.readFile(process.cwd() + '/json/backend/django.json', 'utf8');
    const djangoData = JSON.parse(djangoFile);

    const postgresqlFile = await fs.readFile(process.cwd() + '/json/backend/postgresql.json', 'utf8');
    const postgresqlData = JSON.parse(postgresqlFile);

    const dockerFile = await fs.readFile(process.cwd() + '/json/backend/docker.json', 'utf8');
    const dockerData = JSON.parse(dockerFile);

    const data = htmlData.concat(cssData, javascriptData, reactData, next_js_Data, figmaData, muiData, djangoData, postgresqlData, dockerData);

    return Response.json(data);
}
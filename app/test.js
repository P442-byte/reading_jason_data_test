import { promises as fs } from 'fs';
import Link from 'next/link';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);

  return(<>
    <div>
      {data.map((d, i) => 
        <ul key={i}>
          <li><Link href={d.link}>{d.title}</Link></li>
          <br/>
        </ul>
    )}
    </div>
  </>) 
}
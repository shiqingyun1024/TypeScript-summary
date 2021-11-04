import { readFileSync,writeFileSync } from 'fs';
import { resolve } from 'path';
export function readFile (path:string):string{
    return readFileSync(resolve(__dirname,path),'utf8')
}

export function writeFile<T>(path:string,data:T):void{
    writeFileSync(resolve(__dirname,path),JSON.stringify(data))
}
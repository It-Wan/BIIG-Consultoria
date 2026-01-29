import { copyFileSync, mkdirSync, readdirSync, existsSync, statSync } from 'fs';
import { join, resolve } from 'path';

const publicDir = resolve(process.cwd(), 'public');
const outDir = resolve(process.cwd(), 'dist');

if (!existsSync(publicDir)) {
    console.warn('Pasta public não encontrada:', publicDir);
    process.exit(0);
}

if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
    console.log('Diretório dist criado:', outDir);
}

function copyRecursive(src, dest) {
    const entries = readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = join(src, entry.name);
        const destPath = join(dest, entry.name);
        
        if (entry.isDirectory()) {
            if (!existsSync(destPath)) {
                mkdirSync(destPath, { recursive: true });
            }
            copyRecursive(srcPath, destPath);
        } else {
            copyFileSync(srcPath, destPath);
            console.log('Copiado:', entry.name);
        }
    }
}

console.log('Iniciando cópia de', publicDir, 'para', outDir);
copyRecursive(publicDir, outDir);
console.log('Cópia concluída!');


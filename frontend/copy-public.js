import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obter diretório atual do arquivo (ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, 'dist');

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


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Biig Consultoria - Gestão Estratégica de Empreendimentos Imobiliários. Conectamos capital, viabilidade e execução para transformar projetos em negócios sólidos.">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Biig Consultoria - Gestão Estratégica de Empreendimentos Imobiliários</title>
    <link rel="icon" href="<?php echo e(asset('img/logo.jpeg')); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    <?php
        // Detectar se Vite está rodando (arquivo hot existe quando yarn dev está ativo)
        $viteRunning = file_exists(public_path('hot'));
        
        if ($viteRunning) {
            // Modo desenvolvimento - usar servidor Vite
            $vitePort = file_get_contents(public_path('hot'));
            $viteUrl = trim($vitePort) ?: 'http://localhost:5173';
            echo '<script type="module" src="' . $viteUrl . '/@vite/client"></script>' . "\n";
            echo '<script type="module" src="' . $viteUrl . '/resources/js/app.js"></script>' . "\n";
        } else {
            // Modo produção - usar assets compilados
            try {
                $manifestPath = public_path('build/.vite/manifest.json');
                if (file_exists($manifestPath)) {
                    $manifest = json_decode(file_get_contents($manifestPath), true);
                    $appJs = $manifest['resources/js/app.js']['file'] ?? 'assets/app.js';
                    $appCss = $manifest['resources/js/app.js']['css'][0] ?? null;
                    if ($appCss) {
                        echo '<link rel="stylesheet" href="' . asset('build/' . $appCss) . '">' . "\n";
                    }
                    echo '<script type="module" src="' . asset('build/' . $appJs) . '"></script>' . "\n";
                }
            } catch (\Exception $e) {
                // Fallback
            }
        }
    ?>
</head>
<body>
    <div id="app"></div>
</body>
</html>

<?php /**PATH /home/gabyrib/Documentos/BIIG - Consultoria/backend/resources/views/app.blade.php ENDPATH**/ ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <meta name="description" content="Biig Consultoria - Gestão Estratégica de Empreendimentos Imobiliários. Conectamos capital, viabilidade e execução para transformar projetos em negócios sólidos.">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Biig Consultoria - Gestão Estratégica de Empreendimentos Imobiliários</title>
    <link rel="icon" href="{{ asset('img/logo.jpeg') }}">
    
    <!-- Resource Hints para melhor performance -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Preload de recursos críticos -->
    @if(file_exists(public_path('img/biig-poster.jpg')))
    <link rel="preload" href="{{ asset('img/biig-poster.jpg') }}" as="image" type="image/jpeg">
    @endif
    @if(request()->is('sobre') && file_exists(public_path('img/sobre1.jpg')))
    <link rel="preload" href="{{ asset('img/sobre1.jpg') }}" as="image" type="image/jpeg" fetchpriority="high">
    @endif
    
    <!-- Fontes com display=swap para melhor LCP -->
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    @php
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
    @endphp
</head>
<body>
    <div id="app"></div>
</body>
</html>


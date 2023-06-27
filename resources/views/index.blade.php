<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>TP PHP</title>
</head>
<body>
<header>
    <div class="header">
        <h1>GraphFinder</h1>
        <form method="GET" action="{{ route('recherche') }}">
            <label for="theme">Thématique :</label>
            <input type="text" id="theme" name="theme" required>
            <button type="submit">Rechercher</button>
        </form>
    </div>
</header>
<div class="container">
    @if (isset($images))
        <div class="images">
            @foreach($images as $image)
                <img src="{{ $image }}">
            @endforeach
        </div>
    @endif
    @if(!isset($_GET["theme"]))
        <div class="images">
            @foreach($default as $d)
                <img src="{{ $d  }}">
            @endforeach
        </div>
    @endif
</div>
<script>
    var themeInput = document.getElementById('theme');

    themeInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    });
</script>
</body>
</html>

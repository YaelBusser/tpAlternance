<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use function Webmozart\Assert\Tests\StaticAnalysis\length;

class RechercheController extends Controller
{
    public function default(){
        $default = [];
        $api = "https://pixabay.com/api/?q=nature&per_page=99&key=37894372-c0837f7cd2c6cedbc821bb625";
        $response = file_get_contents($api);
        $data = json_decode($response, true);
        for ($i = 0; $i < 9; $i++) {
            array_push($default, $data["hits"][$i]["largeImageURL"]);
        }
        return view('index', [
            'default' => $default,
        ]);
    }
    public function search(Request $request)
    {
        $theme = $request->input('theme');
        // API
        $images = [];
        $type = [];
        $tags = [];
        $views = [];
        $download = [];
        $likes = [];
        $comments = [];
        $api = "https://pixabay.com/api/?q=" . $theme . "&per_page=81&key=37894372-c0837f7cd2c6cedbc821bb625";
        $response = file_get_contents($api);
        $data = json_decode($response, true);
        for ($i = 0; $i < 9; $i++) {
            array_push($images, $data["hits"][$i]["largeImageURL"]);
            array_push($type, $data["hits"][$i]["type"]);
            array_push($tags, $data["hits"][$i]["tags"]);
            array_push($views, $data["hits"][$i]["views"]);
            array_push($download, $data["hits"][$i]["downloads"]);
            array_push($likes, $data["hits"][$i]["likes"]);
            array_push($comments, $data["hits"][$i]["comments"]);
        }
        return view('index', [
            'images' => $images,
            'type' => $type,
            'tags' => $tags,
            'views' => $views,
            'download' => $download,
            'likes' => $likes,
            'comments' => $comments,
        ]);
    }
}



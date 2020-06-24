<?php


$api = new riotapi('euw');
$api_cache = new riotapi('euw', new FileSystemCache('api/cache/'));

$api_username = "Bloodboby";



$r = [

    "summonerName" => $api->getSummonerByName($api_username)[$api_username]['name'],
    "summonerLevel" => $api->getSummonerByName($api_username)[$api_username]['level'],

];

$test = $api->getStats($r['summonerId']);

preview($test);
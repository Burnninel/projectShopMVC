<?php

/**
*
* Helper que serve para adicionar a url em um arquivo ou link.
*
* @author Code Universe
* 
**/
class URLHelper
{

	public function getURL($file = null)
	{

		$url = (ENV === 'dev') ? LOCAL_URL : '/';
		$url = rtrim($url, '/');

		if(is_null($file)){
			return $url;
		}
 
		$file = ltrim($file, '/');
		$file = $url . '/' . $file;

		return $file;

	}

	public function getLocation()
	{
		
		$url = $_SERVER['REQUEST_URI'];

		$path = LOCAL_URL;

		// if(ENV !== 'local' || ENV !== 'prod'){

		// 	$url = str_replace(array($path, "/"), "", $url);


		// }	

		$url = ltrim($url, '/');

		

		if(strstr($url, '/')){

			$url = explode("/", $url);
			$path = $url[1];
			return $path;

		}	
		return $url;

	}

	public function getLocationAdmin()
	{
		
		$url = $_SERVER['REQUEST_URI'];

		$path = LOCAL_URL;

		if(ENV !== 'local' || ENV !== 'prod'){

			$url = str_replace(array($path, "/"), "", $url);


		}	


		$url = ltrim($url, '/');

		if(strstr($url, '/')){
			
			$url = explode("/", $url);
			$path = $url[0];
			return $path;

		}	
		return $url;

	}

}
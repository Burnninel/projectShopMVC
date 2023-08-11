<?php

/**
*
* Controller do site.
*
* @author Code Universe
*
**/
class HomeController extends Controller
{

	public function index() {		

		$this->view('site/home/index.php');

	}

}
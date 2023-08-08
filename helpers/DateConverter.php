<?php

/**
*
* Classe que converte uma data para o formato do banco de dados.
*
* @author Willen L. Carneiro
*
**/
class DateConverter
{

	public function DateToMysql($date)
	{

		if(empty($date)){
			return null;
		}
	
		$date = explode('/', $date);
		$date = $date[2] . '-' . $date[1] . '-' . $date[0];

		return $date;
		
	}

	public function DateToUser($date)
	{

		if(empty($date)){
			return null;
		}

		$date = explode('-', $date);
		$date = $date[2] . '/' . $date[1] . '/' . $date[0];

		return $date;
		
	}

	public function DateTimeToUser($date)
	{

		if(empty($date)){
			return null;
		}

		$datetime 	= explode(' ', $date);
		$date 	  	= explode('-', $datetime[0]);
		$date 		= $date[2] . '/' . $date[1] . '/' . $date[0] . " " . $datetime[1];

		return $date;
		
	}

	public function DateTimeToMySql($date)
	{

		if(empty($date)){
			return null;
		}

		$datetime 	= explode(' ', $date);
		$date 	  	= explode('/', $datetime[0]);
		$date 		= $date[2] . '-' . $date[1] . '-' . $date[0] . " " . $datetime[1];

		return $date;
		
	}

	public function DaysBetween($dateStart, $dateFinish){

		$Start 		= new DateTime($dateStart);
		$Finish 	= new DateTime($dateFinish);
		$difference = $Start->diff($Finish);
		$difference = 	   $difference->y.' ano(s), ' 
		                   .$difference->m.' mes(es), ' 
		                   .$difference->d.' dia(s)';

		return $difference;

	}

}
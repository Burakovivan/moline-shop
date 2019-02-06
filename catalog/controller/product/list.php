<?php
class ControllerProductList extends Controller {
	private $error = array();

	public function index($data) {
		// echo(json_encode($data['products']));
		$data['grid_size'] = isset($data['grid_size'])? $data['grid_size']: 4;
		// var_dump($data['grid_size']);
		switch ($data['grid_size']) {
			case 3:
			$data['grid_size'] = "col-md-4 col-xs-6 col-sm-3";
			break;
			case 4:
			$data['grid_size'] = "col-md-3 col-xs-6 col-sm-3";
			break;
			default:
			$data['grid_size'] = "col-md-3 col-xs-6 col-sm-3";
			break;
		}
		// var_dump($data['grid_size']);
		return $this->load->view('product/list', $data);
		
		$this->load->language('product/product');
	}

}

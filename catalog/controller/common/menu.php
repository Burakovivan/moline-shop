<?php
class ControllerCommonMenu extends Controller {
	public function index() {
		$this->load->language('common/menu');

		// Menu
		$this->load->model('catalog/category');

		$this->load->model('catalog/product');

		$data['categories'] = array();

		$categories = $this->model_catalog_category->getCategories(0);

		foreach ($categories as $category) {
			// if ($category['top']) {
				// Level 2
				$children_data = array();

				$children = $this->model_catalog_category->getCategories($category['category_id']);

				foreach ($children as $child) {
					$filter_data = array(
						'filter_category_id'  => $child['category_id'],
						'filter_sub_category' => true
					);

					$children_data[] = array(
						'name'  => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
						'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id']),
						'image'	   => $child['image'],
					);
				}

				// Level 1
				$data['categories'][] = array(
					'name'     => $category['name'],
					'children' => $children_data,
					'column'   => $category['column'] ? $category['column'] : 1,
					'href'     => $this->url->link('product/category', 'path=' . $category['category_id']),
					'image'	   => $category['image'],
				);
			// }
		}
		
		if ($this->request->server['HTTPS']) {
			$server = $this->config->get('config_ssl');
		} else {
			$server = $this->config->get('config_url');
		}
		if (is_file(DIR_IMAGE . $this->config->get('config_logo'))) {
			$data['logo'] = $server . 'image/' . $this->config->get('config_logo');
		} else {
			$data['logo'] = '';
		}

		$data['shopping_cart'] = $this->url->link('checkout/cart');
		
		$data['special'] =  $this->url->link('product/special');
		$data['latest'] =  $this->url->link('product/latest');
		$data['partnership'] =  $this->url->link('affiliate/login');
		
		$data['delivery'] =  $this->url->link('information/information','information_id=6');
		$data['payment'] =  $this->url->link('information/information','information_id=8');
		$data['about_us'] =  $this->url->link('information/information','information_id=4');
		$data['questoin'] = $this->url->link('information/question');

		$data['text_items'] = $this->cart->countProducts();

		return $this->load->view('common/menu', $data);
	}
}

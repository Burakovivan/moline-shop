<?php
class ControllerExtensionModuleSpecial extends Controller {
	public function index($setting) {
		$this->load->language('extension/module/special');

		$this->load->model('catalog/product');

		$this->load->model('tool/image');

		$data['products'] = array();

		$filter_data = array(
			'sort'  => 'pd.name',
			'order' => 'ASC',
			'start' => 0,
			'limit' => $setting['limit']
		);

		$results = $this->model_catalog_product->getProductSpecials($filter_data);
		$data['special'] =  $this->url->link('product/special');

		if ($results) {
			foreach ($results as $result) {
				if ($result['image']) {
					$image = $this->model_tool_image->resize($result['image'], $setting['width'], $setting['height']);
				} else {
					$image = $this->model_tool_image->resize('placeholder.png', $setting['width'], $setting['height']);
				}

				if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
					$price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$price = false;
				}

				if (is_numeric($result['special'])) {
					$special = $this->currency->format($this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$special = false;
				}
				if(is_numeric($result['special'])){
					$discount = $result['price'] > 0 ? ceil((1 - $special/$result['price'])*100) : 100;
				}else{
					$discount = false;
				}
				if ($this->config->get('config_tax')) {
					$tax = $this->currency->format(is_numeric($result['special']) ? $result['special'] : $result['price'], $this->session->data['currency']);
				} else {
					$tax = false;
				}

				if ($this->config->get('config_review_status')) {
					$rating = $result['rating'];
				} else {
					$rating = false;
				}
				if(is_numeric($result['recommended_wholesale_price'])){
					$retail_price =  $this->currency->format($result['recommended_wholesale_price'], $this->session->data['currency']);

				}else{
					$retail_price = false;
				}

				$data['products'][] = array(
					'product_id'  			=> $result['product_id'],
					'thumb'       			=> $image,
					'name'        			=> $result['name'],
					'description' 			=> utf8_substr(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8')), 0, $this->config->get('theme_' . $this->config->get('config_theme') . '_product_description_length')) . '..',
					'price'       			=> $price,
					'special'     			=> $special,
					'discount'    			 => $discount,
					'tax'         			=> $tax,
					'rating'      			=> $rating,
					'href'        			=> $this->url->link('product/product', 'product_id=' . $result['product_id']),
					'sku'		  			=> $result['sku'],
					'minimum'     			=> $result['minimum'],
					'maximum'     			=> isset($result['quantity']) ? $result['quantity'] : "",
					'quantity_in_pack'		=> $result['quantity_in_pack'],
					'rating'      			=> $result['rating'],
					'prod'		  			=> json_encode($result),
					'href'        			=> $this->url->link('product/product', 'product_id=' . $result['product_id']),
					'bestseller'			=> isset($result['bestseller']) ? $result['bestseller'] : null,
					'featured'				=> isset($result['featured'])? $result['featured'] : null,
					'latest'				=> isset($result['latest'])? $result['latest'] : null,
					'stock_status'			=> $result['stock_status'],
					'stock_status_id'		=> $result['stock_status_id']
				);
			}

			$data['product_list'] = $this->load->controller('product/list',$data);
			return $this->load->view('extension/module/special', $data);
		}
	}
}
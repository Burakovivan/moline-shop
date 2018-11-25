<?php
class ControllerCommonFooter extends Controller {
	public function index() {
		$this->load->language('common/footer');

		$this->load->model('catalog/information');

		$data['informations'] = array();

		foreach ($this->model_catalog_information->getInformations() as $result) {
			if ($result['bottom']) {
				$data['informations'][] = array(
					'left' => $result['left'],
					'right' => $result['right'],
					'center' => $result['center'],
					'id' => $result['information_id'],
					'title' => $result['title'],
					'href'  => $this->url->link('information/information', 'information_id=' . $result['information_id'])
				);
			}
		}
		$staiy = array(
			'left' => 1,
			'right' => 0,
			'center' => 0,
			'id' => 0,
			'title' => "Статьи",
			'href'  => $this->url->link('information/stories')
		);
		$contactAndReviews = array(
			array(
				'left' => 1,
				'right' => 0,
				'center' => 0,
				'id' => 0,
				'title' => "Контакты",
				'href'  => $this->url->link('information/contact')
			),
			array(
				'left' => 1,
				'right' => 0,
				'center' => 0,
				'id' => 0,
				'title' => "Отзывы",
				'href'  => $this->url->link('information/otzivy')
			)
		);

		$inmformations = array_filter($data['informations'] , function($e){return $e['left']==1;});
		$data['informations'] = array_filter($data['informations'] , function($e){return $e['left']!=1;});
		array_splice( $inmformations, 1, 0, array($staiy) );

		$data['informations'] = array_merge($inmformations,$data['informations'],$contactAndReviews);
		
		$data['question'] = $this->url->link('information/question');
		$data['bestseller'] = $this->url->link('product/bestseller');
		$data['special'] = $this->url->link('product/special');
		$data['latest'] = $this->url->link('product/latest');
		$data['tracking'] = $this->url->link('information/tracking');
		$data['manufacturer'] = $this->url->link('product/manufacturer');
		$data['voucher'] = $this->url->link('account/voucher', '', true);
		$data['affiliate'] = $this->url->link('affiliate/login', '', true);
		$data['special'] = $this->url->link('product/special');
		$data['account'] = $this->url->link('account/account', '', true);
		$data['order'] = $this->url->link('account/order', '', true);
		$data['wishlist'] = $this->url->link('account/wishlist', '', true);
		$data['newsletter'] = $this->url->link('account/newsletter', '', true);

		$data['powered'] = sprintf($this->language->get('text_powered'), $this->config->get('config_name'), date('Y', time()));

		// Whos Online
		if ($this->config->get('config_customer_online')) {
			$this->load->model('tool/online');

			if (isset($this->request->server['REMOTE_ADDR'])) {
				$ip = $this->request->server['REMOTE_ADDR'];
			} else {
				$ip = '';
			}

			if (isset($this->request->server['HTTP_HOST']) && isset($this->request->server['REQUEST_URI'])) {
				$url = ($this->request->server['HTTPS'] ? 'https://' : 'http://') . $this->request->server['HTTP_HOST'] . $this->request->server['REQUEST_URI'];
			} else {
				$url = '';
			}

			if (isset($this->request->server['HTTP_REFERER'])) {
				$referer = $this->request->server['HTTP_REFERER'];
			} else {
				$referer = '';
			}

			$this->model_tool_online->addOnline($ip, $this->customer->getId(), $url, $referer);
		}

		$data['scripts'] = $this->document->getScripts('footer');
		
		return $this->load->view('common/footer', $data);
	}
}

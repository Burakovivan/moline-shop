<?php
class ControllerInformationStories extends Controller {
	private $error = array();

	public function index() {
		try{

		$this->load->language('information/stories');

		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = array();

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home')
		);

		$data['breadcrumbs'][] = array(
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('information/stories')
		);
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');
		$this->load->model('catalog/information');

		if(isset($this->request->get['story_id'])){
			$story_id = $this->request->get['story_id'];
			$data['story'] = $this->model_catalog_information->getInformation($story_id);
			$data['story']['description'] = htmlspecialchars_decode($data['story']['description']);
			$data['breadcrumbs'][] = array(
				'text' => $data['story']['title'],
				'href' => $this->url->link('information/stories','story_id='.$data['story']['information_id'])
			);
			$this->response->setOutput($this->load->view('information/story_details', $data));
		}else{
			$story_list = $this->model_catalog_information->getStories();
			foreach($story_list as &$story){
				$story['href']  = $this->url->link('information/stories', 'story_id='.$story['information_id']);
				$text =  htmlspecialchars_decode($story['description']);
				$pattern = '/<img.+src=[\'"](?P<src>.+?)[\'"].*>/mi';
				if(preg_match($pattern, $text, $match))
				{
					$story['image'] = $match['src'];
				}
			}
			$data['stories'] = $story_list;
			$this->response->setOutput($this->load->view('information/stories', $data));
		}
	}
	catch(Exception $ex){
		var_dump($ex);
	}
	}

	
}

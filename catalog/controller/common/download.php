<?php
class ControllerCommonDownload extends Controller {
		public function index() {
		$this->load->model('catalog/download');

		if (isset($this->request->get['name'])) {
			$download_mask = $this->request->get['name'];
		} else {
			$download_mask = '';
		}

		$download_info = $this->model_catalog_download->getDownloadByName($download_mask);

		if ($download_info) {
			$file = DIR_DOWNLOAD . $download_info['filename'];
			$mask = basename($download_info['mask']);

			if (!headers_sent()) {
				if (file_exists($file)) {
					header('Content-Type: application/octet-stream');
					header('Content-Disposition: attachment; filename="' . ($mask ? $mask : basename($file)) . '"');
					header('Expires: 0');
					header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
					header('Pragma: public');
					header('Content-Length: ' . filesize($file));

					if (ob_get_level()) {
						ob_end_clean();
					}

					readfile($file, 'rb');

					exit();
				} else {
					exit('Error: Could not find file ' . $file . '!');
				}
			} else {
				exit('Error: Headers already sent out!');
			}
		} else {
			$this->response->redirect($this->url->link('common/home', '', true));
		}
	}
}
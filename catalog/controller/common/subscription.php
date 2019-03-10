<?php
class ControllerCommonSubscription extends Controller {
	public function index() {

        $this->load->model('account/customer');

        $customer_id = $this->model_account_customer->addCustomer($this->request->post);
        $this->model_account_customer->deleteLoginAttempts($this->request->post['email']);
        $this->customer->login($this->request->post['email'], $this->request->post['password']);

        unset($this->session->data['guest']);
        $this->response->redirect($this->url->link('account/success'));
	}
}
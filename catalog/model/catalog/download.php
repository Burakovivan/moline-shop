<?php
class ModelCatalogDownload extends Model {
	public function getDownloadByName($name) {
        $query = $this->db->query("SELECT d.* FROM `". DB_PREFIX ."download_description` as dd,`". DB_PREFIX ."download` d WHERE dd.name = '".$name."'");
        return $query->row;
	}
}
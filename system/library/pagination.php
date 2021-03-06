<?php
/**
 * @package		OpenCart
 * @author		Daniel Kerr
 * @copyright	Copyright (c) 2005 - 2017, OpenCart, Ltd. (https://www.opencart.com/)
 * @license		https://opensource.org/licenses/GPL-3.0
 * @link		https://www.opencart.com
*/

/**
* Pagination class
*/
class Pagination {
	public $total = 0;
	public $page = 1;
	public $limit = 20;
	public $num_links = 2;
	public $url = '';
	public $text_first = 1;
	public $text_last = '';
	// public $text_next = '&gt;';
	public $text_next = '...';
	public $text_prev = '...';
	public $isRange;
	private $admin;

	 
	
	/**
	 * 
     * @return	text
	 */
    public function renderNextPageLink() {
		$this->url = str_replace('%7Bpage%7D', '{page}', $this->url);
		$num_pages = ceil($this->total / $this->limit);
		return str_replace('{page}', $num_pages, $this->url);
    }



	/**
     * 
     *
     * @return	text
     */
	public function render() {
		$total = $this->total;

		if ($this->page < 1) {
			$page = 1;
		} else {
			$page = $this->page;
		}

		if (!(int)$this->limit) {
			$limit = 10;
		} else {
			$limit = $this->limit;
		}

		$num_links = $this->num_links;
		$num_pages = ceil($total / $limit);
		$this->text_last = $num_pages;
		$admin = strpos($this->url, "/admin/") !== false;
		$this->url = str_replace('%7Bpage%7D', '{page}', $this->url);
		if($admin){
			$output = '<ul class="pagination">';
		}else{
			$output = '<ul>';
		}

		if ($page > 2) {
			$output .= '<li data-page=1> <a href="' . str_replace(array('&amp;page={page}', '?page={page}', '&page={page}'), '', $this->url) . '">' . $this->text_first . '</a></li>';
			
			// if ($page - 1 === 1) {
			// 	$output .= '<li><a href="' . str_replace(array('&amp;page={page}', '?page={page}', '&page={page}'), '', $this->url) . '">' . $this->text_prev . '</a></li>';
			// } else {
			// 	$output .= '<li ><a href="' . str_replace('{page}', $page - 1, $this->url) . '">' . $this->text_prev . '</a></li>';
			// }
			
			if ($page - 1 === 2) {
				// $output .= '<li class="dots">...</li>';
			} else {
				if($admin){
					$output .= '<li class="dots disabled" ><a>...</a></li>';
				}else{
					$output .= '<li class="dots">...</li>';
				}
			}
			
		}

		if ($num_pages > 1) {
			if ($num_pages <= $num_links) {
				$start = 1;
				$end = $num_pages;
			} else {
				$start = $page - floor($num_links / 2);
				$end = $page + floor($num_links / 2);

				if ($start < 1) {
					$end += abs($start) + 1;
					$start = 1;
				}

				if ($end > $num_pages) {
					$start -= ($end - $num_pages);
					$end = $num_pages;
				}
			}

			for ($i = $start; $i <= $end; $i++) {
				if ( $page == $i) {
					$output .= '<li class="active" data-page="'.$i.'" ><span>' . $i . '</span></li>';
				} else {
					if ($i === 1) {
						$output .= '<li data-page="'.$i.'" ><a href="' . str_replace(array('&amp;page={page}', '?page={page}', '&page={page}'), '', $this->url) . '">' . $i . '</a></li>';
					} else {
						$output .= '<li data-page="'.$i.'" ><a href="' . str_replace('{page}', $i, $this->url) . '">' . $i . '</a></li>';
					}
				}
			}
		}

		if ($page < ($num_pages-1)) {
			if($num_pages - $page > 2){
				if($admin){
					$output .= '<li class="dots disabled"><a>...</a></li>';
				}else{
					$output .= '<li class="dots">...</li>';
				}
			}
			$output .= '<li data-page="' . $this->text_last . '"><a href="' . str_replace('{page}', $num_pages, $this->url) . '">' . $this->text_last . '</a></li>';
		}

		$output .= '</ul>';

		if ($num_pages > 1) {
			return $output;
		} else {
			return '';
		}
	}
}

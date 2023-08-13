package com.bugerking.burgerking.web.controller.order;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OrderViewController {
	
	@GetMapping("/deliveryHome")
	public String deliveryHome() {
		return "delivery_home";
	}
	
	@GetMapping("/cart")
	public String cart() {
		return "cart";
	}
	
}


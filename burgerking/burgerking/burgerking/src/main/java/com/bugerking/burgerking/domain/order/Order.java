package com.bugerking.burgerking.domain.order;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Order {
	private int cart_code;
	private String user_id;
	private int mainmenu_code;
	private int optionmenu_code;
	private int sidechange_code;
	private int total_price;
	private int choice;
	private int ea;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}

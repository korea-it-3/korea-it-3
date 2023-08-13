package com.bugerking.burgerking.web.dto.order;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaidUserOrderRespDto {
	private String mainmenu_name; 
	
	private String optionmenu_name;
	
	private String sidechange_name;
	
	private int total_price;
	private int cart_ea;
	
	private String address;
	private int order_code;
	private LocalDateTime create_date;
	private String user_phone;
	
	private String pay;
	
	private int paidTotalPrice;
	
}

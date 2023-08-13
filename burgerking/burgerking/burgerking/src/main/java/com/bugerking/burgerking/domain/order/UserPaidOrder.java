package com.bugerking.burgerking.domain.order;

import java.time.LocalDateTime;

import com.bugerking.burgerking.web.dto.order.PaidUserOrderRespDto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserPaidOrder {
	private String mainmenu_name; 
	
	private String optionmenu_name;
	
	private String sidechange_name;
	
	private int total_price;
	private int ea; //문제일지도
	
	private String address;
	private int order_code;
	private LocalDateTime create_date;
	private String user_phone;
	
	private String pay;
	
	public PaidUserOrderRespDto userpaidorderToDto() {
		return PaidUserOrderRespDto.builder()
				.mainmenu_name(mainmenu_name)
				
				.optionmenu_name(optionmenu_name)
				
				.sidechange_name(sidechange_name)
				
				.total_price(total_price)
				.cart_ea(ea)
				
				.address(address)
				.order_code(order_code)
				.create_date(create_date)
				.user_phone(user_phone)
				
				.pay(pay)
				.build();
	}

}

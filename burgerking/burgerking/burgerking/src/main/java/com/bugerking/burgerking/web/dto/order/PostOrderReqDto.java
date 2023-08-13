package com.bugerking.burgerking.web.dto.order;

import com.bugerking.burgerking.domain.order.Order;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostOrderReqDto {
	
	private int mainmenuCode;
	private int optionmenuCode;
	private int sidechangeCode;
	
	public Order OrderToEntity () {
		return Order.builder()
				.mainmenu_code(mainmenuCode)
				.optionmenu_code(optionmenuCode)
				.sidechange_code(sidechangeCode)
				.build();
	}
}

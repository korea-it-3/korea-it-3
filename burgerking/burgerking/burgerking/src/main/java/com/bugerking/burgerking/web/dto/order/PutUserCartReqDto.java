package com.bugerking.burgerking.web.dto.order;

import com.bugerking.burgerking.domain.order.ModifyCart;
import com.bugerking.burgerking.domain.order.Order;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PutUserCartReqDto {
	//private String userId;
	private int cartCode; //
	private int mainmenuCode;//
	private int optionmenuCode;//
	private int sidechangeCode;//
	private int ea;//

	
//	public Order putUserCartToEntity () {
//		return Order.builder()
//				//.user_id(userId)
//				.cart_code(cartCode)
//				.mainmenu_code(mainmenuCode)
//				.optionmenu_code(optionmenuCode)
//				.sidechange_code(sidechangeCode)
//				.ea(ea)
//				.build();
//	}
	
	public ModifyCart putUserCartToEntity () {
		return ModifyCart.builder()
				//.user_id(userId)
				.cart_code(cartCode)
				.mainmenu_code(mainmenuCode)
				.optionmenu_code(optionmenuCode)
				.sidechange_code(sidechangeCode)
				.ea(ea)
				.build();
				
	}
	
	
}

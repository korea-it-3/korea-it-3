package com.bugerking.burgerking.web.dto.order;

import com.bugerking.burgerking.domain.order.UserOrder;

import lombok.Data;

@Data
public class PostUserOrderReqDto {
	private String address;
	
	private String mainmenuCode;
	private String optionmenuCode;
    private String sidechangeCode;
   
    private int totalPrice;
    
    private int ea;
    
    public UserOrder postUserOrderToEntity () {
    	return UserOrder.builder()
    			.address(address)
    			
    			.mainmenu_code(mainmenuCode)
    			.optionmenu_code(optionmenuCode)
    			.sidechange_code(sidechangeCode)
    			
    			.total_price(totalPrice)
    			
    			.ea(ea)
    			.build();
    }
}

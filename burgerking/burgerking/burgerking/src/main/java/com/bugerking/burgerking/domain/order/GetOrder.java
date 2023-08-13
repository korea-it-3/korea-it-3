package com.bugerking.burgerking.domain.order;

import com.bugerking.burgerking.web.dto.order.GetOrderRespDto;


public class GetOrder {
	private String user_phone;
	
	private String address;
	
	private String mainmenu_name;
	
	private String optionmenu_name;
	private int optionmenu_price;
	
    private String sidechange_name;
    private int sidechange_price;
    
    private int total_price;
    private int cart_ea;
    
    
    public GetOrderRespDto getOrderTODto() {
    	return GetOrderRespDto.builder()
    			.userPhone(user_phone)
    			
    			.address(address)
    			
    			.mainmenuName(mainmenu_name)
    			
    			.optionmenuName(optionmenu_name)
    			.optionmenuPrice(optionmenu_price)
    			
    			.sidechangeName(sidechange_name)
    			.sidechangePrice(sidechange_price)
    			
    			.totalPrice(total_price)
    			.ea(cart_ea)
    			.build();
    }
}

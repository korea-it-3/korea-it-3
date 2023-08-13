package com.bugerking.burgerking.domain.order;

import java.time.LocalDateTime;

import com.bugerking.burgerking.web.dto.order.getUserCartRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetailCart {
	private int cart_code;
	private int total_price;
	private int choice;
	private int ea;

	
	private String mainmenu_name;
	private int mainmenu_code;
	
	private String optionmenu_name;
	private int optionmenu_code;
	private int optionmenu_price;
    private String optionmenu_image;
    
    private String sidechange_name;
    private int sidechange_code;
    private int sidechange_price;
    
    
	
	public getUserCartRespDto DetailCartToDto () {
		return getUserCartRespDto.builder()
				.cartCode(cart_code)
				.totalPrice(total_price)
				.choice(choice)
				.ea(ea)

				
				.mainmenuName(mainmenu_name)
				.mainmenuCode(mainmenu_code)
				
				.optionmenuName(optionmenu_name)
				.optionmenuCode(optionmenu_code)
				.optionmenuPrice(optionmenu_price)
				.optionmenuImage(optionmenu_image)
				
				.sidechangeName(sidechange_name)
				.sidemenuCode(sidechange_code)
				.sidechangePrice(sidechange_price)
				
				.build();
	}
	
}

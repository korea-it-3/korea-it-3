package com.bugerking.burgerking.domain.order;

import java.time.LocalDateTime;

import com.bugerking.burgerking.web.dto.order.MenuRespDto;


public class Menu {
	private int mainmenu_code;
	private int category;
	private String mainmenu_name;
	private int mainmenu_price;
	private String mainmenu_image;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public MenuRespDto menuToDto() {
		return MenuRespDto.builder()
				.mainmenuCode(mainmenu_code)
				.mainmenuName(mainmenu_name)
				.mainmenuPrice(mainmenu_price)
				.mainmenuImage(mainmenu_image)
				.build();
		
	}
}

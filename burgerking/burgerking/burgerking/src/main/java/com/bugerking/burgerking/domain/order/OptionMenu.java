package com.bugerking.burgerking.domain.order;

import java.time.LocalDateTime;

import com.bugerking.burgerking.web.dto.order.OptionMenuRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OptionMenu {
	private int optionmenu_code;
	private int mainmenu_code;
	/* private String mainmenu_name; */
	private int option_order;
	private String optionmenu_name;
	private int optionmenu_price;
	private String optionmenu_image;
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public OptionMenuRespDto optionMenuToDto() {
		return OptionMenuRespDto.builder()
				.optionmenuCode(optionmenu_code)
				.mainmenuCode(mainmenu_code)
				/* .mainmenuName(mainmenu_name) */
				.optionOrder(option_order)
				.optionmenuName(optionmenu_name)
				.optionmenuPrice(optionmenu_price)
				.optionmenuImage(optionmenu_image)
				.build();
				
	}
}

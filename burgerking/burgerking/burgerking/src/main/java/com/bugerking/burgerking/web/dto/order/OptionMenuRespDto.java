package com.bugerking.burgerking.web.dto.order;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class OptionMenuRespDto {
	private int optionmenuCode;
	private int mainmenuCode;
	private int optionOrder;
	private String optionmenuName;
	private int optionmenuPrice;
	private String optionmenuImage;
	
}

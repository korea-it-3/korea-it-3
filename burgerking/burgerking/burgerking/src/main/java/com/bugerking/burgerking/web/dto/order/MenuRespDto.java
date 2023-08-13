package com.bugerking.burgerking.web.dto.order;

import lombok.Builder;
import lombok.Data;

@Builder
@Data

public class MenuRespDto {
	private int mainmenuCode;
	private String mainmenuName;
	private int mainmenuPrice;
	private String mainmenuImage;
}

package com.bugerking.burgerking.web.dto.order;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetOrderRespDto {
	private String userPhone;
	private String address;
	private String mainmenuName;
	private String optionmenuName;
	private int optionmenuPrice;
    private String sidechangeName;
    private int sidechangePrice;
    private int totalPrice;
    private int ea;
}

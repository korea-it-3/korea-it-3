package com.bugerking.burgerking.web.dto.order;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class getUserCartRespDto {
	private int cartCode;
	private int totalPrice; //(옵션 메뉴 + 사이드체인)
	private int choice;

	
	private String mainmenuName;
	private int mainmenuCode;
	
	private String optionmenuName;
	private int optionmenuCode;
	private int optionmenuPrice;
    private String optionmenuImage;
    
    private String sidechangeName;
    private int sidemenuCode;
    private int sidechangePrice;
    
    private int ea;
    
    private int eaXtotalPrice; // 메뉴 개수 * totalPrice
    
    private int OrderListAmount;  // sum, 카트 리스트의 eaXtotalPrice

}

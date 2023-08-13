package com.bugerking.burgerking.domain.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserOrder {
	private String address;
	
	private String mainmenu_code;
	private String optionmenu_code;
    private String sidechange_code;
   
    private String payment;
    
    private int total_price;
    
    private int ea;
}

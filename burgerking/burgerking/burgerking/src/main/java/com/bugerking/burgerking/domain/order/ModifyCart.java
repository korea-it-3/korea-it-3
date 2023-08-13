package com.bugerking.burgerking.domain.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModifyCart {
	private int cart_code;
	private int mainmenu_code;
	private int optionmenu_code;
	private int sidechange_code;
	private int ea;
}

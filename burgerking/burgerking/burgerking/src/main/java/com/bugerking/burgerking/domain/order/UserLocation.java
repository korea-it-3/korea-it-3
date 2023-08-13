package com.bugerking.burgerking.domain.order;

import com.bugerking.burgerking.web.dto.order.UserLocationRespDto;

public class UserLocation {
	private String nickname;
	private String address;
	
	public UserLocationRespDto userLocationToEntity () {
		return UserLocationRespDto.builder()
				.nickname(nickname)
				.address(address)
				.build();
	}
}

package com.bugerking.burgerking.web.dto.order;

import com.bugerking.burgerking.domain.user.User;

import lombok.Builder;
import lombok.Data;

@Builder
@Data

public class PutUserInfoReqDto {
	private String userPhone;
	private int gender;
	private String userBirth;
	private int marketing1;
	private int marketing2;
	
	public User infoChangeToEntity () {
		return User.builder()
				.user_phone(userPhone)
				.gender(gender)
				.user_birth(userBirth)
				.marketing1(marketing1)
				.marketing2(marketing2)
				.build();
		
	}
}

package com.bugerking.burgerking.domain.user;

import java.time.LocalDateTime;

import com.bugerking.burgerking.web.dto.order.getUserRespDto;

import lombok.Builder;
import lombok.Data;
@Data
@Builder
public class User {
	private String user_id;
	private String user_name;
	private String user_password;
	private String user_phone;
	private String user_role;
	private int gender;
	private String user_birth;
	private String oauth2_id;
	private int marketing1;
	private int marketing2;
	private int flag;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public getUserRespDto userToDto() {
		return getUserRespDto.builder()
				.userId(user_id)
				.userName(user_name)
				.password(user_password)
				.userPhone(user_phone)
				.userRole(user_role)
				.gender(gender)
				.userBirth(user_birth)
				.oauth2Id(oauth2_id)
				.marketing1(marketing1)
				.marketing2(marketing2)
				.flag(flag)
				
				.build();
				
	}
	
	
}

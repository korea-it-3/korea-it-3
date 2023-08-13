package com.bugerking.burgerking.web.dto.order;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class getUserRespDto {
	private String userId;
	private String userName;
	private String password;
	private String userPhone;
	private String userRole;
	private int gender;
	private String userBirth;
	private String oauth2Id;
	private int marketing1;
	private int marketing2;
	private int flag;
	
}

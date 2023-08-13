package com.bugerking.burgerking.web.dto.pay;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class KakaoReadyResponse {
	 
    //response
    private String tid;
    private String next_redirect_pc_url;
    private String next_redirect_mobile_url;
    private Date created_at;
}

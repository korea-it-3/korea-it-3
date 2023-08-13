package com.bugerking.burgerking.service.order;


import java.util.List;

import com.bugerking.burgerking.web.dto.order.PutUserInfoReqDto;
import com.bugerking.burgerking.web.dto.order.UserLocationRespDto;
import com.bugerking.burgerking.web.dto.order.getUserCartRespDto;
import com.bugerking.burgerking.web.dto.order.OptionMenuRespDto;
import com.bugerking.burgerking.web.dto.order.PaidUserOrderRespDto;
import com.bugerking.burgerking.web.dto.order.GetOrderRespDto;
import com.bugerking.burgerking.web.dto.order.MenuRespDto;
import com.bugerking.burgerking.web.dto.order.PostOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PostUserOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PutUserCartReqDto;
import com.bugerking.burgerking.web.dto.order.getUserRespDto;


public interface OrderService {
	public getUserRespDto getUser () throws Exception;
	
	public List<MenuRespDto> getMainMenu(int category) throws Exception;
	
	public List<OptionMenuRespDto> getMenuOption (int mainMenuCode) throws Exception;
	
	public boolean setMenu(/*String userId,*/ PostOrderReqDto orderReqDto) throws Exception;
	
	public List<getUserCartRespDto> getUserCart() throws Exception;
	
	public boolean putCartChoice(int cartCodes) throws Exception;
	
	public boolean deleteCart() throws Exception;
	
	public boolean putCart(List<PutUserCartReqDto> putUserCartReqDtos) throws Exception;
	
	public boolean postUserInfo( PutUserInfoReqDto putUserInfoReqDto) throws Exception;
	
	public UserLocationRespDto getUserLocation() throws Exception;
	
	public List<GetOrderRespDto> getOrderList() throws Exception;
	
	public boolean postUserOrder(List<PostUserOrderReqDto> postUserOrderReqDtos) throws Exception;
	
	public List<PaidUserOrderRespDto> getUserPaidOrder() throws Exception;
}

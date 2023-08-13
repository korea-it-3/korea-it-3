package com.bugerking.burgerking.domain.order;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.bugerking.burgerking.domain.user.User;

@Mapper
public interface OrderRepository {
	public User getUser() throws Exception;
	
	public List<Menu> getMainMenu(int category) throws Exception;
	
	public List<OptionMenu> getOptionMenu(int mainMenuCode) throws Exception;
	
	public int addMenu(/*String userId,*/ Order order) throws Exception;
	
	public List<DetailCart> getUserCart() throws Exception;
	
	public int putCartChoice (int cartCode) throws Exception;
	
	public int deleteCart() throws Exception;
	
	public int putUserCart(List<ModifyCart> modifyCarts) throws Exception;
	
	public int putUserInfo(User user) throws Exception;
	
	public UserLocation getUserLocation() throws Exception;
	
	public List<GetOrder> getUserOrderList() throws Exception;
	
	public int postUserOrder(List<UserOrder> userOrders) throws Exception;
	
	public List<UserPaidOrder> getUserPaidOrder() throws Exception;
	
}

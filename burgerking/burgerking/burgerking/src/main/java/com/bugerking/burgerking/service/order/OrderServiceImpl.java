package com.bugerking.burgerking.service.order;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bugerking.burgerking.domain.order.DetailCart;
import com.bugerking.burgerking.domain.order.ModifyCart;
import com.bugerking.burgerking.domain.order.Order;
import com.bugerking.burgerking.domain.order.OrderRepository;
import com.bugerking.burgerking.domain.order.UserOrder;
import com.bugerking.burgerking.domain.order.UserPaidOrder;
import com.bugerking.burgerking.web.dto.order.OptionMenuRespDto;
import com.bugerking.burgerking.web.dto.order.PaidUserOrderRespDto;
import com.bugerking.burgerking.web.dto.order.GetOrderRespDto;
import com.bugerking.burgerking.web.dto.order.MenuRespDto;
import com.bugerking.burgerking.web.dto.order.PostOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PostUserOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PutUserCartReqDto;
import com.bugerking.burgerking.web.dto.order.PutUserInfoReqDto;
import com.bugerking.burgerking.web.dto.order.UserLocationRespDto;
import com.bugerking.burgerking.web.dto.order.getUserCartRespDto;
import com.bugerking.burgerking.web.dto.order.getUserRespDto;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
	
	private final OrderRepository orderRepository;
	
	
	@Override
	public getUserRespDto getUser() throws Exception {
		return orderRepository.getUser().userToDto();
	}
	
	
	@Override
	public List<MenuRespDto> getMainMenu(int category) throws Exception {
		List<MenuRespDto> menuDtoList = new ArrayList<>();
		
		orderRepository.getMainMenu(category).forEach(menu -> {
			menuDtoList.add(menu.menuToDto());
		});
		return menuDtoList;
	}

	
	@Override
	public List<OptionMenuRespDto> getMenuOption(int mainMenuCode) throws Exception {
		List<OptionMenuRespDto> optionMenuList = new ArrayList<>();
		
		orderRepository.getOptionMenu(mainMenuCode).forEach(entity -> {
			optionMenuList.add(entity.optionMenuToDto());
		});
		
		return optionMenuList;
	}
	
	
	@Override
	public boolean setMenu(/*String userId*/ PostOrderReqDto orderReqDto) throws Exception {
		Order order =  orderReqDto.OrderToEntity();
		
		return orderRepository.addMenu(/*userId,*/order)>0;
	}

	@Override
	public List<getUserCartRespDto> getUserCart() throws Exception {
		 List<getUserCartRespDto> list = new ArrayList<>();
		 Map<String, getUserCartRespDto> menuNameMap = new HashMap<>();
		 int OrderListAmount = 0;
		 
		 for(DetailCart entity : orderRepository.getUserCart()) {
	            String key = entity.getMainmenu_name() 
	            			+ "-"
	            			+ entity.getOptionmenu_name()
	            			+ "-"
	            			+ entity.getSidechange_name();
	     
	             if (!menuNameMap.containsKey(key)) { 
	            	
	                menuNameMap.put(key, entity.DetailCartToDto());
	                
	                getUserCartRespDto dto =  entity.DetailCartToDto();
	                dto.setEa(1);
	                dto.setEaXtotalPrice(dto.getEa() * dto.getTotalPrice()); //가
	                
	                list.add(dto);
	                
	            }else if(menuNameMap.containsKey(key)) {
	            	 getUserCartRespDto dto = menuNameMap.get(key);
	                 int ea = dto.getEa() + 1;
	                 int price = ea * dto.getTotalPrice();
	                 
	                 
	                 for (int i = 0; i < list.size(); i++) {
	                     if (list.get(i).getMainmenuName().equals(dto.getMainmenuName())
	                         && list.get(i).getOptionmenuName().equals(dto.getOptionmenuName())
	                         && list.get(i).getSidechangeName().equals(dto.getSidechangeName())) {
	                    	 
	                    	 dto.setEa(ea);
	                    	 dto.setEaXtotalPrice(price);
	                         list.set(i, dto);
	                         break;
	                     	}	
	                  }
	            }
         }
		 for(int i =0; i <list.size(); i++) {
			OrderListAmount += list.get(i).getEaXtotalPrice();
		 }
		 list.get(0).setOrderListAmount(OrderListAmount);
		return list;
	}
	
	
	@Override
	public boolean putCartChoice(int cartCode) throws Exception {
		return orderRepository.putCartChoice(cartCode)>0;
	}
	
	
	@Override
	public boolean deleteCart() throws Exception {
		return orderRepository.deleteCart()>0;
	}
	
	@Override
	public boolean putCart(List<PutUserCartReqDto> putUserCartReqDtos) throws Exception {
		
		List<ModifyCart> putUserCartEntitys = new ArrayList<>();
		System.out.println("!@#");
		putUserCartReqDtos.forEach(dto -> {
			putUserCartEntitys.add(dto.putUserCartToEntity());
			System.out.println("서비스");
			System.out.println(dto.putUserCartToEntity().getCart_code());
			System.out.println(dto.putUserCartToEntity().getMainmenu_code());
			System.out.println(dto.putUserCartToEntity().getOptionmenu_code());
			System.out.println(dto.putUserCartToEntity().getSidechange_code());
			System.out.println(dto.putUserCartToEntity().getEa());
			

		});
		return orderRepository.putUserCart(putUserCartEntitys) != 0;
	}
	

	@Override
	public boolean postUserInfo(PutUserInfoReqDto putUserInfoReqDto) throws Exception {
		return orderRepository.putUserInfo(putUserInfoReqDto.infoChangeToEntity())>0;
	}


	@Override
	public UserLocationRespDto getUserLocation() throws Exception {
		return orderRepository.getUserLocation().userLocationToEntity();
	}


	@Override
	public List<GetOrderRespDto> getOrderList() throws Exception {
		List<GetOrderRespDto> dtoList = new ArrayList<>();
		
		orderRepository.getUserOrderList().forEach(entity -> {
			dtoList.add(entity.getOrderTODto()) ;
		});
		
		return dtoList;
	}


	@Override
	public boolean postUserOrder(List<PostUserOrderReqDto> postUserOrderReqDtos) throws Exception {
		List<UserOrder> userOrders = new ArrayList<>();
		
		postUserOrderReqDtos.forEach(dto -> {
			userOrders.add(dto.postUserOrderToEntity());
		});
		
		
		return orderRepository.postUserOrder(userOrders)>0;
	}


	@Override
	public List<PaidUserOrderRespDto> getUserPaidOrder() throws Exception {
		List<UserPaidOrder> entitys = orderRepository.getUserPaidOrder();
		List<PaidUserOrderRespDto> dtos = new ArrayList<>();
		int paidTotalPrice = 0;
		
		for(int i = 0; i < entitys.size(); i++) {
			paidTotalPrice += entitys.get(i).getTotal_price();
		}
		
		entitys.forEach(entity -> {
			dtos.add(entity.userpaidorderToDto());
		});
		
		
		
		dtos.get(0).setPaidTotalPrice(paidTotalPrice); //첫번쨰에만 넣음 
		System.out.println(dtos.get(0).getPaidTotalPrice());
		return dtos;
	}
	



	


	
	

}

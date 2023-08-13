package com.bugerking.burgerking.web.controller.order;

import java.util.ArrayList;
import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bugerking.burgerking.service.order.OrderService;
import com.bugerking.burgerking.web.dto.CMResponseDto;
import com.bugerking.burgerking.web.dto.order.PutUserInfoReqDto;
import com.bugerking.burgerking.web.dto.order.UserLocationRespDto;
import com.bugerking.burgerking.web.dto.order.GetOrderRespDto;
import com.bugerking.burgerking.web.dto.order.MenuRespDto;
import com.bugerking.burgerking.web.dto.order.OptionMenuRespDto;
import com.bugerking.burgerking.web.dto.order.PaidUserOrderRespDto;
import com.bugerking.burgerking.web.dto.order.PostOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PostUserOrderReqDto;
import com.bugerking.burgerking.web.dto.order.PutUserCartReqDto;
import com.bugerking.burgerking.web.dto.order.getUserCartRespDto;
import com.bugerking.burgerking.web.dto.order.getUserRespDto;

import lombok.RequiredArgsConstructor;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor

public class OrderController {
	private final OrderService orderService;
	
	//완료
	// 회원정보 불러오기
	//세션으로 아이디 매게변수에 넣기
	@GetMapping("/userInfo")
	public ResponseEntity<?> getUser(){
		
		getUserRespDto user = null;
		try {
			user = orderService.getUser();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "getuser info failed", user));

		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "getuser info Seccess", user));
	}
	
	//완료
	// 카테고리를 누르면 해당 메뉴를 불러오기
	@GetMapping("/mainMenu")
	public ResponseEntity<?> getMenu (@RequestParam int category) {
		List<MenuRespDto> menuDtos = new ArrayList<>();
		
		try {
			menuDtos = orderService.getMainMenu(category);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "getMenu failed", menuDtos));
		}
		
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "getMenu Seccess", menuDtos));
	}
	
	//완료
	// 햄버거 누르면 옵션 정보 불러오기 
	@GetMapping("/optionMenu")
	public ResponseEntity<?> getMenuOption(@RequestParam int mainMenuCode ) {
		List<OptionMenuRespDto> list = new ArrayList<>();
		
		try {
			list = orderService.getMenuOption(mainMenuCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "get Option Menu failed", list));

		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "get Option Menu Seccess", list));
	}
	//완료
	// 카트에 메뉴넣기 
	//몰라) 유저아이디 어떻게 들고가지, -> 세션으로 들고옴 
	@PostMapping("/addCart")
	public ResponseEntity<?> setMenu (/*HttpServletRequest request*/ @RequestBody PostOrderReqDto menu) {
//		HttpSession session = request.getSession();
//		String userId = (String) session.getAttribute("userId");

		boolean result = false;
		
		try {
			result = orderService.setMenu(/*userId*/ menu);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "addMenu Faild", result));
		}
		
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "addMenu Success", result));
	}
	
	
	/*
	완료
	5. 회원 아이디를 이용해 카트 상세 정보 불러오기
	몰라) 유저아이디 어떻게 들고가지? ->세션으로 들고가기
	몰라) 카트에 담긴 메뉴 개수가 계속 떠있어야함 ->js 로계속 로드해주기 */
	@GetMapping("/cartList")
	public ResponseEntity<?> getUserCart() {
		
		List<getUserCartRespDto> userCart = null;
		
		try {
			userCart = orderService.getUserCart();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "User Cart Load Faild", userCart));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "User Cart Load Success", userCart));
	}
	
	//완료
	//카트 선택 해제하기
	//수정 업데이트만 되고 카트는 안됨 
	@PutMapping("/putCartChoice")
	public ResponseEntity<?> putCartChoice( @RequestParam int cartCode) {
		boolean result = false;
		
		try {
			result = orderService.putCartChoice(cartCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Cart Choice Chainge Faild", result));

		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Cart Choice Chainge addMenu Success", result));
	}
	
	//완료
	//선택 0만 지우세요!!
	//카트 삭제하기.
	//세션으로 유저아이디 
	@DeleteMapping("/deleteCart")
	public ResponseEntity<?> deleteCart() {
		boolean result = false;
		
		try {
			result = orderService.deleteCart();
		} catch (Exception e) {
			e.printStackTrace();
			
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Cart Delete Faild", result));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Cart Delete Success", result));
	}	
	  
	//주문하기 누르면 요청이 받아지는 곳 
	//카트 변경하기 
	@PutMapping("/putCart")
	public ResponseEntity<?> putCart(@RequestBody List<PutUserCartReqDto> putUserCartReqDtos) {
		System.out.println("controller put요청" + putUserCartReqDtos);
		boolean result = false;
		
		try {
			result = orderService.putCart(putUserCartReqDtos);
			
		} catch (Exception e) {
			e.printStackTrace();			
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Cart Modify Faild", result));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Cart Modify Success", result));
		
	}
	
	//유저 정보 수정하기 
	//세션 유저아이디 들고가기 
	@PostMapping("/chaingeUserInfo")
	public ResponseEntity<?> postUserInfo( @RequestBody PutUserInfoReqDto putUserInfoReqDto) {
		boolean result = false;
		
		try {
			result = orderService.postUserInfo(putUserInfoReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Chainge User Info Faild", result));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Chainge User Info Success", result));
	}
	
	@GetMapping("/myLocation")
	public ResponseEntity<?> getMyLocation () {
		UserLocationRespDto userLocationRespDto = null;
		try {
			userLocationRespDto = orderService.getUserLocation();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Get User Location Faild", userLocationRespDto));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Get User Location success", userLocationRespDto));
	}
	
	
	//주문하기 누르면 주문서 정보를 띄워주기
	@GetMapping("/order")
	public ResponseEntity<?> getOrderList() {
		List<GetOrderRespDto> list = null;
		try {
			list = orderService.getOrderList();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Get User orderList Faild", list));
		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Get User orderList Success", list));
	}
	
	//결제하기 누르면 디비에 정보를 넣기 
	@PostMapping("/orderList")
	public ResponseEntity<?> postOrder(@RequestBody List<PostUserOrderReqDto> postUserOrderReqDtos) {
		
		
		boolean result = false;
		try {
			result = orderService.postUserOrder(postUserOrderReqDtos);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Post User Orderlist Faild", result));

		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Post User Orderlist Success", result));
	}
	
	//주문완료 불러오기 
	//id로 들고옵니다. 
	@GetMapping("/orderHistory")
	public ResponseEntity<?> getOrderHistory() {
		List<PaidUserOrderRespDto> list = new ArrayList<>();
		try {
			list = orderService.getUserPaidOrder();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMResponseDto<>(-1, "Get Paid User Order Faild", list));

		}
		return ResponseEntity.ok().body(new CMResponseDto<>(1, "Get Paid User Ordert Success", list));

	}
	
}

package com.bugerking.burgerking.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bugerking.burgerking.service.MapService;
import com.bugerking.burgerking.web.dto.BurgerkingRespDto;
import com.bugerking.burgerking.web.dto.CMRespDto;

import lombok.RequiredArgsConstructor;

@Controller
@RestController
@RequiredArgsConstructor
public class MapController {
	private final MapService mapService;
	@GetMapping("/store_district")
	public ResponseEntity<?> getStore(@RequestBody String burger){
		List<BurgerkingRespDto> burList = null;
		System.out.println("1");
		try {
			burList = mapService.getStore(burger);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", burList));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", burList));
	}
	
}

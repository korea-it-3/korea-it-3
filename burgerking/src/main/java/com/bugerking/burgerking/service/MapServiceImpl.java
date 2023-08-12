package com.bugerking.burgerking.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.bugerking.burgerking.domain.BurgerkingRepository;
import com.bugerking.burgerking.web.dto.BurgerkingRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MapServiceImpl implements MapService {
	private final BurgerkingRepository burgerRepo;
	public List<BurgerkingRespDto> getStore(String burger) throws Exception {
		List<BurgerkingRespDto> burgerkingRespDtos = null;
		burgerRepo.burger(burger).forEach(entity -> {
			burgerkingRespDtos.add(entity.burgerDto());
		});
		
		return burgerkingRespDtos;
	}
}

package com.bugerking.burgerking.service;

import java.util.List;

import com.bugerking.burgerking.web.dto.BurgerkingRespDto;

public interface MapService {
	public List<BurgerkingRespDto> getStore(String burger) throws Exception;
}

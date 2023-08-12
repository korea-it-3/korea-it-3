package com.bugerking.burgerking.web.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BurgerkingRespDto {
	private int storeCode;
	private String storeCity;
	private String storeDistrict;
	private String storeName;
	private String storeDetail;
	private String storeCall;
	private int storeTypeDelivery;
	private int storeTypeKing;
	private int storeTypeAllday;
	private int storeTypeMorning;
	private int storeTypeParking;
	private int storeTypeDrive;
	private double latitude;
	private double longitude;
}

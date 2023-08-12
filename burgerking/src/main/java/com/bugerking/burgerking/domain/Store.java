package com.bugerking.burgerking.domain;

import com.bugerking.burgerking.web.dto.BurgerkingRespDto;

public class Store {
	private int store_code;
	private String store_city;
	private String store_district;
	private String store_name;
	private String store_detail;
	private String store_call;
	private int store_type_delivery;
	private int store_type_king;
	private int store_type_allday;
	private int store_type_morning;
	private int store_type_parking;
	private int store_type_drive;
	private double latitude;
	private double longitude;
	
	public BurgerkingRespDto burgerDto() {
		return BurgerkingRespDto.builder()
				.storeCode(store_code)
				.storeCity(store_city)
				.storeDistrict(store_district)
				.storeName(store_name)
				.storeDetail(store_detail)
				.storeCall(store_call)
				.storeTypeDelivery(store_type_delivery)
				.storeTypeKing(store_type_king)
				.storeTypeAllday(store_type_allday)
				.storeTypeMorning(store_type_morning)
				.storeTypeParking(store_type_parking)
				.storeTypeDrive(store_type_drive)
				.latitude(latitude)
				.longitude(longitude)
				.build();
	}
}

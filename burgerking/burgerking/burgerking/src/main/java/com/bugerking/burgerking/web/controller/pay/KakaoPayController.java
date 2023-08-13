package com.bugerking.burgerking.web.controller.pay;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bugerking.burgerking.service.order.pay.KakaoPayService;
import com.bugerking.burgerking.web.dto.pay.KakaoApproveResponse;
import com.bugerking.burgerking.web.dto.pay.KakaoCancelResponse;
import com.bugerking.burgerking.web.dto.pay.KakaoReadyResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor

public class KakaoPayController {
	
    private final KakaoPayService kakaoPayService;

    /**
     * 결제요청
     */
    @PostMapping("/ready")
    public KakaoReadyResponse readyToKakaoPay() {

        return kakaoPayService.kakaoPayReady();
    }
    
    /**
     * 결제 성공
     */
    @GetMapping("/success")
    public ResponseEntity afterPayRequest(@RequestParam("pg_token") String pgToken) {

    	KakaoApproveResponse kakaoApprove = kakaoPayService.ApproveResponse(pgToken);
    	System.out.println(2);
        return new ResponseEntity<>(kakaoApprove, HttpStatus.OK);
    }


    /**
     * 결제 진행 중 취소
     */
    @GetMapping("/cancel")
    public void cancel() {

        //throw new BusinessLogicException(ExceptionCode.PAY_CANCEL);
    }

    /**
     * 결제 실패
     */
    @GetMapping("/fail")
    public void fail() {
    	
        //throw new BusinessLogicException(ExceptionCode.PAY_FAILED);
    }
    
    /**
     * 환불
     */
    @PostMapping("/refund")
    public ResponseEntity refund() {

        KakaoCancelResponse kakaoCancelResponse = kakaoPayService.kakaoCancel();

        return new ResponseEntity<>(kakaoCancelResponse, HttpStatus.OK);
    }
    

}

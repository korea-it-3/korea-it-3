package com.bugerking.burgerking.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/a")
public class PageController {
	
	@GetMapping("/home")
	public String loadHome() {
		return "burgerking-main";
	}

	@GetMapping("/store")
	public String loadStore() {
		return "burgerking-store";
	}
	
	@GetMapping("/menu/스페셜&할인팩")
	public String loadSpeDis() {
		return "menu/menu-spedis/burgerking-menu-spe&dis";
	}
	
	@GetMapping("/menu/신제품(NEW)")
	public String loadNew() {
		return "menu/menu-new/burgerking-menu-new";
	}
	
	@GetMapping("/menu/프리미엄")
	public String loadPre() {
		return "menu/menu-pre/burgerking-menu-pre";
	}
	
	@GetMapping("/menu/와퍼&주니어")
	public String loadWhoJun() {
		return "menu/menu-whojun/burgerking-menu-who&jun";
	}
	
	@GetMapping("/menu/치킨&슈림프버거")
	public String loadChiShi() {
		return "menu/menu-chishi/burgerking-menu-chi&shi";
	}
	
	@GetMapping("/menu/올데이킹&킹모닝")
	public String loadAllKing() {
		return "menu/menu-allking/burgerking-menu-all&king";
	}
	
	@GetMapping("/menu/사이드")
	public String loadSide() {
		return "menu/menu-side/burgerking-menu-side";
	}
	
	@GetMapping("/menu/음료&디저트")
	public String loadDrinDes() {
		return "menu/menu-drink/burgerking-menu-drin&des";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/01")
	public String loadSpeDis01() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-1";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/02")
	public String loadSpeDis02() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-2";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/03")
	public String loadSpeDis03() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-3";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/04")
	public String loadSpeDis04() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-4";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/05")
	public String loadSpeDis05() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-5";
	}
	
	@GetMapping("/menuDetail/스페셜&할인팩/06")
	public String loadSpeDis06() {
		return "menu/menu-spedis/burgerking-menu-spe&dis-6";
	}

	@GetMapping("/menuDetail/신제품(NEW)/01")
	public String loadNew01() {
		return "menu/menu-new/burgerking-menu-new-1";
	}

	@GetMapping("/menuDetail/신제품(NEW)/02")
	public String loadNew02() {
		return "menu/menu-new/burgerking-menu-new-2";
	}

	@GetMapping("/menuDetail/신제품(NEW)/03")
	public String loadNew03() {
		return "menu/menu-new/burgerking-menu-new-3";
	}

	@GetMapping("/menuDetail/신제품(NEW)/04")
	public String loadNew04() {
		return "menu/menu-new/burgerking-menu-new-4";
	}

	@GetMapping("/menuDetail/신제품(NEW)/05")
	public String loadNew05() {
		return "menu/menu-new/burgerking-menu-new-5";
	}
	
	@GetMapping("/menuDetail/신제품(NEW)/06")
	public String loadNew06() {
		return "menu/menu-new/burgerking-menu-new-6";
	}
	
	@GetMapping("/menuDetail/프리미엄/01")
	public String loadPre01() {
		return "menu/menu-pre/burgerking-menu-pre-1";
	}
	
	@GetMapping("/menuDetail/프리미엄/02")
	public String loadPre02() {
		return "menu/menu-pre/burgerking-menu-pre-2";
	}
	
	@GetMapping("/menuDetail/프리미엄/03")
	public String loadPre03() {
		return "menu/menu-pre/burgerking-menu-pre-3";
	}
	
	@GetMapping("/menuDetail/프리미엄/04")
	public String loadPre04() {
		return "menu/menu-pre/burgerking-menu-pre-4";
	}
	
	@GetMapping("/menuDetail/프리미엄/05")
	public String loadPre05() {
		return "menu/menu-pre/burgerking-menu-pre-5";
	}

	@GetMapping("/menuDetail/와퍼&주니어01")
	public String loadWhoJun01() {
		return "menu/menu-whojun/burgerking-menu-who&jun-1";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어02")
	public String loadWhoJun02() {
		return "menu/menu-whojun/burgerking-menu-who&jun-2";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어03")
	public String loadWhoJun03() {
		return "menu/menu-whojun/burgerking-menu-who&jun-3";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어04")
	public String loadWhoJun04() {
		return "menu/menu-whojun/burgerking-menu-who&jun-4";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어05")
	public String loadWhoJun05() {
		return "menu/menu-whojun/burgerking-menu-who&jun-5";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어06")
	public String loadWhoJun06() {
		return "menu/menu-whojun/burgerking-menu-who&jun-6";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어07")
	public String loadWhoJun07() {
		return "menu/menu-whojun/burgerking-menu-who&jun-7";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어08")
	public String loadWhoJun08() {
		return "menu/menu-whojun/burgerking-menu-who&jun-8";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어09")
	public String loadWhoJun09() {
		return "menu/menu-whojun/burgerking-menu-who&jun-9";
	}
	
	@GetMapping("/menuDetail/와퍼&주니어10")
	public String loadWhoJun10() {
		return "menu/menu-whojun/burgerking-menu-who&jun-10";
	}


	@GetMapping("/menuDetail/치킨&슈림프버거01")
	public String loadChiShi01() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-1";
	}

	@GetMapping("/menuDetail/치킨&슈림프버거02")
	public String loadChiShi02() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-2";
	}

	@GetMapping("/menuDetail/치킨&슈림프버거03")
	public String loadChiShi03() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-3";
	}

	@GetMapping("/menuDetail/치킨&슈림프버거04")
	public String loadChiShi04() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-4";
	}

	@GetMapping("/menuDetail/치킨&슈림프버거05")
	public String loadChiShi05() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-5";
	}
	
	@GetMapping("/menuDetail/치킨&슈림프버거06")
	public String loadChiShi06() {
		return "menu/menu-chishi/burgerking-menu-chi&shi-6";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝01")
	public String loadAllKing01() {
		return "menu/menu-allking/burgerking-menu-all&king-1";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝02")
	public String loadAllKing02() {
		return "menu/menu-allking/burgerking-menu-all&king-2";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝03")
	public String loadAllKing03() {
		return "menu/menu-allking/burgerking-menu-all&king-3";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝04")
	public String loadAllKing04() {
		return "menu/menu-allking/burgerking-menu-all&king-4";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝05")
	public String loadAllKing05() {
		return "menu/menu-allking/burgerking-menu-all&king-5";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝06")
	public String loadAllKing06() {
		return "menu/menu-allking/burgerking-menu-all&king-6";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝07")
	public String loadAllKing07() {
		return "menu/menu-allking/burgerking-menu-all&king-7";
	}

	@GetMapping("/menuDetail/올데이킹&킹모닝08")
	public String loadAllKing08() {
		return "menu/menu-allking/burgerking-menu-all&king-8";
	}
	
	@GetMapping("/menuDetail/올데이킹&킹모닝09")
	public String loadAllKing09() {
		return "menu/menu-allking/burgerking-menu-all&king-9";
	}

	@GetMapping("/menuDetail/사이드01")
	public String loadSide01() {
		return "menu/menu-side/burgerking-menu-side-1";
	}

	@GetMapping("/menuDetail/사이드02")
	public String loadSide02() {
		return "menu/menu-side/burgerking-menu-side-2";
	}

	@GetMapping("/menuDetail/사이드03")
	public String loadSide03() {
		return "menu/menu-side/burgerking-menu-side-3";
	}

	@GetMapping("/menuDetail/사이드04")
	public String loadSide04() {
		return "menu/menu-side/burgerking-menu-side-4";
	}

	@GetMapping("/menuDetail/사이드05")
	public String loadSide05() {
		return "menu/menu-side/burgerking-menu-side-5";
	}

	@GetMapping("/menuDetail/사이드06")
	public String loadSide06() {
		return "menu/menu-side/burgerking-menu-side-6";
	}

	@GetMapping("/menuDetail/사이드07")
	public String loadSide07() {
		return "menu/menu-side/burgerking-menu-side-7";
	}

	@GetMapping("/menuDetail/사이드08")
	public String loadSide08() {
		return "menu/menu-side/burgerking-menu-side-8";
	}

	@GetMapping("/menuDetail/사이드09")
	public String loadSide09() {
		return "menu/menu-side/burgerking-menu-side-9";
	}

	@GetMapping("/menuDetail/사이드10")
	public String loadSide10() {
		return "menu/menu-side/burgerking-menu-side-10";
	}

	@GetMapping("/menuDetail/사이드11")
	public String loadSide11() {
		return "menu/menu-side/burgerking-menu-side-11";
	}

	@GetMapping("/menuDetail/사이드12")
	public String loadSide12() {
		return "menu/menu-side/burgerking-menu-side-12";
	}

	@GetMapping("/menuDetail/사이드13")
	public String loadSide13() {
		return "menu/menu-side/burgerking-menu-side-13";
	}

	@GetMapping("/menuDetail/사이드14")
	public String loadSide14() {
		return "menu/menu-side/burgerking-menu-side-14";
	}

	@GetMapping("/menuDetail/사이드15")
	public String loadSide15() {
		return "menu/menu-side/burgerking-menu-side-15";
	}
	
	@GetMapping("/menuDetail/사이드16")
	public String loadSide16() {
		return "menu/menu-side/burgerking-menu-side-16";
	}

	@GetMapping("/menuDetail/음료&디저트01")
	public String loadDrinDes01() {
		return "menu/menu-drink/burgerking-menu-drin&des-1";
	}

	@GetMapping("/menuDetail/음료&디저트02")
	public String loadDrinDes02() {
		return "menu/menu-drink/burgerking-menu-drin&des-2";
	}

	@GetMapping("/menuDetail/음료&디저트03")
	public String loadDrinDes03() {
		return "menu/menu-drink/burgerking-menu-drin&des-3";
	}

	@GetMapping("/menuDetail/음료&디저트04")
	public String loadDrinDes04() {
		return "menu/menu-drink/burgerking-menu-drin&des-4";
	}

	@GetMapping("/menuDetail/음료&디저트05")
	public String loadDrinDes05() {
		return "menu/menu-drink/burgerking-menu-drin&des-5";
	}

	@GetMapping("/menuDetail/음료&디저트06")
	public String loadDrinDes06() {
		return "menu/menu-drink/burgerking-menu-drin&des-6";
	}

	@GetMapping("/menuDetail/음료&디저트07")
	public String loadDrinDes07() {
		return "menu/menu-drink/burgerking-menu-drin&des-7";
	}

	@GetMapping("/menuDetail/음료&디저트08")
	public String loadDrinDes08() {
		return "menu/menu-drink/burgerking-menu-drin&des-8";
	}

	@GetMapping("/menuDetail/음료&디저트09")
	public String loadDrinDes09() {
		return "menu/menu-drink/burgerking-menu-drin&des-09";
	}

	@GetMapping("/menuDetail/음료&디저트10")
	public String loadDrinDes10() {
		return "menu/menu-drink/burgerking-menu-drin&des-10";
	}

	@GetMapping("/menuDetail/음료&디저트11")
	public String loadDrinDes11() {
		return "menu/menu-drink/burgerking-menu-drin&des-11";
	}

	@GetMapping("/menuDetail/음료&디저트12")
	public String loadDrinDes12() {
		return "menu/menu-drink/burgerking-menu-drin&des-12";
	}

	@GetMapping("/menuDetail/음료&디저트13")
	public String loadDrinDes13() {
		return "menu/menu-drink/burgerking-menu-drin&des-13";
	}
	
	@GetMapping("/menuDetail/음료&디저트14")
	public String loadDrinDes14() {
		return "menu/menu-drink/burgerking-menu-drin&des-14";
	}
	
	@GetMapping("/event/0/all")
	public String loadEventAll() {
		return "event/burgerking-event-all";
	}
	
	@GetMapping("/event/0/1")
	public String loadEventNow() {
		return "event/burgerking-event-now";
	}
	
	@GetMapping("/event/0/2")
	public String loadEventPast() {
		return "event/burgerking-event-past";
	}
	
	@GetMapping("/event/1/1")
	public String loadEventNewMarket() {
		return "event/burgerking-event-newmarket";
	}
	
	@GetMapping("/eventDetail/001")
	public String loadEventDetail001() {
		return "event/detail/burgerking-evedet-1";
	}

	@GetMapping("/eventDetail/002")
	public String loadEventDetail002() {
		return "event/detail/burgerking-evedet-2";
	}

	@GetMapping("/eventDetail/003")
	public String loadEventDetail003() {
		return "event/detail/burgerking-evedet-3";
	}

	@GetMapping("/eventDetail/004")
	public String loadEventDetail004() {
		return "event/detail/burgerking-evedet-4";
	}

	@GetMapping("/eventDetail/005")
	public String loadEventDetail005() {
		return "event/detail/burgerking-evedet-5";
	}

	@GetMapping("/eventDetail/006")
	public String loadEventDetail006() {
		return "event/detail/burgerking-evedet-6";
	}

	@GetMapping("/eventDetail/007")
	public String loadEventDetail007() {
		return "event/detail/burgerking-evedet-7";
	}

	@GetMapping("/eventDetail/008")
	public String loadEventDetail008() {
		return "event/detail/burgerking-evedet-8";
	}

	@GetMapping("/eventDetail/009")
	public String loadEventDetail009() {
		return "event/detail/burgerking-evedet-9";
	}

	@GetMapping("/eventDetail/010")
	public String loadEventDetail010() {
		return "/event/detail/burgerking-evedet-10";
	}
	
	@GetMapping("/eventDetail/011")
	public String loadEventDetail011() {
		return "/event/detail/burgerking-evedet-11";
	}

	@GetMapping("/eventDetail/012")
	public String loadEventDetail012() {
		return "/event/detail/burgerking-evedet-12";
	}

	@GetMapping("/eventDetail/013")
	public String loadEventDetail013() {
		return "/event/detail/burgerking-evedet-13";
	}

	@GetMapping("/eventDetail/014")
	public String loadEventDetail014() {
		return "event/detail/burgerking-evedet-14";
	}

	@GetMapping("/eventDetail/015")
	public String loadEventDetail015() {
		return "event/detail/burgerking-evedet-15";
	}
	
	@GetMapping("/eventDetail/101")
	public String loadEventDetail101() {
		return "event/detail/burgerking-evemar-1";
	}

	@GetMapping("/eventDetail/102")
	public String loadEventDetail102() {
		return "event/detail/burgerking-evemar-2";
	}

	@GetMapping("/eventDetail/103")
	public String loadEventDetail103() {
		return "event/detail/burgerking-evemar-3";
	}

	@GetMapping("/eventDetail/104")
	public String loadEventDetail104() {
		return "event/detail/burgerking-evemar-4";
	}

	@GetMapping("/eventDetail/105")
	public String loadEventDetail105() {
		return "event/detail/burgerking-evemar-5";
	}

	@GetMapping("/eventDetail/106")
	public String loadEventDetail106() {
		return "event/detail/burgerking-evemar-6";
	}

	@GetMapping("/eventDetail/107")
	public String loadEventDetail107() {
		return "event/detail/burgerking-evemar-7";
	}

	@GetMapping("/eventDetail/108")
	public String loadEventDetail108() {
		return "event/detail/burgerking-evemar-8";
	}

	@GetMapping("/eventDetail/109")
	public String loadEventDetail109() {
		return "event/detail/burgerking-evemar-9";
	}

	@GetMapping("/eventDetail/110")
	public String loadEventDetail110() {
		return "event/detail/burgerking-evemar-10";
	}
	
	@GetMapping("/story")
	public String loadStory() {
		return "brandstory/burgerking-brandstory-brand-story";
	}
	
	@GetMapping("/qsr")
	public String loadQsr() {
		return "brandstory/burgerking-brandstory-brand-qsr";
	}
	
	@GetMapping("/whyBkr")
	public String loadWhyBkr() {
		return "brandstory/burgerking-brandstory-whopper";
	}
	
	@GetMapping("/newsAd")
	public String loadNewsAd() {
		return "brandstory/burgerking-brandstory-comm-AD";
	}
	
	@GetMapping("/awards")
	public String loadAwards() {
		return "brandstory/burgerking-brandstory-comm-award";
	}
	
	@GetMapping("/newsNewItem")
	public String loadNewsNewItem() {
		return "brandstory/burgerking-brandstory-comm-newitem";
	}
	
	@GetMapping("/esg")
	public String loadEsg() {
		return "brandstory/burgerking-brandstory-comm-esg";
	}

}

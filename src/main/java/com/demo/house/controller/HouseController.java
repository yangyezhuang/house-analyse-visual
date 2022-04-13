package com.demo.house.controller;

import com.demo.house.model.*;
import com.demo.house.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * TODO
 *
 * @Date: 2022/4/13 14:56
 * @Author: Yang Yezhuang
 */
@RestController
public class HouseController {
    @Autowired
    private HouseService houseService;

    /**
     * 各城市房源平均总价
     *
     * @return
     */
    @GetMapping("getD1")
    public List<AvgTotalPrice> queryTotalPriceByCity() {
        return houseService.queryTotalPriceByCity();
    }

    /**
     * 各城市房源平均单价
     *
     * @return
     */
    @GetMapping("getD2")
    public List<AvgUnitPrice> queryUnitPriceByCity() {
        return houseService.queryUnitPriceByCity();
    }

    /**
     * 各城市房源平均价格差
     *
     * @return
     */
    @GetMapping("getL3")
    public List<AvgUnitPriceGap> queryUnitPriceGap() {
        return houseService.queryUnitPriceGap();
    }

    /**
     * 各城市房源户型总数统计
     *
     * @return
     */
    @GetMapping("getR1")
    public List<Layout> queryTotalLayout() {
        return houseService.queryTotalLayout();
    }

    /**
     * 各城市房源楼层分布统计平均总价
     *
     * @return
     */
    @GetMapping("getR2")
    public List<Floor> queryTotalFloor() {
        return houseService.queryTotalFloor();
    }
}

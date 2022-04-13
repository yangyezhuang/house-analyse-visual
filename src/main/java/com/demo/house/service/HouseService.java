package com.demo.house.service;

import com.demo.house.mapper.HouseMapper;
import com.demo.house.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * TODO
 *
 * @Date: 2022/4/13 15:06
 * @Author: Yang Yezhuang
 */
@Service
public class HouseService {

    @Autowired
    private HouseMapper houseMapper;

    public List<AvgTotalPrice> queryTotalPriceByCity() {
        return houseMapper.queryTotalPriceByCity();
    }

    public List<AvgUnitPrice> queryUnitPriceByCity() {
        return houseMapper.queryUnitPriceByCity();
    }

    public List<AvgUnitPriceGap> queryUnitPriceGap() {
        return houseMapper.queryUnitPriceGap();
    }

    public List<Layout> queryTotalLayout() {
        return houseMapper.queryTotalLayout();
    }

    public List<Floor> queryTotalFloor() {
        return houseMapper.queryTotalFloor();
    }
}

package com.demo.house.mapper;

import com.demo.house.model.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * TODO
 *
 * @Date: 2022/4/13 15:03
 * @Author: Yang Yezhuang
 */
@Mapper
public interface HouseMapper {

    @Select("select city,round(avg(total_price),2) as AvgTotalPrice from house_tbl group by city;")
    List<AvgTotalPrice> queryTotalPriceByCity();

    @Select("select city,round(avg(unit_price),0) as AvgUnitPrice from house_tbl group by city;")
    List<AvgUnitPrice> queryUnitPriceByCity();

    @Select("select city,max(round(avg(unit_price),0)) as max,min(round(avg(unit_price),0)) as min from house_tbl group by city;")
    List<AvgUnitPriceGap> queryUnitPriceGap();

    @Select("select layout as name,count(layout) as value from house_tbl group by name order by value desc limit 10;")
    List<Layout> queryTotalLayout();

    @Select("select floor as name,count(floor) as value from house_tbl group by name order by value desc limit 5;")
    List<Floor> queryTotalFloor();

}

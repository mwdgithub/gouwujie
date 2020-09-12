import { request } from "../network/request";

// ES5
export function getDetal(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}

//获得推荐商品数据
export function getRecommends() {
  return request({
    url: "/recommend",
  });
}

export class Goods {
  //构造函数
  //constructor 构造器
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
    
  }
}

//ES6 创建对象
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
    this.isBetter=shopInfo.isMarked
    ;
  }
}
export class GoodssParam {
  constructor(info, rule) {
    // 注释:images可能没有值(某些商品有值,某些商品没值)
    this.image = info.images ? info.images[0] : "";
    this.info = info.set;
    this.size = rule.tables;
  }
}

/**
 * 通过类的构造函数来获得商品INfo
 */
// export class Goods {
//   constructor(itemInfo, columns, services) {
//     this.title = itemInfo.title;
//     this.desc = itemInfo.desc;
//     this.newPrice = itemInfo.lowNowPrice;
//     this.oldPrice = itemInfo.oldPrice;
//     this.discount = itemInfo.discountDesc;
//     this.columns = columns;
//     this.services = services;
//     this.nowPrice = itemInfo.highNowPrice;
//     // this.discountBgColor = itemInfo.discountBgColor;
//   }
// }

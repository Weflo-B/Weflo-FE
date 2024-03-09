export interface OrderListData {
  date: string;
  items: {
    image: string;
    title: string;
    subTitle: string;
    count: number;
    state: string;
    price: number;
  }[];
}

export interface InsuranceDataContent {
  [kind: string]: string[];
}

export interface insuranceData {
  isJoin: boolean;
  joinDate: string;
  updateDate: string;
  insuranceRate: number;
}

export interface GuestInsuranceData {
  benefit: {
    header: string;
    subHeader: string;
    benefitList: string[];
    contactNum: string;
    workingTime: string;
  };
  insuranceItem: {
    header: string;
    subHeader: string;
    dropDown: {
      header: string;
      content: InsuranceDataContent[];
    }[];
  }[];
}

export interface DronePartData {
  id: number;
  droneImg: string;
  nickname: string;
  balanceScore: number;
  totalScore: number;
  orderDate: string;
  estimateDate: string;
  productsInfo: {
    productImage: string;
    category: string;
    name: string;
    price: number;
    // salePrice: number;
    // totalPrice: number;
    amount: number;
  }[];
}

export interface PartOnSaleData {
  [kind: string]: {
    img: string;
    detail: string;
    salePrice: number;
    wefloPrice: number;
    num: number;
    arrivalDate: string;
  };
}

export interface DronePartDetailData {
  img: string;
  name: string;
  id: number;
  orderDate: string;
  currentPart: {
    [kind: string]: {
      name: string;
      score: number;
    }[];
  }[];
  salePart: PartOnSaleData[];
}
